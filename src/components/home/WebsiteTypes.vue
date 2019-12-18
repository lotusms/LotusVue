<template>
	<div class="uk-light uk-padding uk-panel" style="background-color:#081400">
		<q-tabs v-model="tab" align="justify" class="bg-transparent green-text" :breakpoint="0">
			<q-tab
				v-for="(tab, index) in tabs"
				:key="index"
				:name="tab.name"
				no-caps
				:label="tab.tab"
				class="tab"
				style="font-size: 23px;"
			/>
		</q-tabs>

		<q-tab-panels v-model="tab" class="tab-panels q-py-lg" animated dark>
			<q-tab-panel :name="content.name" v-for="(content, index) in tabcontent" :key="index">
				<div class="uk-child-width-1-1@s uk-child-width-1-2@m" uk-grid>
					<div class="q-pa-xl">
						<h5 class="green-text tab-h5">Save on the details while capturing the big picture</h5>
						<p>{{content.text}}</p>
						<q-btn color="primary-alt" label="More info" icon="info" to="/web-design" class="q-my-lg" />
					</div>
					<div class="text-center q-py-lg">
						<img
							:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/${content.image}`"
							:alt="content.heading"
						/>
					</div>
				</div>
			</q-tab-panel>
		</q-tab-panels>
	</div>
</template>

<script>
export default {
	name: "WebsiteTypes",
	data() {
		return {
			tab: "economy",
			tabs: [
				{
					tab: "Economy",
					name: "economy"
				},
				{
					tab: "Informational",
					name: "informational"
				},
				{
					tab: "Marketing",
					name: "marketing"
				},
				{
					tab: "e-Commerce",
					name: "ecommerce"
				}
			],
			tabcontent: [
				{
					name: "economy",
					heading: "Save on the details while capturing the big picture",
					text:
						"Although a website is a great business tool, it may be costly for those who do not have a marketing budget or are in the beginning stages of building a business. \n\n We can offer economical solutions that provide you with a great website while sacrificing some minor details in the design. These can be added at a later time.",
					to: "/web-design",
					image: "economymd.jpg"
				},
				{
					name: "informational",
					heading: "Conduce your business ideas to your market",
					text:
						"Consider that most consumers search online first and want to know about your products and services before they visit your store or shop. \n\n With an informational website, you can provide brief information about your brand, products, and services so that clients can visit you with a plan in mind.",
					image: "informationalmd.jpg"
				},
				{
					name: "marketing",
					heading: "Promote and optimize your products & services",
					text:
						"Packed with on-page SEO and user experience conceptualization, a marketing website aims to attract consumers and improve your search engine visibility. \n\n Our digital marketing strategists work closely with our designers to create more visibility to products, services, or campaigns that you wish to promote. This is our most popular package!",
					image: "marketingmd.jpg"
				},
				{
					name: "ecommerce",
					heading: "Sell in the largest mall in the world!",
					text:
						"Online shopping has increased exponentially over the past few years and we do not see a decline in sight any time in the future. \n\n By offering your products online, you can get the upperhand on your competition and expand your sales to a new market that does not use your services otherwise due to location or preference.",
					image: "ecommercemd.jpg"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.tab {
	font-size: 23px !important;
	line-height: 1.715em;
	font-weight: 500;
	font-family: "playball" !important;
	.q-tab__content {
		.q-tab__label {
			font-size: 23px !important;
		}
	}
}
.tab-panels {
	background: transparent;
	.tab-h5 {
		color: #7cb342;
		font-size: 2em;
	}
}
</style>