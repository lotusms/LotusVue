<template>
	<div class="bg-grey-2 shadow-2">
		<q-banner class="bg-primary-alt">
			<h5 class="green-text text-center q-mb-none">{{heading}}</h5>
		</q-banner>
		<q-list separator>
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
	name: "SidebarMenu",
	data() {
		return {
			heading: "Blog Archive",
			links: [
				{
					title: "Is there an ROI in buying a website?",
					image: "roi.jpg",
					fullimage: "roi.jpg",
					date: "23 Nov 2018",
					to: "/is-there-an-roi-in-buying-a-website",
					text:
						"Confirm or Undo? Confirmation messages is a concept that has been in every UX Engineer's crosshairs for many years. And for the most part, the concept has been slowly evolving and pointing in the right direction. Of course, there were a few hiccups along the"
				},
				{
					title: "How much is a website?",
					image: "WebsiteCostThumb.jpg",
					fullimage: "WebsiteCost.jpg",
					date: "25 Jul 2018",
					to: "/how-much-is-a-website?",
					text:
						"This is probably the most taunting question for everyone who decides it is about time to get a website design for their business or organization. Unfortunately, there isn't a clear answer to this. The best way to imagine this is by asking yourself - how long"
				},
				{
					title: "Choosing the right logo",
					image: "wikipediaLogoThumb.jpg",
					fullimage: "wikipediaLogo.jpg",
					date: "01 Nov 2017",
					to: "/choosing-the-right-logo",
					text:
						"Every business starts small and usually, one of the first steps is to create a brand. This is a stressful and very important step in creating your startup business. Your logo will become part of your brand identity and it must be carefully thought through and"
				},
				{
					title: "Content Validation",
					image: "GoogleContentAuthorshipThumb.jpg",
					fullimage: "GoogleContentAuthorship.jpg",
					date: "23 Jul 2017",
					to: "/content-validation",
					text:
						"Content Authorship Content Authorship markup (rel=author) is no longer supported by Google as of August 28th, 2014. This means, Google no longer feels it is worth the effort to scout through the data to find exact copies of re-written content and accredited"
				},
				{
					title: "Confirmation Dialogs. Ugh...",
					image: "Undo-DialogThumb.jpg",
					fullimage: "Undo-Dialog.jpg",
					date: "13 Mar 2017",
					to: "/confirmation-dialogs",
					text:
						"Confirm or Undo? Confirmation messages is a concept that has been in every UX Engineer's crosshairs for many years. And for the most part, the concept has been slowly evolving and pointing in the right direction. Of course, there were a few hiccups along the"
				},
				{
					title: "Removing The Hashtag In Angular",
					image: "nohashtagThumb.jpg",
					fullimage: "nohashtag.jpg",
					date: "18 Nov 2016",
					to: "/removing-the-hashtag-in-angular",
					text:
						"Angular is a Single Page Application framework designed to generate views inside your index page to eliminate refreshing the page and reloading every component every time you navigate from page to page. Instead, the index page loads all main components, and"
				},
				{
					title: "User Usability And User Experience",
					image: "UXThumb.jpg",
					fullimage: "UX.jpg",
					date: "02 Jul 2016",
					to: "/user-usability-and-user-experience",
					text:
						"Websites are comprised of two major sections - the client side and the server side. The client side is also known as the front end, and the server side known as back end. Both sides work unison to handle the website's functionality. The server side"
				},
				{
					title: "Using Images On A Website",
					image: "image-designThumb.jpg",
					fullimage: "image-design.jpg",
					date: "01 Jun 2016",
					to: "/using-images-on-a-website",
					text:
						"How do I put an image on my website? As silly as this question may seem, this is something that any web designer or developer can do. Yet, for the unexperienced, this can be a little more challenging. Developers write everything that you want in a"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
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
</style>