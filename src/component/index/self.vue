<template>
	<main>
		<div class="seTop">
			<div class="seTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			            景点详情
			</div>
		</div>
		<div class="seImg">
			<mt-swipe :auto="4000">
			  	 <mt-swipe-item>
			  	     <img src="../../assets/image/banner1.png"/>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="../../assets/image/banner2.png"/>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="../../assets/image/banner3.png"/>
				  </mt-swipe-item>
		    </mt-swipe>
		</div>
		<div class="seContent">
			<p class="seP">
				{{this.$route.params.info}}
			</p>
			<div class="seList">
				<ul>
					<li>
						<img :src="this.$route.params.img" alt="" />
						<h4>
							{{this.$route.params.title}}
						</h4>
						<p>
							{{this.$route.params.con}}
						</p>
						
					</li>
				</ul>
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
	/*头部*/
	.seTop{
		width: 100%;
	}
	.seTop .seTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.seTop .seTopBar>i{
		float: left;
		line-height: 56px;
	}
	/*banner图*/
	.seImg{
		width: 100%;
		height:150px;
	}
	.seImg>img{
		width: 100%;
		height: 100%;
	}
	/*内容区*/
	.seContent{
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		line-height: 1.4rem;
	}
	/*引言*/
	.seContent>.seP{
		font-size: 16px;
		line-height: 1.6rem;
		color:rgba(0,0,0,0.6);
	}
	/*景点列表*/
	.seList{
		padding-top: 10px;
		line-height: 1.6rem;
	}
	.seList,.seList>ul,.seList>ul>li{
		width: 100%;
		text-align: center;
	}
	.seList>ul>li{
		margin-top: 10px;
	}
	.seList>ul>li>h4{
		font-size: 18px;
		font-weight:bold;
		text-align: left;
	}
	.seList>ul>li>p{
		text-indent: 2em;
		font-size: 14px;
		color:rgba(0,0,0,0.6);
		text-align: left;
	}
	.seList>ul>li>img{
		width: 100%;
		height: 150px;
		border-radius: 15px;
	}
</style>
<style>	
	.seImg>.mint-swipe>.mint-swipe-items-wrap{
		padding-bottom: 40%;
	}
</style>