<template>
	<main>
		<div class="soTop">
			<div class="soTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			          Action
			</div>
		</div>
		<div class="soImg">
			<img src="../../assets/image/baseline1.png" />
		</div>
		<div class="soContent">
			<ul>
				<li v-for="v in sort">
						<img v-lazy="v.picSrc"/>
					<div class="topicRight">
						<h4>{{v.scenicName}}</h4>
						<p class="time">{{v.scenicIntro|add}}</p>
				    </div>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				sort:''
			}
		},
		filters:{
			add(n){
				return n.substr(4,25)+'...'
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mounted(){
			this.$http.get('data/data.json').then(function(res){
				this.sort=res.body.retData;
			},function(res){
				console.log(res)
			})
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
		height: 100%;
		z-index: 999;
		box-sizing: border-box;
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
		padding-bottom: 1%;
	}
	.soImg img{
		width: 100%;
		height: 100%;
	}
	/*内容*/
	.soContent>ul{
		padding: 0 2%;
		overflow: hidden;
	}
	.soContent,.soContent>ul,.soContent>ul>li{
		width: 100%;
	}
	.soContent>ul>li{
		margin-top: 10px;
		height: 100px;
	}
	.soContent>ul>li>img{
		width: 20%;
		float: left;
	}
	.soContent>ul>li>.topicRight{
		width: 75%;
		margin-left: 5%;
		float: right;
	}
</style>