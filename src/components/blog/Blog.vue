<template>
	<div class="q-mr-lg" id="blogContent">
		<q-card class="my-card q-mb-lg" v-for="(link, index) in paginate()" :key="index" :to="link.to">
			<div class="ms-thumbnail ms-thumbnail-diagonal">
				<img
					:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/full-image/${link.fullimage}`"
					:alt="link.title"
				/>
				<figcaption class="ms-thumbnail-caption text-center">
					<div class="ms-thumbnail-caption-content">
						<h5 class="green-text ms-thumbnail-caption-title">{{link.title}}</h5>
					</div>
				</figcaption>
			</div>
			<div class="bg-grey-2">
				<q-card-section>
					<h2 class="green-text q-mb-none">{{link.title}}</h2>
					<div class="text-subtitle1 date-section q-mt-none">
						<q-icon size="5" name="calendar_today" color="primary" class="icon" />
						{{link.date}}
					</div>
				</q-card-section>

				<q-card-section>{{link.text}}</q-card-section>
			</div>
		</q-card>
		<ul class="row justify-center no-bullet">
			<li>
				<a href="#" @click="showPrev">
					<q-icon name="chevron_left" size="sm" />
				</a>
			</li>
			<li v-for="pageNumber in totalPages">
				<a
					href="#"
					@click="setPage(pageNumber)"
					:class="{
            current: currentPage === pageNumber, 
            last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), 
            first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)
            }"
				>{{ pageNumber }}</a>
			</li>
			<li>
				<a href="#" @click="showNext">
					<q-icon name="chevron_right" size="sm" />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import { log } from "util";
export default {
	name: "Blog",
	data() {
		return {
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
			],
			currentPage: 0,
			itemsPerPage: 2,
			resultCount: 0
		};
	},
	computed: {
		totalPages: function() {
			return Math.ceil(this.resultCount / this.itemsPerPage);
			console.log(totalPages);
		},
		isStartPage: function() {
			return this.currentPage == 0;
		},
		isEndPage: function() {
			return this.currentPage * this.itemsPerPage >= this.links.length;
		}
	},
	methods: {
		setPage: function(pageNumber) {
			this.currentPage = pageNumber;
		},
		paginate: function() {
			if (!this.links || this.links.length != this.links.length) {
				return;
			}
			this.resultCount = this.links.length;
			if (this.currentPage >= this.totalPages) {
				this.currentPage = this.totalPages;
			}
			var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
			return this.links.slice(index, index + this.itemsPerPage);
		},
		showPrev: function() {
			if (this.isStartPage) return;
			this.currentPage--;
		},
		showNext: function() {
			if (this.isEndPage) return;
			this.currentPage++;
		}
	},
	created: function() {
		this.setPage(1);
	}
};
</script>

<style lang="scss" scoped>
.my-card {
	width: 100%;
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

.ms-thumbnail {
	position: relative;
	overflow: hidden;
	margin-bottom: 0;
	img {
		position: relative;
		z-index: 0;
		transition: all ease 1s;
		width: 100%;
	}
	.ms-thumbnail-caption {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 0;
		top: -100%;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 10, 18, 0.45);
		padding: 0;
		color: #fff;
		transition: all ease 0.5s;
		-webkit-backface-visibility: hidden;
		&:before {
			content: "";
			display: block;
			background-color: rgba(0, 10, 18, 0.45);
			position: absolute;
			left: 0;
			right: 0;
			top: 200%;
			bottom: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			transition: all ease 0.5s;
			-webkit-backface-visibility: hidden;
		}
		.ms-thumbnail-caption-content {
			-webkit-transform: translateY(-100%);
			transform: translateY(-100%);
			transition: all ease 0.6s;
			-webkit-backface-visibility: hidden;
			padding: 20px;
			padding: 2rem;
			position: absolute;
			top: 50%;
			width: 100%;
			.ms-thumbnail-caption-title {
				margin: 0 0 10px;
				margin: 0 0 1rem;
			}
		}
	}
	&:hover,
	&:focus {
		img {
			-webkit-transform: scale(1.1);
			transform: scale(1.1);
		}
		.ms-thumbnail-caption {
			top: 0;
			opacity: 1;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
			&:before {
				top: 0;
			}
			.ms-thumbnail-caption-content {
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
			}
		}
	}
	&.ms-thumbnail-diagonal {
		.ms-thumbnail-caption {
			right: 100%;
			left: auto;
			&:before {
				right: -200%;
				left: auto;
			}
			.ms-thumbnail-caption-content {
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
			}
		}
		&:hover,
		&:focus {
			.ms-thumbnail-caption {
				right: 0;
				left: auto;
				&:before {
					right: 0;
					left: auto;
				}
				.ms-thumbnail-caption-content {
					-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
				}
			}
		}
	}
}

.no-bullet {
	list-style-type: none;
	li {
		a {
			min-width: 2em;

			display: inline-flex;
			flex-direction: column;
			align-items: stretch;
			position: relative;
			outline: 0;
			border: 0;
			vertical-align: middle;
			padding: 0;
			font-size: 14px;
			line-height: 1.715em;
			text-decoration: none;
			color: inherit;
			background: transparent;
			font-weight: 500;
			text-transform: uppercase;
			text-align: center;
			width: -webkit-fit-content;
			width: -moz-fit-content;
			width: fit-content;
			padding: 7px;
			border-radius: 3px;
			margin: 0 5px;
			&.current {
				color: #ffffff !important;
				background: $primary !important;
			}
		}
	}
}
</style>
