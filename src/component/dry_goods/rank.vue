<template>
	<main>
		<div class="soTop">
			<div class="soTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			          Go
			</div>
		</div>
		<div class="soImg">
			<img src="../../assets/image/banner1.png" />
		</div>
		<div class="soContent">
			<ul>
				<li v-for="v in msg.list">
					<img v-lazy="v.ext.pic_url"/>
						<p>{{v.ext.title}}</p>
						<p class="time">2017</p>
				</li>
				<li v-for="v in data.list">
					<img v-lazy="v.ext.pic_url"/>
						<p>{{v.ext.title}}</p>
						<p class="time">2017</p>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				data:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mounted(){
			this.$http.get('data/topic.json').then(function(res){
				console.log(res.body);
				this.msg=res.body.topic[0];
				this.data=res.body.topic[1];
				
			},function(){
				console.log(error)
			})
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
	.soTop{
		width: 100%;
	}
	.soTop .soTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		align-self: center;
	}
	/*banner图*/
	.soImg{
		width: 100%;
		height:220px;
	}
	.soImg>img{
		width: 100%;
		height: 100%;
	}
	/*热门动态*/
	.soContent{
		width: 100%;
		padding: 10px 5%;
		box-sizing: border-box;
	}
	.soContent>ul,.soContent>ul>li,.soContent>ul>li h4,.soContent>ul>li p{
		width: 100%;
	}
	.soContent>ul>li{
		padding: 0 5%;
		box-sizing: border-box;
		margin-top: 10px;
	}
	.soContent>ul>li>img{
		width: 100%;
	}
	.topicRight{
		margin-left:20px;
		padding-left: 10px;
		box-sizing: border-box;
		float:left;
	}
	.soContent .time{
	   color:rgba(0,0,0,0.5);
	   font-size: 14px;
	   text-align: right;
	}
</style>