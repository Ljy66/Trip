<template>
	<main>
		<div class="wTop">
			<div class="wTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			   我的行程
			</div>
			<div class="wContent">
				<img src="../../assets/image/travel.png"/>
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
	.wTop{
		width: 100%;
	}
	.wTop .wTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.wTop .wTopBar>i{
		float: left;
		line-height: 56px;
	}
	.wContent{
		width: 100%;
		min-height: 900px;
		/*background: url(../../assets/image/travel.png) no-repeat center center;
		background-size: cover;*/
	}
	.wContent>img{
		width: 100%;
	}
</style>