<template>
	<main>
		<div class="navbar">
		    		话题
		    		<span class="right">
		    			<router-link to="/search">
		    				<i class="fa fa-search" aria-hidden="true">
			                </i>
		    			</router-link>
		    		</span>
		 </div>
		<div class="top">
			<div class="writeFilter"></div>
				<img src="../../assets/image/topic1.jpg"/>
			<div class="topicbanner">
				<div class="borderTop"></div>
				<p class="topicTitle">#那些让人羡慕的爱情#</p>
				<p class="topicbottom">快来参与吧！</p>
		    </div>
		    <div class="topicBannerDev">
		    	<p>
		    		那些让人羡慕的爱情，多么美丽，和大家说说吧！
		    		那些让人羡慕的爱情，多么美丽，和大家说说吧！
		    	</p>
		    </div>
		</div>
		<div class="title">
			热门话题
		</div>
		<div class="topic">
			<ul>
				<li v-for="v in topic">
					<router-link :to="{name:'movement',params:{con:v.con,src:v.src,img:v.img,title:v.title}}">
					<img :src="v.src" />
					<h4>#{{v.title}}#</h4>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="title">
			热门动态
		</div>
		<div class="move">
			<ul>
				<li v-for="v in move">
					
					<img :src="v.src"/>
					<span class="topicRight">
						<p>{{v.name}}</p>
						<p class="time">{{v.time}}</p>
					</span>
					<div class="content">
						{{v.con}}
					</div>
				</li>
			</ul>
			
		</div>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import footer from '../public/footer.vue';
	var time=new Date();
	time=time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate();
	export default{
		data(){
			return {
			msg:'',
			topic:[
			{
				"src":"src/assets/image/topic2.png",
			    "title":"我们喜欢的明星都结婚了",
			    "con":"暑假的日子美滋滋，微信娘一觉睡到自然醒，打开微博发现“双宋”宣布结婚！",
                 "img":['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=274806079,2696255300&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2376279700,1452969032&fm=11&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2572754077,1834835143&fm=27&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1403727188,4000606078&fm=27&gp=0.jpg']      
			},
			{
				"src":"src/assets/image/topic3.png",
			    "title":"我好像开始喜欢你了",
			    "con":"嗯？听说你不看韩剧？那么你一定不会忘记这句台词：你还记得大明湖畔的夏雨荷吗？是的，接下来这一对CP就是紫薇格格和老干部霍建华，他俩突然宣布结婚，正如今天的双宋一般，震惊又惊喜呢！",
			    "img":['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3262225893,2905028779&fm=27&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2597450573,1687538133&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1591189388,1916079934&fm=27&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2230208974,1251918358&fm=27&gp=0.jpg']
			},
			{
				"src":"src/assets/image/topic4.png",
			    "title":"前任送的礼物留还是扔",
			    "con":"溢出屏幕的幸福啦～这些歌曲耳熟能详，他和昆凌的世纪浪漫婚礼打破了男明星害怕脱粉而不敢结婚的娱乐圈传言。",
				"img":['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3104918486,3376368840&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1045315215,379580101&fm=27&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2750440216,3105094736&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1339870973,1302209897&fm=27&gp=0.jpg']
			}],
			move:[
			{
				"name":'Jaspor',
				"src":'src/assets/image/head1.png',
				"time":time,
				"con":'打一场比赛，我们过关斩将，力求通关。玩一个游成，我们全情投入，期待通关。谈一回恋爱，分分合合，持久作战，只为过一场人生，经历多少悲欢洗礼，天人交战，最终才能活的明白通透，顺利通关？天下事，事事皆是修炼，时时都在通关之路上。我把这些相碎的念头揉捻成了《通关》这首歌。'
			},
			{
				"name":'Jason',
				"src":'src/assets/image/head2.png',
				"time":time,
				"con":'打一场比赛，我们过关斩将，力求通关。玩一个游成，我们全情投入，期待通关。谈一回恋爱，分分合合，持久作战，只为过一场人生，经历多少悲欢洗礼，天人交战，最终才能活的明白通透，顺利通关？天下事，事事皆是修炼，时时都在通关之路上。我把这些相碎的念头揉捻成了《通关》这首歌。'
			}]
			}
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
		font-family: "微软雅黑";
	}
	a{
		text-decoration: none;
		color: #000;
	}
	/*头部*/
	.navbar{
		max-width: 1000px;
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
		z-index: 999;
	}
	.right{
		float: right;
	}
	.right>a{
		color:#fff;
	}
	.top{
		margin-top: 56px;
		position: relative;
		padding-bottom: 5%;
		box-sizing: border-box;
	}
	.top,.top>img{
		width: 100%;
	}
	/*图片背景*/
	.writeFilter{
		position: absolute;
		width: 100%;
		/*height: 200px;*/
		background: rgba(0,0,0,0.5);
		height: 100%;
	}
	/*文字*/
	.topicbanner{
		color:orange;
		text-align: center;
		position: absolute;
		right: 15%;
		bottom:120px;
		width: 70%;
		height: 80px;
		vertical-align:baseline;
		z-index: 900;
	}
	.borderTop{
		border-top: 2px solid #dedede;
	}
	.topicTitle{
		padding: 15px 0 10px;
		font-weight: 700;
		font-size: 18px;
	}
	.topicbottom{
		font-size: 15px;
	}
	.topicbottom::before{
		box-sizing: border-box;
		content: " ";
		border-top: 2px solid #dedede;
		position: absolute;
		width: 30%;
		bottom:13px;
		left: 0;
	}
	.topicbottom::after{
		box-sizing: border-box;
		content: " ";
		border-top: 2px solid #dedede;
		position: absolute;
		width: 30%;
		bottom:13px;
		right: 0;
	}
	/*话题框*/
	.topicBannerDev{
		width: 100%;
		height: 50px;
		background: #fff;
		padding-top: 2px;
		
	}
	.topicBannerDev p{
		padding: 0 20px;
	}
	/*标题框*/
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
	/*热门话题*/
	.topic,.topic>ul{
		width: 100%;
		
	}
	.topic>ul{
		overflow: hidden;
	}
	.topic>ul>li{
		width: 28%;
		float: left;
		margin:0 2%;
		box-sizing: border-box;
	}
	.topic>ul>li img{
		width: 100%;
		height: 100px;
	}
	/*热门动态*/
	.move{
		width: 100%;
		padding: 0 8%;
		box-sizing: border-box;
	}
	.move img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.move .img>img{
		width: 100%;
	}
	.topicRight{
		margin-left: 20px;
		display: inline-block;
	}
	.move .content{
		margin-left: 60px;
		
	}
	.move .time{
		color:rgba(0,0,0,0.5);
	   font-size: 14px;
	}
</style>