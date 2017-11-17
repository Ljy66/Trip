<template>
	<main>
			<div class="mTop">
			<router-link to='/user'>
				<img src="../../assets/image/defaultUser.png" alt="" />
			    <p>登录 | 注册</p>
			</router-link>
		  </div>
		
		<div class="mContent">
			<ul>
				<li>
					<router-link to='/walk'>
						<i class="fa fa-book" aria-hidden="true"></i>
						<span>我的行程</span>
						<i class="fa fa-chevron-right" aria-hidden="true"></i>
					</router-link>
				</li>
				<li>
					<router-link to='/collect'>
						<i class="fa fa-tag" aria-hidden="true"></i>
						<span>我的收藏</span>
						<i class="fa fa-chevron-right" aria-hidden="true"></i>
					</router-link>
				</li>
				<li>
					<router-link to='/point'>
						<i class="fa fa-comments" aria-hidden="true"></i>
						<span>意见反馈</span>
						<i class="fa fa-chevron-right" aria-hidden="true"></i>
					</router-link>
				</li>
				<li>
					<router-link to='/ask'>
						<i class="fa fa-phone" aria-hidden="true"></i>
						<span>咨询客服</span>
						<i class="fa fa-chevron-right" aria-hidden="true"></i>
					</router-link>
				</li>
				<li>
					<router-link to='/set'>
						<i class="fa fa-cog" aria-hidden="true"></i>
						<span>设置</span>
						<i class="fa fa-chevron-right" aria-hidden="true"></i>
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
		components:{
			'v-footer':footer
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
		/*height: 100%;
		position:absolute;
		top: 0;
		left: 0;*/
	}
	a{
		text-decoration: none;
	}
	.mTop{
		width: 100%;
		height: 135px;
		background:#46bbbc;
		text-align: center;
		position:relative;
	}
	.mTop a{
		position: absolute;
		bottom: 25%;
		left:45%;
		color: #fff;
	}
	.mTop img{
		text-align: center;
		width: 60px;
		height: 60px;
		border-radius: 100px;
		border: 2px solid #fff;
	}
	.mContent{
		width: 100%;
		box-sizing: border-box;
		padding: 8px 0;
	}
	.mContent>ul,.mContent>ul>li{
		width: 100%;
	}
	.mContent>ul>li{
		padding-left: 72px;
		min-height: 48px;
		padding: 16px;
		box-sizing: border-box;
		box-shadow: 0 2px 1px #dedede;
		/*border-bottom: 1px solid rgba(0,0,0,0.4);*/
	}
	.mContent>ul>li>a>i{
		color:#46bbbc;
		font-size: 19px;
	}
	.mContent>ul>li>a>span{
		padding-left: 10%;
		color: #000;
	   font-size: 17px;
	   align-self: center;
	}
	.fa-chevron-right{
		float:right;
	}
</style>