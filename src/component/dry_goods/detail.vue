<template>
	<main>
		<div class="aTop">
			<div class="aTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			         干货详情
			</div>
			<div class="aContent">
				<ul>
					<li>
						<h4>{{this.$route.params.title}}</h4>
						<img :src="this.$route.params.img" alt="" />
						<p>{{this.$route.params.con}}</p>
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
	.aContent,.aContent>ul,.aContent>ul>li{
		width: 100%;
	}
	.aContent>ul>li{
		padding: 0 10%;
		box-sizing: border-box;
	}
	.aContent>ul>li>img,.aContent>ul>li>p{
		width: 100%;
	}
	.aContent>ul>li>h4{
		font-size: 17px;
		font-weight: bold;
		text-align: center;
		margin: 10px 0;
	}
	.aContent>ul>li>p{
		line-height: 1.8rem;
		text-indent: 2em;
		font-size: 17px;
	}
</style>