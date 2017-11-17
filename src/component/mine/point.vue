<template>
	<main>
		<div class="pTop">
			<div class="pTopBar">
			    <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
			         意见反馈
			</div>
		</div>
			<div class="pContent">
				<ul>
					<li>
						<i class="fa fa-envelope-o" aria-hidden="true"></i>
						<input type="text" placeholder="意见标题"/>
					</li>
					<li>
						<textarea rows="10" placeholder="您的意见是我们前进的动力"></textarea>
					</li>
					<li>
						<i class="fa fa-phone" aria-hidden="true"></i>
						<input type="text" placeholder="联系电话" v-model="msg"/>
						<h4 v-if="show">手机号码输入有误！</h4>
					</li>
					<li>
						<button @click="say">
							提交
						</button>
					</li>
				</ul>
				
				
			</div>
	</main>
</template>
<script>
	export default{
		data(){
			return {
				msg:'',
				show:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			say(){
					alert('感谢您的宝贵意见，我们将认真听取并改正，稍后将自动返回个人中心！');
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
		box-sizing: border-box;
		min-height: 900px;
		background: #e7f6ea;
	}
	/*头部*/
	.pTop{
		width: 100%;
	}
	.pTop .pTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding: 0 8px;
		width: 100%;
		color: #fff;
		text-align: center;
	}
	.pTop .pTopBar>i{
		float: left;
		line-height: 56px;
	}
	/*内容*/
	.pContent,.pContent>ul{
		width: 100%;
		margin-top: 20px;
		line-height: 3.4rem;
		text-align: center;
	}
	.pContent>ul>li{
		width: 90%;
		padding: 0 5%;
		font-size: 17px;
		/*vertical-align: middle;*/
	}
	/*.pContent>ul>li:nth-of-type(1){
		height: 60px;
		line-height: 60px;
	}*/
	.pContent>ul>li>i{
		font-size: 40px;
		vertical-align: middle;
	}
	.pContent>ul>li>button{
		width: 80%;
		height: 50px;
		font-size: 20px;
		border-radius: 30px;
		background:#46bbbc ;
		color: #fff;
		outline:none;
		box-shadow: 0 0 0 #fff;
	}
	.pContent>ul>li>h4{
		color: red;
	}
	.pContent input{
		width: 80%;
		outline: none;
		padding:5px;
		border-radius: 15px;
		border:1px solid #999;
		
	}
	.pContent textarea{
		outline: none;
		padding: 8px;
		border-radius: 15px;
		border:1px solid #999;
		width: 90%;
	}
</style>