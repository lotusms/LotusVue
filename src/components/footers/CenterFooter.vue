<template>
	<div>
		<h5 class="green-text text-center">{{ heading }}</h5>
		<q-list dark separator>
			<q-item
				v-for="(blog, index) in blogsCollection"
				:key="index"
				:to="blog.url"
				clickable
				v-ripple
				exact
			>
				<q-item-section avatar>
					<q-avatar>
						<img
							:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/${blog.image}`"
							:alt="blog.title"
							class="avatar"
						/>
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label lines="2">{{ blog.title }}</q-item-label>
				</q-item-section>
				<q-item-section side top class="date-section">
					<q-icon size="5" name="calendar_today" color="primary" class="icon" />
					<span>{{ blog.date | niceDate }}</span>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<script>
import MixinGetPosts from "../../mixins/get-posts";
import GetPostsData from "../../mixins/posts-data";
import { date } from "quasar";

export default {
	name: "CenterFooter",
	filters: {
		niceDate(value) {
			return date.formatDate(value, "MMM Do, YYYY");
		}
	},
	mixins: [MixinGetPosts, GetPostsData],
	data() {
		return {
			heading: "Knowledge Center"
		};
	},
	methods: {
		goto() {
			this.$router.go();
		}
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
