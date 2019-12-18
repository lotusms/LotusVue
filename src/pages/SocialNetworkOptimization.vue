<template>
	<q-page>
		<div class="bg-how-it-works q-pa-xl">
			<h1 class="heading white-text text-center justify-center">{{pagetitle}}</h1>
		</div>
		<div class="q-pa-md full-width full-height column">Social Network Optimization</div>
		<reach-out />
	</q-page>
</template>

<script>
import ReachOut from "../components/ReachOut";

export default {
	name: "SocialNetworkOptimizationPage",
	components: { ReachOut },
	data() {
		return {
			pagetitle: "Stay Connected"
		};
	}
};
</script>

<style lang="scss" scoped>
.bg-how-it-works {
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.77)),
		url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/social-network.jpg")
			center center no-repeat;
	.banner-text {
		max-width: 1050px;
		margin: 0 auto;
	}
}
</style>