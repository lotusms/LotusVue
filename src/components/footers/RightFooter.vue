<template>
	<div>
		<h5 class="green-text text-center">{{heading}}</h5>
		<q-list dark separator>
			<q-item v-for="(contact, index) in contacts" :key="index">
				<q-item-section avatar>
					<a :href="contact.to" target="_blank">
						<q-avatar color="primary-alt" text-color="white" size="md" :icon="contact.icon" />
					</a>
				</q-item-section>

				<q-item-section>
					<q-item-label>{{contact.text}}</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<script>
export default {
	name: "RightFooter",
	data() {
		return {
			heading: "Contact Us!",
			contacts: [
				{
					text: "(717) 945-8132",
					icon: "phone",
					to: "tel:+7179458132"
				},
				{
					text: "lotusms@outlook.com",
					icon: "mail",
					to: "mailto:m%61il%74%6F%3Alotu%73ms%40ou%74%6C%6F%6Fk.%63om"
				},
				{
					text: "Like Us!",
					icon: "fab fa-facebook-f",
					to: "https://www.facebook.com/LOTUSMarketingSolutionsLLC/"
				},
				{
					text: "Follow us on Twitter!",
					icon: "fab fa-twitter",
					to: "https://twitter.com/LotusMarketingS"
				},
				{
					text: "Follow us on LinkedIn!",
					icon: "fab fa-linkedin-in",
					to:
						"https://www.linkedin.com/in/lotus-marketing-solutions-llc-32185462/"
				},
				{
					text: "Follow us on Google!",
					icon: "fab fa-google-plus-g",
					to: "https://plus.google.com/u/0/+LuisSilvaLOTUSMarketingSolutions"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.footer-col {
	.green-text {
		padding-bottom: 5px;
		border-bottom: 2px solid #7cb342;
	}
}
</style>