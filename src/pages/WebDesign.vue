<template>
	<q-page>
		<div class="bg-how-it-works q-pa-xl">
			<h1 class="heading white-text text-center justify-center">{{pagetitle}}</h1>
			<h2 class="banner-text white-text text-center justify-center">{{bannertext}}</h2>
		</div>
		<div class="q-pa-md">
			<div class="row wrap justify-center items-start content-start">
				<div class square v-for="(service, index) in services" :key="index">
					<q-card class="my-card dark q-ma-lg" style>
						<div class="ms-thumbnail ms-thumbnail-diagonal">
							<img
								:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/web-design/${service.image}`"
								:alt="service.title"
							/>
							<figcaption class="ms-thumbnail-caption text-center">
								<div class="ms-thumbnail-caption-content">
									<h5 class="green-text ms-thumbnail-caption-title">{{service.title}}</h5>
								</div>
							</figcaption>
						</div>
						<div>
							<q-card-section class="bg-dark white-text">
								<h5 class="green-text text-center">{{service.title}}</h5>
								<ul>
									<li v-for="property in service.properties" :key="property.id">{{ property }}</li>
								</ul>
							</q-card-section>
						</div>
					</q-card>
				</div>
			</div>
			<div>
				<p class="pre-formatted">{{text}}</p>
			</div>
		</div>
		<div class="bg-dark">
			<reach-out />
		</div>
	</q-page>
</template>

<script>
import ReachOut from "../components/ReachOut";

export default {
	name: "WebDesignPage",
	components: { ReachOut },
	data() {
		return {
			pagetitle: "Custom Web Design",
			bannertext:
				"Avoid falling into cookie-cutter designs. Express your company vibe through your own design and bring emphasis to where it matters most.",
			text:
				"In the technological world we live in today, a website is more than a domain and information about your services, organization, and products. A modern, powerful, and professional web design allows business owners and organization stakeholders to interact with their clients and provide them with the ability to perform functions that they would have to come in the office for otherwise. \n\n Every organization has specific needs and relationships with their clients. Some businesses rely on less demanding web design solutions, such as startup businesses. Others rely on a website to perform most, if not all, of the functions of the business, as it is the case for e-commerce websites. And for many other organizations, a website is a marketing tool to generate traffic and a stronger presence in their market. Whatever your organization business’ rules are, a website can serve as a powerful tool, and it must be customized accordingly to ensure it satisfies those requirements. This is the main reason why do-it-yourself web design engines are a flawed solution. \n\n All web designs vary in size, look & feel, complexity, and business rules according to the client's needs and requirements. Frequently, a web design is better complimented with an enhancement to the client's brand. And in some occasions, domain, hosting, and security must be acquired. Let us know what your assets at your consultation are.",
			services: [
				{
					title: "Startup Web Design",
					image: "startup.jpg",
					properties: [
						"Budget-friendly",
						"Ideal for displaying business information",
						"Does not require frequent content management",
						"Provides business with a professional image"
					]
				},
				{
					title: "Marketing Web Design",
					image: "smalll-business.jpg",
					properties: [
						"Affordable for small businesses",
						"Built to create traffic and enhance conversion",
						"Content can be managed",
						"Added functionality for the user's benefit"
					]
				},
				{
					title: "Specialty Web Design",
					image: "online-store.jpg",
					properties: [
						"Financial plans available",
						"Ideal for online stores, social networks, etc",
						"Multi-site architecture to allow multiple logins",
						"Large database ideal for inventories or users"
					]
				},
				{
					title: "Enterprise Web Design",
					image: "enterprise.jpg",
					properties: [
						"Long-term financial plans available",
						"Ideal for internal use and office use",
						"Popular among government agencies",
						"Custom logic built to satisfy business rules"
					]
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.bg-how-it-works {
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.77)),
		url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/web-design-banner.jpg")
			center center no-repeat;
	.banner-text {
		max-width: 1050px;
		margin: 0 auto;
	}
}
</style>