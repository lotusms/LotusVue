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
			title: "Using Images On A Website",
			date: "01 Jun 2016",
			image: "image-design.jpg",
			text:
				'<h4>How do I put an image on my website?</h4><p>As silly as this question may seem, this is something that any web designer or developer can do. Yet, for the inexperienced, this can be a little more challenging. Developers write everything that you want in a website in web developing code. But, we are not going to talk about that in too much detail. If it interests you to learn the skills to do this, you can refer to this <a href="http://www.htmlgoodies.com/primers/html/article.php/3478181" target="_blank">this article</a>.</p><h4>Why should I use images in my website?</h4><p>When talking about images you must first identify the type of image you are trying to add. Is it a logo, a graphic design, or a photo? Where will you locate them and for what purpose? Images are an amazing feature to add to a website for many reasons, such as:</p><ul>	<li>enhance the design,</li>	<li>strengthen a message, </li>	<li>display a product or brand, </li>	<li>add graphics to backgrounds.</li></ul><p>Yet, all these purposes need a different approach, but we will get back to this shortly.<br/><br/> Web designers know that using images increases the website\'s appeal and reduces cognitive friction. You must know, most people are 90% visual and 10% textual beings. Our brains were designed to process shapes and color long before we learned to read and write. For more information on this subject see - <a href="https://designschool.canva.com/blog/visual-marketing/" target="_blank">10 Scientific Reasons Why People Respond To Your Visual Marketing</a>.</p><h4>How do I choose the right image?</h4><p>Separating your own personal preferences at the time to choose the image will be hard. Consider the following when choosing an image:</p><ul>	<li>Your image must be relevant above all.</li>	<li>Ensure the image is not cluttered.</li>	<li>Most screens definitions are wide-screens. We suggest that you shoot your photo in landscape mode to allow for widescreen display.</li>	<li>Images should be at least 1900px wide and then resized to the desired size. If the image is too small, you will notice blurring when the browser size increases.</li>	<li>Take the photo with the object of focus in the center and allow ample room for cropping.</li>	<li>In case of a logo, a web designer will handle the image to its full potential if the image is using an SVG format.</li></ul><h4>Preparing the image for your website.</h4><p>Images come in different sizes and they rarely display on your website in their natural size. Your web designer will alter your image according to the location, size, and use. This includes cropping and sizing. One of the most common mistakes I have come across is that the photographer zoomed into the object of focus. This causes the image to cut the object of focus when it displays on a widescreen. See below the difference between a bad photo and a good photo.</p><div class="row">	<div class="col-md-6">		<div class="header">			<img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/bad.jpg" title="Bad Original Photo" alt="Bad Original Photo">		</div>		<div class="body">			<h5 class="caption">Original Photo</h5>		</div>	</div>	<div class="col-md-6">		<div class="header">			<img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/bad-display.jpg" title="Bad Displayed on Website" alt="Bad Displayed on Website">		</div>		<div class="body">			<h5 class="caption">Displayed on Website</h5>		</div>	</div></div><p>As you can see above, the image was shot in portrait and the elephant was zoomed in. This would make a great poster on an office or wall, but unfortunately, it will not be as effective for web design.<br/><br/> The photo below was shot in landscape and the elephant was in the center. The photographer left enough environments around the elephant to allow for cropping. Because it is displayed in a wide arrangement, it fits perfectly. If it needed to be cropped to show it in a small container, there is ample room to crop the photo.</p><div class="row">	<div class="col-md-6">		<div class="header">			<img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/good.jpg" title="Good Original Photo" alt="Good Original Photo">		</div>		<div class="body">			<h5 class="caption">Original Photo</h5>		</div>	</div>	<div class="col-md-6">		<div class="header">			<img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/good-display.jpg" title="Good Displayed on Website" alt="Good Displayed on Website">		</div>		<div class="body">			<h5 class="caption">Displayed on Website</h5>		</div>	</div></div>'
		};
	}
};
</script>