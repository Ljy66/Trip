<template>
    <main>
    	<!--<v-header></v-header>-->
    	<router-view></router-view>
    	<!--<v-footer v-show='show'></v-footer>-->
    </main>
</template>
<script>
	import header from './component/public/header.vue';
	import footer from './component/public/footer.vue';
  export default {
  data () {
    return {
      show:'true',
      msg: 'Welcome to Your Vue.js App',
      arr:{
      	title:['发现','话题','干货']
      }
    }
  },
  components:{
  	'v-header':header,
  	'v-footer':footer,
  }
}
</script>

<style>
    html,body{
    	width: 100%;
    	font-family: "微软雅黑";
    }
</style>
