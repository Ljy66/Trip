<template>
	<main>
		<div class="coTop">
			<div class="coTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			    酷爽一夏
			</div>
		</div>
		<div class="coList">
			<ul>
				<li v-for="v in cool">
					<img v-lazy="v.src"/>
					<h4>{{v.name|sub}}</h4>
					<p>{{v.price|add}}</p>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
	    data(){
	    	return{
	    		cool:''
	    	}
	    },
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mounted(){
			
			this.$http.get('data/data.json').then(function(res){
				console.log(res);
				this.cool=res.body.recommand;
			},function(res){
				console.log()
			})
		},
		filters:{
					add(n){
						return '￥'+n;
					},
					sub(n){
						return n.substr(0,5)
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
	.coTop{
		width: 100%;
	}
	.coTop .coTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.coTop .coTopBar>i{
		float: left;
		line-height: 56px;
	}
	.coList{
		width: 100%;
		padding:10px;
		box-sizing: border-box;
	}
	.coList>ul{
		width: 100%;
		overflow: hidden;
	}
	.coList>ul>li{
		box-sizing: border-box;
		margin:2%;
		float: left;
		width: 45%;
		padding:0 10px;
		text-align: center;
	}
	.coList>ul>li>img{
		width: 100%;
		height: 20%;
		border-radius:15px;
	}
	.coList>ul>li>p{
		text-align: right;
		font-size: 14px;
		color:gold;
		margin-top: 5px;
	}
</style>