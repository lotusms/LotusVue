<template>
	<q-banner style="background-color: #cccccc" class="q-pa-lg">
		<div class="full-width row no-wrap justify-evenly items-center content-between">
			<div class="col-xs-2 max-width" v-for="(certification, index) in certifications" :key="index">
				<q-img
					:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/${certification.image}`"
					:ratio="1"
				/>
			</div>
		</div>
	</q-banner>
</template>

<script>
export default {
	name: "Certifications",
	data() {
		return {
			certifications: [
				{
					id: "1",
					image: "sba.jpg"
				},
				{
					id: "2",
					image: "adobe.jpg"
				},
				{
					id: "3",
					image: "vosb.jpg"
				},
				{
					id: "4",
					image: "microsoft.jpg"
				},
				{
					id: "5",
					image: "w3.jpg"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.max-width {
	max-width: 86px;
}
</style>