<template>
	<section class="our-projects">
	  <div class="section-title">
		 <p class="text-in-block">
			<span class="bull"></span>OUR PROJECTS
		 </p>
	  </div>
 
	  <div class="project-block" v-for="(project, i) in projects" :key="i">
		 <div class="project-left">
			<h2 class="project-title">{{ project.title }}</h2>
		 </div>
 
		 <ul class="project-tags">
			<li v-for="(tag, j) in project.tags" :key="j">
			  <span class="bull"></span>{{ tag }}
			</li>
		 </ul>
 
		 <div class="project-image">
			<img :src="project.image" :alt="project.title" />
		 </div>
 
		 <button class="cta-button">
			FIND OUT MORE
			<div class="arrow-container">
			  <img src="/images/bg_photo/Arrow.png" alt="arrow" class="arrow arrow-default" />
			  <img src="/images/bg_photo/Arrow_black.png" alt="arrow" class="arrow arrow-hover" />
			</div>
		 </button>
	  </div>
	</section>
 </template>
 
 <script setup>
 const projects = [
	{
	  title: 'HUMAN TRANSFORMATION',
	  tags: ['UI/UX design', 'Web Development', 'Medical'],
	  image: '/images/bg_photo/project1.png',
	},
	{
	  title: 'ROTARY CLUB SOLIHULL',
	  tags: ['UI/UX design', 'Web Development', 'Social'],
	  image: '/images/bg_photo/project2.png',
	},
	{
	  title: 'HUBBER EXPO',
	  tags: ['UI/UX design', 'Web Development', 'Social'],
	  image: '/images/bg_photo/project3.png',
	},
 ];
 </script>
 
 <style scoped>
 .our-projects {
	background: black;
	color: white;
	padding: 60px 40px;
	width: 100%;
	max-width: 1340px;
	margin: 0 auto;
	box-sizing: border-box;
 }
 
 .section-title {
	display: flex;
	align-items: center;
	border-bottom: 3px solid white;
	margin-bottom: 60px;
 }
 
 .text-in-block {
	font-weight: 600;
	font-size: 24px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
 }
 
 .bull {
	width: 12px;
	height: 12px;
	background-color: white;
	border-radius: 50%;
	display: inline-block;
	margin-right: 10px;
 }
 
 .project-block {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	position: relative;
	margin-bottom: 100px;
 }
 
 .project-left {
	flex-shrink: 0;
 }
 
 .project-title {
	font-size: 48px;
	font-weight: 800;
	line-height: 3%;
	text-transform: uppercase;
	color: white;
	border-bottom: 3px solid white;
	border-top: 3px solid white;
	padding: 0;
	margin: 0;
	line-height: 1;
	transform: translateY(-270px);

 }
 
 .project-tags {
	list-style: none;
	margin: 0px;
	padding: 100px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: flex-start;
	justify-content: center;
	transform: translateY(-240px);
 }
 
 .project-tags li {
	display: flex;
	line-height: 3px;

	align-items: center;
	font-size: 24px;
	color: white;
	font-weight: 600;
 }
 
 .project-tags .bull {
	width: 16px;
	height: 16px;
	background-color: white;
	border-radius: 50%;
	display: inline-block;
	margin-right: 10px;
 }
 
 .project-image {
	width: 437px;
	height: 590px;
	flex-shrink: 0;
	margin-left: auto;

 }
 
 .project-image img {
	width: 100%;
	height: 100%;
	
	display: block;
 }
 
 .cta-button {
	position: absolute;
	bottom: 0;
	left: 0;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 24px;
	color: white;
	border: 2px solid white;
	background: black;
	padding: 8px 16px;
	cursor: pointer;
	transition: all 0.3s ease;
 }
 
 .arrow-container {
	position: relative;
	width: 14px;
	height: 14px;
 }
 
 .arrow {
	position: absolute;
	top: 0;
	left: 0;
	width: 14px;
	height: 14px;
	object-fit: contain;
	transition: opacity 0.3s ease;
 }
 
 .arrow-hover {
	opacity: 0;
 }
 
 .cta-button:hover .arrow-hover {
	opacity: 1;
 }
 
 .cta-button:hover .arrow-default {
	opacity: 0;
 }
 </style>
 