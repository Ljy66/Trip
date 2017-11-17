<template>
	<main>
		<div class="aTop">
			<div class="aTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			         咨询客服
			</div>
			<div class="aContent">
				<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3860274114,904265755&fm=11&gp=0.jpg"/>
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