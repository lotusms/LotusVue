<template>
	<div class="bg-grey-2 shadow-2">
		<q-banner class="bg-primary-alt">
			<h5 class="green-text text-center q-mb-none">Design Specs</h5>
		</q-banner>
		<q-list>
			<q-item v-for="(spec, index) in specs" :key="index">
				<q-item-section>
					<q-item-label>
						<h5 class="green-text">{{spec.title}}</h5>
					</q-item-label>
					<q-item-label>{{spec.text}}</q-item-label>
				</q-item-section>
			</q-item>
			<q-item>
				<q-item-section>
					<q-item-label>
						<h5 class="green-text">...and more!</h5>
					</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
		<div class="text-center q-pb-lg">
			<q-btn color="primary-alt" label="(717) 945-8132" type="a" href="tel:+7179458132" />
		</div>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	data() {
		return {
			specs: [
				{
					title: "Navigation",
					text:
						"Centralizing the navigation allows the user to have only one place where any page can ultimately be found."
				},
				{
					title: "Controls",
					text:
						"Standardizing the form controls including buttons, tabs, and internal links so that the elements flow in natural order as well as avoiding any accidental destructive action."
				},
				{
					title: "Accents",
					text:
						"Enhance visibility to items that require the most attention and promotion."
				},
				{
					title: "Accessibility",
					text:
						"Address all color combinations as well as font and icon sizes to ensure users with sight problems or mouse accuracy can still use the content without struggle."
				},
				{
					title: "Images",
					text:
						"Minimize the use of images which leads to slow-loading and high data consumption for mobile users."
				}
			]
		};
	}
};
</script>

<style>
</style>