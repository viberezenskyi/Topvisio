<template>
	<section class="about">
	  <div class="section-title">
		 <p class="text-in-block">
			<span class="bull"></span>OUR VALUES
		 </p>
	  </div>
	  <div class="container">
		 <div class="left">
			<img src="/public/images/bg_photo/jakub.png" alt="Analytics on tablet" />
		 </div>
		 <div class="right">
			<div class="right-block">
			  <h2>&#123;1&#125;</h2>
			  <p>
				 Personalised analysis and strategic alignment drive our solutions,
				 ensuring optimal outcomes for your digital business.
			  </p>
			</div>
			<div class="right-block">
			  <h2>&#123;2&#125;</h2>
			  <p>
				 We prioritise the implementation of digital business strategies,
				 combining theory with practical execution for tangible results.
			  </p>
			</div>
			<div class="right-block">
			  <h2>&#123;3&#125;</h2>
			  <p>
				 Our team consists of experienced specialists with a track record of
				 successful collaborations across diverse projects.
			  </p>
			</div>
			<div class="right-block">
			  <h2>&#123;4&#125;</h2>
			  <p>
				 Our team consists of experienced specialists with a track record of
				 successful collaborations across diverse projects.
			  </p>
			</div>
			<div class="right-block right-block--large">
			  <h2>&#123;5&#125;</h2>
			  <p>
				 We will take you by the hand into the world of digital and modern
				 technologies. Experience the power of digital innovation and modern
				 technologies as we lead you towards a path of success in the digital
				 realm.
			  </p>
			</div>
		 </div>
	  </div>
	</section>
 </template>
 
 <style scoped>
 .about {
	background: black;
	color: white;
	width: 1437px;
	height: 1699px;
	position: relative;
	margin: -150px auto 0;
	padding-left: 50px;
	padding-right: 80px;
	box-sizing: border-box;
 }
 
 .section-title {
	display: flex;
	align-items: center;
	border-bottom: 3px solid white;
	margin-bottom: 30px;
 }
 
 .text-in-block {
	font-weight: 600;
	font-size: 24px;
	text-transform: uppercase;
	display: flex;
	align-items: flex-end;
 }
 
 .bull {
	display: inline-block;
	width: 18px;
	height: 18px;
	background-color: white;
	border-radius: 50%;
	margin-right: 10px;
	transform: translateY(-6px);
 }
 
 .container {
	display: flex;
	gap: 136px;
	margin: 0 auto;
 }
 
 .left {
	width: 331px;
	height: 400px;
 }
 
 .left img {
	width: 100%;
	height: 100%;
	object-fit: cover;
 }
 
 .right {
	display: flex;
	flex-direction: column;
	gap: 0;
	width: 840px;
	margin-top: 404px;
 }
 
 .right-block {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 40px;
	width: 840px;
	height: 168px;
	box-sizing: border-box;
	padding: 30px 0;
	margin-bottom: 30px;
	border-top: 3px solid white;
	border-bottom: 3px solid white;
 }
 
 .right-block--large {
	height: 204px;
 }
 
 .right-block h2 {
	font-size: 48px;
	font-weight: bold;
	width: 46px;
	height: 58px;
	margin: 0;
	text-align: left;
 }
 
 .right-block p {
	font-size: 24px;
	line-height: 130%;
	color: #ffffff;
	max-width: 398px;
	margin: 0;
	padding-left: 398px;
 }
 
 @media (max-width: 768px) {
	.about {
	  width: 100%;
	  height: auto;
	  margin-top: 50px;
	  padding-left: 0;
	  padding-right: 20px;
	}
 
	.container {
	  flex-direction: column;
	  gap: 40px;
	}
 
	.left,
	.right {
	  width: 100%;
	}
 
	.right-block {
	  flex-direction: column;
	  gap: 10px;
	  height: auto;
	  padding: 20px 0;
	}
 
	.right-block--large {
	  height: auto;
	}
 
	.right-block p {
	  max-width: 100%;
	}
 }
 </style>
 