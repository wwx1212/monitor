import request from '@hosele/hosele-ui/package/utils/request'

// 客户，车辆 数据分配
export function issue(params) {
  return request.postXForm('/data/rule/action/issue', params)
}

// 选择渠道商
export function selectChannels(params) {
  return request.postXForm('/biz/company/selectChannels', params)
}

// 选择分公司
export function selectSubCompany(params) {
  return request.postXForm('/biz/company/selectSubCompany', params)
}

// 选择分公司部门
export function channelOrg(params) {
  return request.postXForm('/sys/organization/channelOrg', params)
}
