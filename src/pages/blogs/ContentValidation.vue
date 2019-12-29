<template>
	<q-page>
		<div class="q-pa-xl">
			<div class="full-width row wrap justify-start items-start">
				<div class="col-xs-12 col-md-8">
					<div class="q-ma-md">
						<blog-post
							:title="title"
							:date="date"
							:image="`https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/full-image/${image}`"
							:text="text"
						/>
					</div>
				</div>
				<div class="col-xs-12 col-md-4">
					<div class="q-ma-md">
						<sidebar-menu />
					</div>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
import SidebarMenu from "../../components/blog/SidebarMenu";
import BlogPost from "../../components/blog/BlogPost";
import GetPostsData from "../../mixins/posts-data";
export default {
	name: "BlogPage",
	mixins: [GetPostsData],
	components: {
		SidebarMenu,
		BlogPost
	},
	data() {
		return {
			title: "Content Validation",
			date: "2 Jul 2017",
			image: "GoogleContentAuthorship.jpg",
			text:
				'<h4>Content Authorship</h4><p>Content Authorship markup (rel="author") is no longer supported by Google as of August 28th, 2014. This means, Google no longer feels it is worth the effort to scout through the data to find exact copies of re-written content and accredited to someone else.<br/><br/>With the Internet being such a huge source of information, it is very common to find concurring information than it is to find additional content related to the topic. Many SEO gurus and researchers build data and statistics on how many experts agree on a subject. It doesn\'t make it valid, but it adds an argument to a theory.<br/><br/> Ultimately, website content starves as soon as the topic becomes irrelevant and content is not removed or updated. Therefore, for validity sake, the date of the content and the original source is the most accurate place to gather information from. Website content is merely used to the discretion of the author to deliver a message on a specific subject based on the author\'s beliefs.</p><h4>Content Ranking</h4><p>The greatest concern for many SEO scoundrels was the fear that ranking would become affected by this. It does to an extent. Although content authorship is dead, author ranking is not. Google\'s algorithm still crawls content finding the author and returns it as a search result when found. This brings validity to the author, not the website. And it does not make the content true, rather, it makes it popular. However, it only makes it popular by user interaction. One story from different authors will only create popularity to the author\'s article that resulted in more sessions/click ratio. So, is it worth it to fight for content ownership? Debatable, in my opinion. I\'d suggest looking further into who is copying your story and allowing them to concur with your points. Suggesting accrediting you is always a good idea.</p><h4>Who Did It First?</h4><p>It is always a clever idea to timestamp your content. Google will consider the time the article was written and provide it with the search results. However, if you suspect someone may have stolen your content, you can look into the <a href="http://web.archive.org/" target="_blank">Internet Archives</a> to retrieve the time this particular  article/page was cached. </p><h4>Reading Material</h4><a href="http://searchengineland.com/author-rank-authorship-rankings-that-eric-schmidt-book-quote-153253"  target="_blank">Author Rank, Authorship, Search Rankings &amp; That Eric Schmidt Book Quote</a><br/><a href="http://searchengineland.com/google-authorship-dead-author-rank-202254" target="_blank">Google Authorship May Be Dead, But Author Rank Is Not</a>'
		};
	}
};
</script>