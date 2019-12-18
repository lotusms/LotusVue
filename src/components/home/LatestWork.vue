<template>
	<div class="uk-light uk-padding uk-panel bg-dark clients">
		<div class="text-center">
			<h1 class="heading">{{heading}}</h1>
		</div>
		<div
			class="uk-position-relative uk-visible-toggle uk-light slider"
			tabindex="-1"
			uk-slider="sets: true"
		>
			<ul
				class="clients-slider uk-slider-items uk-slider-items uk-child-width-1-1@s uk-child-width-1-3@m uk-grid-large text-center"
			>
				<li v-for="(client, index) in clients" :key="index">
					<div class="uk-panel">
						<q-card class="my-card dark-card client">
							<a :href="client.url" target="_blank">
								<img
									:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/clients/${client.image}`"
									:alt="client.name"
								/>
							</a>
						</q-card>
					</div>
				</li>
			</ul>
			<div class="uk-light">
				<a class="uk-position-center-left" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
				<a class="uk-position-center-right" href="#" uk-slidenav-next uk-slider-item="next"></a>
			</div>
			<ul class="uk-slider-nav uk-dotnav uk-flex-center dots"></ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "LatestWork",
	data() {
		return {
			clients: [
				{
					image: "97milk.png",
					url: "http://www.97milk.com/"
				},
				{
					image: "birdsluvem.png",
					url: "https://birdsluvem.com/"
				},
				{
					image: "caffeinatedsloth.png",
					url: "https://www.caffeinatedsloth.com/"
				},
				{
					image: "captor2.png",
					url:
						"http://www.captor.lotuswebdesigns.com.s3-website.us-east-2.amazonaws.com/"
				},
				{
					image: "cmtl.png",
					url: "http://www.teamcentermass.com/"
				},
				{
					image: "cpbs2.png",
					url: "http://www.centralpennbuysell.com/"
				},
				{
					image: "feedcommodities.png",
					url: "http://www.feedcommodities.com/"
				},
				{
					image: "forourkids.png",
					url: "https://4ourkids.com/"
				},
				{
					image: "gals2.png",
					url: "http://www.thegalscleaningservice.com/"
				},
				{
					image: "jg2.png",
					url: "https://www.pacareerlink.pa.gov/jponline/"
				},
				{
					image: "paww2.png",
					url: "http://www.pawoundedwarriors.org/"
				},
				{
					image: "pelican2.png",
					url: "https://www.pelican.state.pa.us/provider/default.aspx#"
				},
				{
					image: "plcb2.png",
					url:
						"https://www.finewineandgoodspirits.com/webapp/wcs/stores/servlet/StoreCatalogDisplay?storeId=10051&catalogId=10051&langId=-1"
				},
				{
					image: "politicaygobiernos.png",
					url: "http://www.politicaygobiernos.com/"
				},
				{
					image: "randj2.png",
					url: "http://www.randjdairy.com/"
				},
				{
					image: "witmer2.png",
					url: "http://www.witmersfeed.com/"
				},
				{
					image: "wybpd.png",
					url: "https://www.wybpd.org/"
				},
				{
					image: "ymmaa2.png",
					url: "http://www.ymmaa.com/"
				}
			],
			heading: "Some Of Our Latest Works"
		};
	}
};
</script>

<style lang="scss" scoped>
.clients {
	.slider {
		.clients-slider {
			width: 94%;
			padding-top: 40px;
		}
	}
	.client {
		&.dark-card {
			background: transparent;
			box-shadow: none;
		}
	}
}
</style>