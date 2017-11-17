<template>
	<main>
		<div class="sTop">
			<div class="sTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			    游玩攻略
			</div>
		</div>
		<div class="sBanner">
			<img src="../../assets/image/banner2.png"/>
		</div>
		<div class="sList">
			<ul>
				<li>
					<img src="../../assets/image/head1.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button @click="get">立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head2.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button>立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head1.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button @click="get">立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head2.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button>立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head1.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button @click="get">立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head2.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button>立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head1.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button @click="get">立即获取</button>
				</li>
				<li>
					<img src="../../assets/image/head2.png" alt="" />
					<h4>成都专属攻略</h4>
				    <button>立即获取</button>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				arr:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			get(){
				console.log(this.arr)
			}
		},
		mounted(){
		this.$http.jsonp('http://lvyou.baidu.com/destination/app/view?apiv=v5',{
							params:{
								sid:'17070a5c91ca872746461bf4'
							},jsonp:'callback'}).then(function(res){
							this.arr=res.body.data.mod_list;
						},function(res){
							console.log(error);
						})	
						
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
	}
	.sTop{
		width: 100%;
	}
	.sTop .sTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.sTop .sTopBar>i{
		float: left;
		line-height: 56px;
	}
	.sBanner{
		width: 100%;
		height:150px;
	}
	.sBanner>img{
		width: 100%;
		height: 100%;
	}
	.sList{
		width: 100%;
		padding:10px;
		box-sizing: border-box;
	}
	.sList>ul{
		width: 100%;
		/*overflow: hidden;*/
		padding:0 10px;
	}
	.sList>ul>li{
		box-sizing: border-box;
		margin:2%;
		float: left;
		width: 45%;
		text-align: center;
		border: 2px solid #153764;
		border-radius:10px;
		position: relative;
		padding-bottom: 25px;
	}
	.sList>ul>li>img{
		width: 100%;
		border-radius:10px;
	}
	.sList>ul>li>h4{
		color:#153764;
		font-size: 15px;
	}
	.sList>ul>li>button{
		border: 2px solid #153764;
		position: absolute;
		bottom: -8px;
		left: 23%;
		border-radius:50px;
		background: orange;
		color: #fff;
		width: 60%;
		font-size: 14px;
		font-weight: bold;
		padding: 5px;
	}
</style>