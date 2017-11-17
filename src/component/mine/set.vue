<template>
	<main>
		<div class="aTop">
			<div class="aTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			         设置
			</div>
			<div class="aContent">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510491727&di=6da0a059ed6711d8b0df2b54893edfbb&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170711%2F230c0b6fb81b48cba8d4aeecbeda1bbe.png"/>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
		height: 100%;
		z-index: 999;
	}
	.aTop{
		width: 100%;
	}
	.aTop .aTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.aTop .aTopBar>i{
		float: left;
		line-height: 56px;
	}
	.aContent,.aContent>img{
		width: 100%;
	}
</style>