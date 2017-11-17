<template>
	<main>
		<div class="uTop">
			<ul class="uTopBar">
				<li>
					<i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i> 
				</li>
			    <li>
			    	 <span @click="remain">登录</span>
			    	 <span v-if="log"></span>
			    </li>
			   <li>
			   		<span @click="change">注册</span>
			   		<span v-if="reg"></span>
			   </li>
			</ul>
		</div>
		<div class="login"  v-if="log">
			<div class="name">
				<i class="fa fa-user-circle-o" aria-hidden="true"></i>
			    <input type="text" placeholder="请输入用户名" />
			</div>
			<div class="password">
				<i class="fa fa-unlock-alt" aria-hidden="true"></i>
			    <input type="text" placeholder="请输入密码" />
			</div>
			<button>登录</button>
		</div>
		<div class="register" v-if="reg">
			<div class="name">
				<i class="fa fa-user-circle-o" aria-hidden="true"></i>
			    <input type="text" placeholder="请输入用户名" />
			</div>
			<div class="password">
				<i class="fa fa-unlock-alt" aria-hidden="true"></i>
			    <input type="text" placeholder="请输入密码" />
			</div>
			<button>注册</button>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				log:true,
				reg:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			remain(){
				this.log=true;
				this.reg=false;
			},
			change(){
				this.log=false;
				this.reg=true;
			}
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
		z-index: 999;
		box-sizing: border-box;
	}
	/*头部*/
	.uTop{
		width: 100%;
	}
	.uTop .uTopBar{
		background:#46bbbc;
		height: 56px;
		line-height: 56px;
		padding-left:8px;
		width: 100%;
		color: #fff;
		box-sizing: border-box;
		overflow: hidden;
	}
	.uTop .uTopBar li{
		float: left;
		width: 30%;
		text-align: center;
		font-size: 18px;
		position: relative;
	}
	.uTop .uTopBar li>i{
	   margin-right: 50%;
	   font-size: 26px;
	}
	.uTop .uTopBar li>span:nth-of-type(2){
		width: 100%;
		height: 3px;
		background: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	/*内容区*/
	/*.login{
		display: none;
	}*/
	.login,.register{
		transition: all 1s;
		width: 100%;
		min-height: 900px;
		position: absolute;
		top: 56px;
		background: #d5eacb;
		padding-top: 20px;
		line-height: 5.4rem;
		padding-left: 5%;
	}
	.name,.password{
		font-size: 18px;
	}
	.name>i{
		font-size: 28px;
	}
	.password>i{
		font-size: 30px;
		margin-left: 2%;
	}
	input{
		border-radius: 25px;
		background: #e7f6ea;
		border-color: transparent;
		width: 70%;
		margin-left: 5%;
		padding: 10px;
	}
	button{
		width: 85%;
		padding:0 5%;
		height: 50px;
		font-size: 20px;
		border-radius: 30px;
		background:#46bbbc;
		border-color: transparent;
		color: #dedede;
		font-family: "微软雅黑";
		font-weight: bold;
	}
	
</style>