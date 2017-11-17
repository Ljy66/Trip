<template>
	<main id="footer">
		<router-link to='/find'>
			<i class="fa fa-home" aria-hidden="true"></i>
			<p>首页</p>
		</router-link>
		<router-link to='/topic'>
			<i class="fa fa-commenting" aria-hidden="true"></i>
			<p>话题</p>
		</router-link>
		<router-link to='/dry_goods'>
			<i class="fa fa-heart" aria-hidden="true"></i>
			<p>干货</p>
		</router-link>
		<router-link to='/mine'>
			<i class="fa fa-user" aria-hidden="true"></i>
			<p>我的</p>
		</router-link>
	</main>
</template>

<script>
</script>

<style scoped>
	#footer{
		max-width: 1000px;
		position: fixed;
		bottom: 0;
		width: 100%;
		background:#46bbbc;
		line-height: 2.4rem;
		margin-top: 150px;
	}
	#footer>a{
		width: 25%;
		float: left;
		text-align: center;
		text-decoration: none;
		color: #fff;
		font-family: "微软雅黑";
		font-size: 18px;
		box-sizing: border-box;
	}
	#footer>a>i{
		font-size: 28px;
		padding-top: 5px;
	}
</style>