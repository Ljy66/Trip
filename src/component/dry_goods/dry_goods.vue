<template>
	<main>
		 <div class="navbar">
		    		干货
		    		<span class="right">
		    			<router-link to="/search">
		    				<i class="fa fa-search" aria-hidden="true">
			                </i>
		    			</router-link>
		    		</span>
		 </div>
		<div class="banner">
			<mt-swipe auto:="4000">
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
				<router-link to='/sort'>
					<i class="fa fa-star-o" aria-hidden="true"></i>
					<span>干货分类</span>
				</router-link>
			</li>
			<li>
				<router-link to='/rank'>
					<i class="fa fa-tasks" aria-hidden="true"></i>
					<span>干货排行</span>
				</router-link>
			</li>
		</ul>
		</div>
		
		<div class="title">
			热门干货
		</div>
		<div class="content">
			<ul>
				<li v-for="v in goods">
					<router-link :to="{name:'detail',params:{title:v.scenicName,img:v.picSrc,con:v.scenicIntro}}">
						<img v-lazy="v.picSrc"/>
						<div class="info">
							<h4>{{v.scenicName}}</h4>
						    <p>2017-07-03</p>
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
				goods:''
			}
		},
		methods:{
			
		},
		mounted(){
			this.$http.get('data/data.json').then(function(res){
				this.goods=res.body.retData;
			},function(res){
				console.log(res);
			})
		},
		components:{
			'v-footer':footer
		}
		
	}
</script>
<style scoped>
	main{
		width: 100%;
		font-family: "微软雅黑";
		box-sizing: border-box;
	}
	a{
		text-decoration: none;
		color: #000;
	}
	/*头部*/
	.navbar{
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
	.banner{
		margin-top:56px;
		width: 100%;
		
	}
	.banner img{
		width: 100%;
	}
	.right{
		float: right;
	}
	.right>a{
		color:#fff;
	}
	.banner>ul,.banner>ul>li,.list,.content,.content>ul,.content>ul>li{
		width: 100%;
	}
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
		text-align: center;
		line-height: 1.4rem;
		justify-content: center;
		align-items: center;
	}
	.list>ul>li>a{
		text-decoration: none;
		color:#46bbbc;
	}
	.list>ul>li>a>span{
		padding-left:8px ;
		padding-right: 16px;
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
	/*内容展示列表*/
	/*.content img{
		width: 60px;
		height: 60px;
		margin:10px 20px;
		float: left;
		
	}*/
	.content,.content>ul,.content>ul>li{
		width: 100%;
	}
	.content>ul{
		overflow: hidden;
		padding: 0 5%;
	}
	.content>ul>li{
		height: 100px;
		margin-top: 10px;
	}
	.content>ul>li img{
		width: 20%;
		float: left;
	}
	.info{
		padding: 16px;
		width: 65%;
		float: right;
		margin-left: 5%;
	}
	.info>p{
		font-size: 14px;
		color:rgba(0,0,0,0.5);
		float: right;
		padding-right: 5%;
	}
</style>
<style>	
	.banner>.mint-swipe>.mint-swipe-items-wrap{
		padding-bottom: 60%;
	}
</style>