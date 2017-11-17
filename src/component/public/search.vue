<template>
	<main>
		<div class="sTop">
			<div class="sTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			    <input type="text" placeholder="输入城市名" v-model="msg" />  
			    <button @click="get">搜索</button>
			</div>
		</div>
		<div class="sContent">
			<div class="hot">
				<div class="search">
					<h4>热门搜索</h4><span @click="display"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
				</div>
				<transition name="fade">
					<ul v-show="show">
					<li v-for="(v,i) in arr" @click.prevent="set(i)">
						{{v}}
					</li>
				    </ul>
				</transition>
			</div>
		    
		    <div class="list">
		    	<ul>
		    		<li v-for="v in change.list">
		    			<div class="img">
		    				<img v-lazy="v.pic_url" alt="" />
		    			</div>
		    			<div class="info">
		    				<h4>{{v.pl_name}}</h4>
		    				<p v-for="a in v.trips">
		    					<span>{{a[0]}}</span>
		    				</p>
		    			</div>
		    		</li>
		    	</ul>
		    </div>
		    <div class="error" v-show="erro">
		    	<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3325794928,3257788238&fm=27&gp=0.jpg" alt="" />
		    </div>
		
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				data:'',
				arr:['云南','西藏','西湖','鼓浪屿','峨眉山'],
				change:'',
				show:false,
				erro:false,
				detail:true
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			set(n){
				this.msg=this.arr[n];
			},
			get(){
				/*console.log(this.data);*/
				this.change='';
				for(var i=0;i<this.data.length;i++){
					if(this.msg==this.data[i].key){
						/*console.log(this.data[i]);*/
						this.change=this.data[i];
						this.erro=false;
						this.msg='';
						break;
					}
					else{
						this.erro=true;
					}
				}
			},
			display(){
				this.show=!this.show;
			}
		},
		mounted(){
			this.$http.get('data/search.json').then(function(res){
				/*console.log(res);
				console.log(res.body.list);*/
				this.data=res.body.list;
			},function(){
				console.log(error);
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
		font-family: "微软雅黑";
	}
	/*头部*/
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
		font-size: 35px;
	}
	.sTop .sTopBar>input{
		outline: none;
		width: 60%;
		padding: 5px;
		border-color:transparent ;
		border-radius: 30px;
	}
	.sTop .sTopBar>button{
		outline: none;
		font-size: 17px;
		color: #fff;
		background: transparent;
		border:none;
	}
	/*内容*/
	.sContent{
		background: #e7f6ea;
		width: 100%;
		min-height: 900px;
	}
	/*热门搜索*/
	.hot,.hot ul{
		width: 100%;
	}
	.hot{
		line-height: 2.4rem;
	}
	.hot>.search{
		width: 100%;
		box-shadow: 0 2px 2px #999;
	}
	.hot>.search>span{
		text-align: right;
		margin-left: 75%;
	}
	.hot h4{
		text-align:left;
		float: left;
		padding-left: 2%;
	}
	.hot ul{
		padding: 0 5%;
		transition: all 1s;
	}
	.hot ul>li{
		text-align: center;
		width: 50%;
		border: 1px solid #dedede;
		margin:10px 0;
		border-radius: 30px;
	}
	.fade-enter-active{
	    animation: show 1s linear infinite;
					}
	@keyframes show{
		from{
			opacity: 0;
			}
		to{
			opacity: 1;
		  }
			}
	/*搜索结果*/
	.list{
		margin-top: 10px;
	}
	.list,.list>ul,.list>ul>li{
		width: 100%;
	}
	.list>ul{
		box-sizing: border-box;
		overflow: hidden;
	}
	.list>ul>li{
		padding: 0 15%;
		margin-top: 10px;
	}
	.list>ul>li>.img{
		width: 70%;
	}
	.list>ul>li>.img>img{
		width: 100%;
		padding-bottom: 2%;
	}
	.list>ul>li h4{
		width: 70%;
		text-align:right;
		color: orange;
	}
	.list>ul>li p{
		width: 70%;
	}
	.info>p>span{
		float: left;
		margin-left: 2%;
	}
	.error{
		width: 100%;
		transition: all 1s;
	}
	.error>img{
		width: 100%;
	}
</style>
<!--蜜蜂网搜索接口：http://www.mafengwo.cn/search/s.php?q=%E4%BA%91%E5%8D%97&seid=4C7252FF-1FA4-4621-BF85-A1FA25DDB4F0-->