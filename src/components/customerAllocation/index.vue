<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="分配类型" prop="issueDataType">
            <el-radio-group v-model="form.issueDataType" @change="radioChange">
              <el-radio label="0">部门</el-radio>
              <!--              <el-radio label="1">合作公司</el-radio>-->
              <!--              <el-radio label="2">分公司</el-radio>-->
              <!--              <el-radio label="3">个人</el-radio>-->
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="form.issueDataType !== '0' && form.issueDataType !== '3'" :rules="[{ required: true, message: '请选择公司名称', trigger: 'change' }]" label="公司名称" prop="channelId">
            <el-select v-model="form.channelId" placeholder="请选择" @change="channelIdChange">
              <el-option v-for="item in options" :key="item.id" :label="item.companyName" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item v-if="form.issueDataType !== '1'" label="负责部门" prop="organizationId">
            <system-organization v-model="form.organizationId" :data="treeList" @change="changeOrg" />
          </el-form-item>
          <!--          <el-form-item v-if="form.issueDataType === '3'" :rules="form.issueDataType === '3' ? { required: true, message: '请选择负责人', trigger: 'change' } : {}" label="负责人" prop="userId">-->
          <!--            <hosele-select v-model="form.userId" :default-data="user" :disabled="showHead" />-->
          <!--          </el-form-item>-->
          <el-form-item label="城市" prop="region">
            <hosele-region v-model="form.region" :label-is-value="true" :lazy="false" :level="2" placeholder="请选择城市" style="width: 100%" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { errorClose, successClose } from '@hosele/hosele-ui/package/utils/message'
import SystemOrganization from '@/components/System/systemOrganization'
import { userByOrg } from '@/api/sys/user'
import { fetchOrganizationList } from '@/api/sys/organization'
import { channelOrg, issue, selectChannels, selectSubCompany } from '@/components/customerAllocation/api/data'

export default {
  name: 'CustomerAllocation',
  components: { SystemOrganization },
  props: {
    title: {
      type: String,
      default: '客户分配'
    }
  },
  data() {
    return {
      form: {
        issueType: '',
        ids: '',
        organizationId: '',
        issueDataType: '0',
        userId: '',
        channelId: null,
        region: ''
      },
      treeList: [],
      options: [],
      channelOptions: [],
      subCompanyOptions: [],
      showHead: false,
      dialogVisible: false,
      includeChannel: true,
      user: [],
      selection: [],
      rules: {
        issueDataType: [{ required: true, message: '请选择分配类型', trigger: 'change' }],
        organizationId: [{ required: true, message: '请选择负责部门', trigger: 'change' }]
      }
    }
  },

  watch: {
    'form.issueDataType': {
      handler(val) {
        this.showHead = val === '0'
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    channelIdChange(val) {
      if (this.form.issueDataType === '1') {
        const data = this.channelOptions.filter((item) => {
          return item.id === val
        })
        this.$set(this.form, 'region', data[0]?.dataBelongRegion)
      } else if (this.form.issueDataType === '2') {
        const data = this.subCompanyOptions.filter((item) => {
          return item.id === val
        })
        this.$set(this.form, 'region', data[0]?.dataBelongRegion)
        this.channelOrg(val)
      }
    },
    radioChange() {
      if (this.form.issueDataType === '0') {
        this.getTreeList()
      } else if (this.form.issueDataType === '1') {
        this.form.region = ''
        this.form.channelId = null
        this.options = this.channelOptions
      } else if (this.form.issueDataType === '2') {
        this.form.region = ''
        this.form.channelId = null
        this.options = this.subCompanyOptions
      }
    },
    channelOrg(id) {
      channelOrg({
        companyId: id
      }).then((res) => {
        if (res.data.success) {
          this.treeList = res.data.data
        }
      })
    },
    selectSubCompany() {
      selectSubCompany().then((res) => {
        if (res.data.success) {
          this.subCompanyOptions = res.data.data
        }
      })
    },
    selectChannels() {
      selectChannels().then((res) => {
        if (res.data.success) {
          this.channelOptions = res.data.data
        }
      })
    },
    getTreeList() {
      fetchOrganizationList().then(({ data }) => {
        if (data.success) {
          this.treeList = data.data
        }
      })
    },
    changeOrg(val) {
      userByOrg(val).then(({ data }) => {
        if (data.success) {
          this.user = data.data
        }
      })
    },
    handleCreate(selection, type) {
      this.form = {
        issueType: '',
        ids: '',
        organizationId: '',
        issueDataType: '0',
        userId: '',
        channelId: null,
        region: ''
      }
      if (!selection || selection.length <= 0) {
        errorClose('请至少选中一行数据')
        return
      }
      this.form.issueType = type
      this.selectChannels()
      this.selectSubCompany()
      this.getTreeList()
      this.selection = selection
      this.dialogVisible = true
    },
    handleConfirm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.form.ids = this.selection.map((select) => {
            return select.id
          })
          issue(this.form).then(({ data }) => {
            if (data.success) {
              successClose(data.msg)
              this.dialogVisible = false
              this.$emit('refreshList')
            } else {
              errorClose(data.msg)
            }
          })
        }
      })
    }
  }
}
</script>
