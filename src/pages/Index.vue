<template>
	<q-page>
		<main-slide />
		<certification />
		<main-content />
		<services />
		<responsive-web-design />
		<website-types />
		<testimonials />
		<latest-work />
	</q-page>
</template>

<script>
import UIkit from "uikit";
import MainSlide from "../components/home/MainSlider";
import Certification from "../components/home/Certifications";
import MainContent from "../components/home/MainContent";
import Services from "../components/home/Services";
import ResponsiveWebDesign from "../components/home/ResponsiveWebDesign";
import WebsiteTypes from "../components/home/WebsiteTypes";
import Testimonials from "../components/home/Testimonials";
import LatestWork from "../components/home/LatestWork";

export default {
	name: "PageIndex",
	components: {
		MainSlide,
		Certification,
		MainContent,
		Services,
		ResponsiveWebDesign,
		WebsiteTypes,
		Testimonials,
		LatestWork
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
</style>