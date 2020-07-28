<template>
  <div id="app">
    <!-- Detail 组件页面不被缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
