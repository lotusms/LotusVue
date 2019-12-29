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
			title: "How much is a website?",
			date: "25 Jul 2018",
			image: "WebsiteCost.jpg",
			text:
				"<p>This is probably the most taunting question for everyone who decides it is about time to get a website design for their business or organization. Unfortunately, there isn't a clear answer to this. The best way to imagine this is by asking yourself -  how long is a piece of rope? Or how much is a cart full of groceries at my local supermarket?<br/><br/>There are many factors in play when getting an estimate on your web design and since all websites vary from each other, it is nearly impossible to zero-in on a hard number. We will get to the techy boring stuff later, but before that, let's re-visit the cart full of groceries first.<br/><br/>It is time for groceries and you go to the supermarket to get your monthly supplies. What do you consider to be \"items needed\"? If you are anything like me, donuts and frozen pizzas are probably number one. But, in order to decide the rest of the list, you go through your house and your fridge and find out what you are low on or ran out of. This list can be extensive, so I'll categorize it into three major categories: personal hygiene, cleaning supplies, and food items. <br/><br/>But why these three categories? Well, personal hygiene which includes grooming includes items you will need to remain presentable. This is a necessity if you ever leave your home to go to work or a night out in town. Let's be honest, deprive yourself of these items to thin out your budget and your life will take an unexpected turn. Cleaning supplies do the same for your home. And food is just something we can't afford to neglect if we want to live.<br/><br/>Now that you have your list, you are ready to fill up your cart. However, two people with the same list will end up with two different totals from the cashier! This happens because many vendors price their items slightly different and although you both satisfied the list, you picked items from different vendors. For example, the list said \"shampoo\". But it didn't specify which kind and which brand. While you grabbed the one that smelled the best to you, our imaginary friend picked one with Parabens and mystical powers which it's more expensive.</p><h4>Your Web Design Cart</h4><p>Much like your grocery cart, a web design is also categorized into several sections (i.e. User Interface, User Experience, Web Development, Search Engine Optimization, etc). Depending on your needs, you can choose to lighten the load on some of these areas, for example, Search Engine Optimization (SEO). Perhaps, you are not in a hurry to have your website ranked by Search Engines.  But I would consider your User Interface (UI), User Experience (UX), and Web Development to be crucial in a web design that will result in a great site.<br/> <br/>Also, much like the grocery cart example, person A may require an interactive web design with 40+ pages, contact forms, store pages, a content management system, or user profiles; while person B requires an informational website that focuses on providing information and attracting traffic or business. Both of these are completely different from each other. </p><h4>Solving The Mystery</h4><p>The most realistic way to solve this problem is by having a budget available. If you don't have a budget, this typically means, you do not have an amount you are ready to spend on creating a web design and therefore, any estimate you get from your web design company will seem too large. Let me be bold for a second. You shouldn't expect a design to cost you $200. Anyone offering you this is most likely not a professional and you will waste your money. <br/><br/>By having a budget, your web design company can allocate the necessary manpower and acquire resources while staying within your number. For example, your budget may not be enough to cover a store or content management system. Your web design company will be able to communicate this to you and offer you a startup system that will cover the rest while ensuring there will be room for scaling up to a more complex system in the future. Your web design company can also offer you a retainer (usually 50%) to get the website done until you have the rest of the funds and pay it off before the website is complete. In some cases, web design companies can work with a payment plan. This often comes with a contract and subjects you to legally binding commitments and penalty fees. <br/> <br/>Regardless, of what is agreed, make sure you have a budget and that your web design company provides you in writing that they are willing to stay with that budget unless a budget modification is needed and it is communicated with you. </p><h4>Getting A Budget For Your Web Design</h4><p>Be realistic when acquiring a budget for your web design. Professional services range from $45/hr - $100/hr, depending on who you talk to. Most web design companies with a brick-and-mortar office have an overhead they have to cover. Their lights must turn on every day. Their water must continue running. And their employees must get paid for ~40hrs/week. These companies are most likely to:</p><ul>	<li>be more expensive</li>	<li>have a solid reputation,</li>	<li>have a place you can come in and settle a complaint if something goes wrong,</li>	<li>have experts in their hire that specialize in a particular set of skills.</li></ul><p>Other business models, including freelancers, may be a better fit for your budget. These companies:</p><ul>	<li>have a smaller overhead and are able to offer less expensive solutions,</li>	<li>run their business online and will come to you, </li>	<li>have experts working under sub-contracts (they only work when they are called upon),</li>	<li>are easier to get a hold of and are often open on weekends.</li></ul><p>Once you've decided on your budget size, there are several ways to acquire it. If you have not set aside any funds for marketing or business growth, here is a small list of resources that can help you.</p><ul>	<li>A business credit card</li>	<li>A business loan from a banking institution </li>	<li>A PayPal payment option</li>	<li>A payment plan from your web design company</li>	<li>Bartering (your web design company may be interested in a quid-pro-quo relationship)</li></ul><h4>Conclusion</h4><p>Be completely honest with yourself when pursuing a web design for your organization. Bias status aside, a website is one of the most important assets you will have in your business. It is the front face that everyone will see and judge before they call you or knock on your door. But it must be professional, efficient, user-friendly, as well as cost-effective. Be ready to pay for professional services. An extremely inexpensive design, as enticing as it may seem, should raise a red flag in your head. Free website builders will come with limitations and users can judge you for it. And lastly, have a budget in place or negotiate for a payment plan if needed.</p>"
		};
	}
};
</script>