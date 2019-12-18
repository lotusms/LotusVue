<template>
	<div class="bg-parallax uk-light">
		<div class="items-center justify-center text-center q-pa-xl">
			<h1 class="white-text heading text-center q-my-lg">{{heading}}</h1>
			<div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@l services" uk-grid>
				<div v-for="(card, key) in cards" :key="key">
					<q-card class="solutions-card">
						<q-card-section class="text-center">
							<q-avatar size="190px" class="avatar">
								<q-img
									:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/${card.image}`"
									:class="`card-image image-${card.id}`"
									round
								/>
							</q-avatar>
						</q-card-section>

						<q-card-section>
							<h5 class="green-text">{{card.title}}</h5>
							<div class="white-text paragraph">{{card.text}}</div>
						</q-card-section>

						<q-card-section>
							<q-btn color="primary-alt" label="Learn More" :to="card.to" />
						</q-card-section>
					</q-card>
				</div>
			</div>
			<div class="text-center services-estimate">
				<h2 class="text-h1 heading white-text">{{secondheading}}</h2>
				<p class="white-text paragraph text">{{text}}</p>
				<q-btn color="primary-alt" :label="button" :to="to" class="q-my-lg" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Services",
	data() {
		return {
			cards: [
				{
					id: "1",
					image: "web-design.png",
					title: "Professional Web Design",
					text:
						"Web design with your clients in mind. We focus, primarily, on enhancing user experience and engagement so that your visitors can get a perfect idea of what you have to offer.",
					to: "/web-design"
				},
				{
					id: "2",
					image: "web-development.png",
					title: "Web Development",
					text:
						"Reliable web development is crucial to building a strong and secured environment for websites and web solutions. From mobile compatibility to web accessibility.",
					to: "/user-experience-optimization"
				},
				{
					id: "3",
					image: "brand-design.png",
					title: "Brand Design",
					text:
						"Branding identity and a strong logo are essential to a successful marketing strategy. It has a great impact on first impressions and will set you apart.",
					to: "/graphic-design"
				},
				{
					id: "4",
					image: "web-maintenance.png",
					title: "Web Maintenance",
					text:
						"Technology advances and enhances every day. A smooth running website often needs to cross all the Ts and dots all the Is to maintain browser compatibility and support.",
					to: "/web-maintenance"
				}
			],
			heading: "Web Design & User Experience Experts",
			secondheading: "Need an estimate or quote request?",
			text:
				"All projects vary in size, time, and complexity. By requesting an estimate, we will be able to gauge your needs more accurately. Use our contact form on our contact page and be as thorough as possible.",
			button: "Request a quote",
			to: "/contact"
		};
	}
};
</script>

<style lang="scss" scoped>
.bg-parallax {
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.77)),
		url("https://raw.githubusercontent.com/lotusms/LotusMS/master/Computer-bg.jpg")
			center center no-repeat fixed;
}
.services {
	.avatar {
		background-color: #4f5b62;
		border: 3px solid #7cb342;
		.card-image {
			width: 95px;
			&.image-3 {
				width: 70px;
			}
		}
	}
}
.solutions-card {
	background-color: rgba(193, 189, 189, 0.26);
	.green-text {
		color: #7cb342;
		padding-bottom: 5px;
		border-bottom: 2px solid #7cb342;
	}
	.white-text {
		line-height: 1.4;
	}
}
.services-estimate {
	padding-top: 40px;
	.text {
		max-width: 1050px;
		margin: 0 auto;
	}
}
</style>