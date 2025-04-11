<template>
	<section class="core-services">
		<div class="section-title">
			<p class="text-in-block">
				<span class="bull"></span>CORE SERVICES
			</p>
		</div>

		<div class="container">
			<div class="left">
				<img src="/public/images/bg_photo/hassan.png" alt="Solutions" />
			</div>
			<div class="right">
				<div class="scrollable">
					<div class="scroll-inner">
						<div class="right-block" v-for="(item, i) in services" :key="i">
							<div class="title-block">
								<h2 class="title" v-html="item.title"></h2>
							</div>
							<div class="content-block">
								<p class="description">{{ item.description }}</p>
								<button class="cta-button">
									LEARN MORE
									<div class="arrow-container">
										<img src="/images/bg_photo/Arrow_black.png" alt="arrow" class="arrow arrow-default" />
										<img src="/images/bg_photo/Arrow.png" alt="arrow" class="arrow arrow-hover" />
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section-title">
			<p class="text-in-block">
				<span class="bull"></span>get a free digital consUltation
			</p>
		</div>
		<div class="consultation-block">

			<div class="consultation-content">
				<p class="cta-text">
					WE WILL CONDUCT AN SEO AUDIT, A SUPERFICIAL UX ANALYSIS AND SUGGEST THAT YOU CAN CHANGE IT
					SO THAT THE SITE WORKS BETTER. LET'S HEAR THE RESULTS THROUGH 5 DAYS TO YOUR MAIL
				</p>
				<button class="cta-button">
					GET NOW
					<div class="arrow-container">
						<img src="/images/bg_photo/Arrow_black.png" alt="arrow" class="arrow arrow-default" />
						<img src="/images/bg_photo/Arrow.png" alt="arrow" class="arrow arrow-hover" />
					</div>
				</button>
			</div>
		</div>
	</section>
	<section class="sup-services">
		<div class="section-title">
			<p class="text-in-block">
				<span class="bull"></span>We create trustful digital products
			</p>
		</div>
		<div class="consultation-content_sup">
			<p class="cta-text_sup">
				We create full of confidence
				products due to the following
				pillars
			</p>
		</div>



		<div class="sup_services_text">
			<h2>Business-Centric Solutions</h2>
			<p>
				We prioritise your business objectives, crafting digital products that address your specific challenges and
				deliver tangible results
			</p>
		</div>
		<div class="sup_services_text">
			<h2>Distinctive Design</h2>
			<p>
				Our products are crafted with a unique style that embodies the essence and advantages of your business,
				leaving a lasting impression
			</p>
		</div>
		<div class="sup_services_text">
			<h2>User-Centred Experience</h2>
			<p>
				With a focus on user comfort and seamless interaction, we create intuitive and engaging experiences that
				keep your audience coming back for more
			</p>
		</div>
		<div class="sup_services_text">
			<h2>Global Excellence</h2>
			<p>
				By leveraging international best practices, research, and
				cutting-edge technology, our products stay ahead of the curve, ensuring your success on a global scale
			</p>
		</div>
		<button class="cta-button">
			find out more
			<div class="arrow-container">
				<img src="/public/images/bg_photo/Arrow.png" alt="arrow" class="arrow arrow-default" />
				<img src="/images/bg_photo/Arrow_black.png" alt="arrow" class="arrow arrow-hover" />
			</div>
		</button>







	</section>
</template>

<script setup>
const services = [
	{
		title: '{1} IT strategy',
		description: 'Harness the power of a strong IT strategy to thrive in a highly competitive landscape, and let us be your trusted partner in achieving success.',
	},
	{
		title: '{2} Digital strategy',
		description: 'Stay ahead in the online market and gain a deep understanding of your customers with a practical and results-driven digital strategy',
	},
	{
		title: '{3} UX strategy',
		description: 'UX strategy to help you get to know your product users and make it easy and friendly to navigate on your website',
	},
	{
		title: '{4} Software testing (QA)',
		description: 'Empower your digital presence with our comprehensive web development services, encompassing design, programming, and ongoing support',
	},
	{
		title: '{5} Software testing (QA)',
		description: 'Ensure the quality and performance of your product with our rigorous software testing services, enabling a successful market entry',
	},
	{
		title: '{6} Business Analytics (BI)',
		description: 'Unlock valuable insights and drive data-informed decisions with our expert business analytics services, propelling your business to new heights',
	},
];
</script>

<style scoped>
.core-services {
	background: white;
	color: black;
	width: 1440px;
	padding: 40px 50px;
	box-sizing: border-box;
	margin: 0 auto;
}

.sup-services {
	background: black;
	color: white;
	width: 1438px;
	padding: 40px 50px;
	box-sizing: border-box;
	margin: 0 auto;
}

.sup-services .bull {
	display: inline-block;
	width: 18px;
	height: 18px;
	background-color: white;
	border-radius: 50%;
	margin-right: 10px;
	transform: translateY(-6px);
}

.sup-services .section-title {
	display: flex;
	align-items: center;
	border-bottom: 3px solid white;
	margin-bottom: 30px;
}

.section-title {
	display: flex;
	align-items: center;
	border-bottom: 3px solid black;
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
	background-color: black;
	border-radius: 50%;
	margin-right: 10px;
	transform: translateY(-6px);
}

.container {
	display: flex;
	gap: 136px;
	margin-bottom: 80px;
}

.left {
	width: 331px;
	height: 400px;
}

.left img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border: 3px solid black;
	border-radius: 8px;
}

.right {
	width: 840px;
	margin-top: 0;
}

.scrollable {
	max-height: 841px;
	overflow-y: scroll;
	padding-right: 10px;
	scrollbar-width: none;
	-ms-overflow-style: none;
	position: relative;
}

.scrollable::-webkit-scrollbar {
	display: none;
}

.scroll-inner {
	padding-top: 400px;
}

.right-block {
	display: flex;
	gap: 40px;
	padding: 30px 0;
	border-top: 3px solid black;
}

.title-block {
	min-width: 343px;
	max-width: 343px;
	flex-shrink: 0;
}

.title {
	font-size: 48px;
	font-weight: 700;
	font-family: 'Alumni Sans', sans-serif;
	line-height: 120%;
	margin: 0;
	white-space: nowrap;
}

.content-block {
	margin-left: 50px;
}

.description {
	font-size: 20px;
	font-weight: 400;
	color: #444;
	line-height: 1.5;
	margin: 0 0 20px 0;
	max-width: 640px;
}

.cta-button {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 20px;
	font-weight: 400;
	color: black;
	border: 2px solid black;
	background: white;
	padding: 10px 20px;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
}

.cta-button:hover {
	background: black;
	color: white;
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

.consultation-block {
	width: 100%;
	background: white;
	padding: 60px 50px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.consultation-title {
	width: 100%;
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 24px;
	text-transform: uppercase;
	color: black;
	align-self: flex-start;
	margin-bottom: 10px;
	border-bottom: 3px solid black;

}

.consultation-title .bull {
	display: inline-block;
	width: 18px;
	height: 18px;
	background-color: black;
	border-radius: 50%;
	margin-right: 10px;
}

.consultation-content {
	max-width: 837px;
	text-align: left;
	margin-left: 500px;
	width: 837px;
	height: 180px;
}

.consultation-content_sup {
	max-width: 591px;
	text-align: left;
	margin-left: 0px;
}

.cta-text {
	font-weight: 800;
	font-size: 48px;
	line-height: 93%;
	text-transform: uppercase;
	color: black;
	margin-bottom: -70px;
	transform: translateY(-100px);
}

.sup-services .cta-button {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 20px;
	font-weight: 300;
	color: white;
	border: 1px solid white;
	background: black;
	padding: 10px 20px 10px 20px;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	margin-left: 69.7%;
}
.sup-services .cta-button:hover {
	background: white;
	color: black;
}

.cta-text_sup {
	font-weight: 800;
	font-size: 48px;
	line-height: 93%;
	text-transform: uppercase;
	color: white;
	margin-bottom: 50px;

	padding: 0px 0px 100px 0px;
}


.sup_services_text {
	display: flex;
	align-items: center;
	gap: 40px;
	width: 100%;
	padding: 30px 0;
	margin-bottom: 30px;
	border-top: 3px solid white;
	border-bottom: 3px solid white;
	box-sizing: border-box;
}

.sup_services_text h2 {
	font-size: 48px;
	font-weight: 800;
	color: white;
	margin: 0px;
	flex-shrink: 0;
	max-width: 415;
	line-height: 1.1;
	width: 415px;
	transform: translateY(-20px);

}

.sup_services_text p {
	font-weight: 400;
	font-size: 20px;
	line-height: 1.5;
	color: #ffffff;
	padding-left: 35.5%;
	margin: 0;
}

@media (max-width: 768px) {
	.container {
		flex-direction: column;
		gap: 40px;
	}

	.left,
	.right,
	.consultation-block {
		width: 100%;
	}

	.right-block {
		flex-direction: column;
		gap: 20px;
	}

	.scrollable {
		max-height: none;
		overflow-y: visible;
	}

	.consultation-content {
		padding: 0 20px;
	}

	.cta-button {
		width: 100%;
		justify-content: center;
	}

	.cta-text {
		font-size: 28px;
	}
}
</style>