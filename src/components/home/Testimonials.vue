<template>
	<div class="uk-light uk-padding uk-panel bg-dark-blue testimonials">
		<div class="text-center">
			<h1 class="heading">{{heading}}</h1>
			<h4 class="green-text">{{subheading}}</h4>
		</div>
		<div
			class="uk-position-relative uk-visible-toggle uk-light slider"
			tabindex="-1"
			uk-slider="sets: true"
		>
			<ul
				class="testimonials-slider uk-slider-items uk-slider-items uk-child-width-1-1@s uk-child-width-1-3@m uk-grid-large"
			>
				<li v-for="(testimonial, index) in testimonials" :key="index">
					<div class="uk-panel">
						<q-card class="my-card dark-card testimonial">
							<q-card-section class="height0">
								<q-avatar size="7rem" class="avatar">
									<img
										:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/${testimonial.image}`"
										:alt="testimonial.name"
									/>
								</q-avatar>
							</q-card-section>
							<q-card-section class="lg-padding-left">
								<p class="text">{{testimonial.text}}</p>
								<p class="position q-mb-none green-text">{{testimonial.position}}/p></p>
								<p class="name q-my-none q-py-none">{{testimonial.name}}</p>
								<p class="signature q-my-none q-py-none">{{testimonial.name}}</p>
							</q-card-section>
						</q-card>
					</div>
				</li>
			</ul>
			<div class="uk-light arrows">
				<a class="arrow arrow-previous" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
				<ul class="uk-slider-nav uk-dotnav uk-flex-center dots"></ul>
				<a class="arrow arrow-next" href="#" uk-slidenav-next uk-slider-item="next"></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Testimonials",
	data() {
		return {
			testimonials: [
				{
					id: "1",
					image: "AbbyThumb-140.png",
					text:
						"LOTUS Marketing Solutions made a website for me and it looks amazing. If you need to get your website done this is where you need to go. THANK YOU AGAIN!",
					position: "Pro Athlete",
					name: "Abdiel Velazquez"
				},
				{
					id: "2",
					image: "AngelaThumb-140.png",
					text:
						"Just want to start out by saying. Thank you. The website is amazing. I will mention your name to anyone who can benefit from your services.",
					position: "The Gals Cleaning Service",
					name: "Angela Martin"
				},
				{
					id: "3",
					image: "Bob-GrimThumb-140.png",
					text:
						"LOTUS Marketing Solutions' type of work ethic and desire to please is rarely found in this day and age. Not only did a superb job constructing our website, but continues to give us excellent service.",
					position: "Feed Commodities, Inc.",
					name: "Bob Grim"
				},
				{
					id: "4",
					image: "DavidThumb-140.png",
					text:
						"LOTUS Marketing Solutions is extremely competitive in pricing but more importantly, is invested in my success. They have been a pleasure to work with and feel I am getting a product he would have built for himself.",
					position: "It Works, CEO.",
					name: "David Humpel"
				},
				{
					id: "5",
					image: "GeorgeMcGinnisThumb-140.png",
					text:
						"LOTUS Marketing Solutions has improved our business by improving our website design and managing the website. There is a direct correlation between the website and the higher volume of calls we receive. We are impressed by the short time in which we saw these",
					position: "York MMA",
					name: "George McGinnis"
				},
				{
					id: "6",
					image: "GeorgeThumb-140.png",
					text:
						"Hiring LOTUS Marketing Solutions LLC for my Web Page design and maintaining my web page is one of the best decisions I ever made during my 16 years of running my company. Whenever I have any issues they are always taken care of promptly and I do not have to wonder if the issue was going to be corrected!",
					position: "VisionSpecHome",
					name: "George Hart"
				},
				{
					id: "7",
					image: "JarredThumb-140.png",
					text:
						"LOTUS Marketing Solutions made my business more accessible to customers. They designed my website and opened my eyes to changes my business needed. Thanks for your insight and help!",
					position: "Center Mass Training",
					name: "Jarred Atkins"
				},
				{
					id: "8",
					image: "OswaldoThumb-140-1.png",
					text:
						"he website LOTUS built for my company far exceeded my expectations and does more than I ever got from Shopify. Thank you for all your hard work making it happen so quickly and all the support whenever something went wrong with my website.",
					position: "PDDresses",
					name: "Oswaldo Morraz"
				},
				{
					id: "9",
					image: "nickthumb-140.png",
					text:
						"LOTUS Marketing Solutions has gone above and beyond my expectations. They worked with me every step of the way and didn't hesitate to make changes to my website a month after it was completed when our schedule changed. They are very professional. This is a great company and I recommend them to everyone I know. Thanks again guys.",
					position: "Team Balance",
					name: "Nick Ortiz"
				}
			],
			heading: "We Love Our Clients And They Love Us!",
			subheading: "Let’s hear it from the horse’s mouth."
		};
	}
};
</script>

<style lang="scss" scoped>
.testimonials {
	.slider {
		.testimonials-slider {
			width: 94%;
			padding-top: 40px;
		}
		.arrows {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			.arrow {
				background: white;
				color: $accent;
				border-radius: 100%;
				width: 48px;
				height: 48px;
				text-align: center;
				padding: 11px;
				&.arrow-previous {
				}
				&.arrow-next {
				}
			}
		}
	}
	.testimonial {
		&.dark-card {
			background: #091300;
			border-radius: 0 35px 35px 35px;
			.height0 {
				height: 0px;
				.avatar {
					position: relative;
					top: -50px;
					left: -56px;
					img {
						border: 10px solid #273238;
					}
				}
			}
			.lg-padding-left {
				padding-left: 80px;
				.text {
					font-size: 18px;
					font-family: Barlow;
					font-weight: 600;
					line-height: 1.8;
					width: 99%;
				}
				.position,
				.name,
				.signature {
					text-align: right;
				}
				.position {
					font-size: 21px;
				}
				.name {
					font-size: 23px;
				}
				.signature {
					font-size: 39px;
					font-family: "signature";
				}
			}
		}
	}
}
</style>