<template>
	<div>
		<div class="fit row justify-start items-start content-start" id="blogContent">
			<div class="col-xs-12 col-sm-6 col-md-4" v-for="(blog, index) in blogs" :key="index">
				<div class="q-mb-lg q-px-lg">
					<q-card class="my-card" square style>
						<div class="ms-thumbnail ms-thumbnail-diagonal">
							<router-link :to="blog.url">
								<img :src="blog.image" :alt="blog.title" />
								<figcaption class="ms-thumbnail-caption text-center">
									<div class="ms-thumbnail-caption-content">
										<h5 class="green-text ms-thumbnail-caption-title">{{ blog.title }}</h5>
									</div>
								</figcaption>
							</router-link>
						</div>
						<div class="bg-grey-2">
							<q-card-section>
								<h5 class="green-text q-mb-none">{{ blog.title }}</h5>
								<div class="text-subtitle1 date-section q-mt-none">
									<q-icon size="5" name="calendar_today" color="primary" class="icon" />
									{{ blog.date | niceDate }}
								</div>
							</q-card-section>

							<q-card-section v-html="blog.excerpt">...</q-card-section>

							<q-card-section>
								<q-btn color="primary-alt full-width" label="Read More" :to="`/blog/${blog.id}`" />
							</q-card-section>
						</div>
					</q-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MixinGetPosts from "../../mixins/get-posts";
import { date } from "quasar";

export default {
	name: "Blog",
	mixins: [MixinGetPosts],
	filters: {
		niceDate(value) {
			return date.formatDate(value, "MMM Do, YYYY");
		}
	},
	data() {
		return {
			blogs: []
		};
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
