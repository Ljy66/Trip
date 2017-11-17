<template>
	<main>
		 <div class="navbar">
		    		首页
		    		<span class="right">
		    			<router-link to="/search">
		    				<i class="fa fa-search" aria-hidden="true">
			                </i>
		    			</router-link>
		    		</span>
		 </div>
		<div class="banner">
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
		<div class="list">
			<ul>
			<li>
				<router-link to='/cool'>
					<img src="../../assets/image/indexFour1.jpg" alt="" />
				</router-link>
			</li>
			<li>
				<router-link to='/strategy'>
					<img src="../../assets/image/indexFour2.png" alt="" />
				</router-link>
			</li>
			<li>
				<router-link to='/sort'>
					<img src="../../assets/image/indexFour3.jpg" alt="" />
				</router-link>
			</li>
			<li>
				<router-link to='/rank'>
					<img src="../../assets/image/indexFour4.png" alt="" />
				</router-link>
			</li>
		</ul>
		</div>
		
		<div class="title">
			发现美好
		<i class="fa fa-arrow-right" aria-hidden="true"></i>
		</div>
		<div class="content">
			<ul>
				<li v-for="v in msg">
					<router-link :to="{name:'n_detail',params:{con:v.con,info:v.info,img:v.imgurl,title:v.title}}">
						<img :src="v.imgurl"/>
						<div class="info">
								<h4>{{v.title}}</h4>
						        <p>{{v.address}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import footer from '../public/footer.vue';
	export default{
		data(){
			return {
				msg:''
			}
		},
		mounted(){
			this.$http.get('data/data.json').then(function(res){
				this.msg=res.body.result.sceneryList;
			},function(res){
				console.log()
			})
		},
		methods:{
			
		},
		components:{
			'v-footer':footer
		}
		
	}
</script>
<style scoped>
	main{
		max-width: 1000px;
		width: 100%;
		font-family: "微软雅黑";
	}
	.navbar{
		z-index: 999;
		max-width:1000px;
		background:#46bbbc;
		color:#fff;
		font-size: 20px;
		width: 100%;
		padding: 0 8px;
		text-align: center;
		box-sizing: border-box;
		vertical-align: middle;
		height:56px;
		line-height: 56px;
		position: fixed;
		top: 0;
	}
	.right{
		float: right;
	}
	.right>a{
		color:#fff;
	}
	.banner{
		margin-top:56px;
		width: 100%;
		
	}
	.banner img{
		width: 100%;
	}
	/*.banner>ul,.banner>ul>li,.list,.content,.content>ul,.content>ul>li{
		width: 100%;
	}*/
	img{
		width: 100%;
	}
	/*导航列*/
	.list>ul{
		overflow: hidden;
		width: 100%;
	}
	.list>ul>li{
		width: 50%;
		float: left;
	}
	/*主题标题*/
	.title{
		width: 100%;
		box-sizing: border-box;
		border-left: 5px solid #46bbbc;
		padding: 10px 10px 10px 20px;
		margin-top: 12px;
		font-size: 18px;
		color: #000;
		background: #fff;
		font-weight: 700;
	}
	.title .fa-arrow-right{
		float: right;
		color:#46bbbc;
	}
	/*内容展示列表*/
	.content{
		margin-bottom: 21%;
	}
	.content>ul{
		overflow: hidden;
		padding: 0 5%;
		box-sizing: border-box;
	}
	.content>ul>li{
		text-align: center;
		width: 90%;
		padding: 0 5%;
		margin-top: 5%;
		line-height: 1.8rem;
	}
	.content>ul>li>img{
		width: 100%;
	}
	.info{
		padding:0 16px;
	}
	.info h4{
		text-align: left;
		font-size: 18px;
		line-height: 20px;
		color: #000;
		
	}
	.info p{
		font-size: 14px;
		color:rgba(0,0,0,0.5);
		text-align: right;
	}
</style>
<style>	
	.banner>.mint-swipe>.mint-swipe-items-wrap{
		padding-bottom: 60%;
	}
	a{
		text-decoration: none;
		color: #000;
	}
</style>
<!--蜜蜂网攻略接口：http://www.mafengwo.cn/search/s.php?q=%E4%BA%91%E5%8D%97&t=article_gonglve-->
<!--蜜蜂网搜索接口：http://www.mafengwo.cn/search/s.php?q=%E4%BA%91%E5%8D%97&seid=4C7252FF-1FA4-4621-BF85-A1FA25DDB4F0-->