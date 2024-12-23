<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  padding-right: 0px !important;
  //overflow: hidden !important;
}

#driver-popover-item {
  min-width: 330px !important;
  max-width: 400px !important;
  //min-height: 200px !important;
}

#driver-popover-item .driver-popover-footer .driver-prev-btn {
  background: #FFFFFF !important;
  color: #2368F5;
  border: 1px solid #2368F5;
}

#driver-popover-item .driver-popover-footer .driver-next-btn {
  background: #2368F5 !important;
  color: #FFFFFF;
}

#driver-popover-item .driver-popover-footer .driver-close-btn {
  background: #FFFFFF !important;
  color: #2368F5;
  border: none;
}

#driver-highlighted-element-stage, #driver-page-overlay {
  background: transparent !important;
  outline: 5000px solid rgba(0, 0, 0, 0.75);
}

#driver-popover-item .driver-popover-footer button {
  text-shadow: none !important;
}

</style>
