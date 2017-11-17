<template>
	<main>
		<div class="bTop">
			<div class="bTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			      详情~~
			</div>
		</div>
		<div class="bImg">
			<img :src="this.$route.params.src" />
		</div>
		<div class="bContent">
			<h4>
				{{this.$route.params.title}}
			</h4>
			<p class="bP">
				{{this.$route.params.con}}
			</p>
		</div>
		<div class="bList">
			<ul>
				<li v-for="v in this.$route.params.img">
					<img v-lazy="v"/>
				</li>
			</ul>
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
	/*头部*/
	.bTop{
		width: 100%;
	}
	.bTop .bTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.bTop .bTopBar>i{
		float: left;
		line-height: 56px;
	}
	/*banner图*/
	.bImg{
		width: 100%;
	}
	.bImg>img{
		width: 100%;
		height: 100%;
	}
	/*内容区*/
	.bContent{
		width: 100%;
		padding: 0 10%;
		box-sizing: border-box;
		line-height: 1.4rem;
	}
	/*引言*/
	.bContent>.bP{
		font-size: 17px;
		line-height: 1.8rem;
		color:rgba(0,0,0,0.6);
	}
	/*图片列表*/
	.bList{
		padding-top: 10px;
		line-height: 1.6rem;
	}
	.bList,.bList>ul,.bList>ul>li{
		width: 100%;
		text-align: center;
	}
	.bList>ul>li{
		margin-top: 10px;
		height: 250px;
	}
	.bList>ul>li>img{
		width: 90%;
		border-radius: 15px;
	}
</style>