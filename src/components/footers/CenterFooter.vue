<template>
	<div>
		<h5 class="green-text text-center">{{heading}}</h5>
		<q-list dark separator>
			<q-item v-for="(link, index) in links" :key="index" :to="link.to" clickable v-ripple exact>
				<q-item-section avatar>
					<q-avatar>
						<img
							:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/${link.image}`"
							:alt="link.title"
							class="avatar"
						/>
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label lines="2">{{link.title}}</q-item-label>
				</q-item-section>
				<q-item-section side top class="date-section">
					<q-icon size="5" name="calendar_today" color="primary" class="icon" />
					<span>{{link.date}}</span>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<script>
export default {
	name: "CenterFooter",
	data() {
		return {
			heading: "Knowledge Center",
			links: [
				{
					title: "Is there an ROI in buying a website?",
					image: "roi.jpg",
					date: "23 Nov 2018",
					to: "/is-there-an-roi-in-buying-a-website"
				},
				{
					title: "How much is a website?",
					image: "WebsiteCostThumb.jpg",
					date: "25 Jul 2018",
					to: "/how-much-is-a-website?"
				},
				{
					title: "Choosing the right logo",
					image: "wikipediaLogoThumb.jpg",
					date: "01 Nov 2017",
					to: "/choosing-the-right-logo"
				},
				{
					title: "Content Validation",
					image: "GoogleContentAuthorshipThumb.jpg",
					date: "23 Jul 2017",
					to: "/content-validation"
				},
				{
					title: "Confirmation Dialogs. Ugh...",
					image: "Undo-DialogThumb.jpg",
					date: "13 Mar 2017",
					to: "/confirmation-dialogs"
				},
				{
					title: "Removing The Hashtag In Angular",
					image: "nohashtagThumb.jpg",
					date: "18 Nov 2016",
					to: "/removing-the-hashtag-in-angular"
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
	.date-section {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		.avatar {
			border: 2px solid $accent;
			img {
				border: 2px solid $accent;
			}
		}
		.icon {
			font-size: 12px;
			margin-right: 5px;
		}
		span {
			font-size: 13px;
		}
	}
}
</style>