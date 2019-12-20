<template>
	<q-page>
		<div class="q-pa-xl full-width full-height column">
			<div>
				<h1 class="heading text-secondary bottom-border text-center justify-center">{{heading}}</h1>
				<p class="pre-formatted">{{text}}</p>
			</div>
			<div class="full-width row justify-around items-start">
				<div class="col-xs-12">
					<q-card dark square class="q-ma-sm my-card">
						<div class="full-width row justify-around items-end">
							<div class="col-xs-12 col-sm-4">
								<div class="q-pa-xl text-center">
									<q-avatar size="240px" square>
										<img src="../assets/logo.svg" alt="Vision Statement" />
									</q-avatar>
									<q-list dark class="text-left" style="max-width: 250px; margin: 0 auto;">
										<q-item v-for="(contact, index) in contacts" :key="index">
											<q-item-section avatar>
												<a :href="contact.to" target="_blank">
													<q-avatar color="white" text-color="black" size="md" :icon="contact.icon" />
												</a>
											</q-item-section>

											<q-item-section>
												<q-item-label>{{contact.text}}</q-item-label>
											</q-item-section>
										</q-item>
									</q-list>
								</div>
							</div>
							<div class="col-xs-12 col-sm-8 full-height">
								<q-card-section>
									<div>
										<h5 class="green-text q-mb-xl text-h4">Get in touch with us!</h5>
										<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
											<q-input
												filled
												dark
												square
												autofocus
												color="white"
												bg-color="grey-7"
												v-model="name"
												hint="What would you like us to call you?"
												label="Name *"
												lazy-rules
												:rules="[ val => val && val.length > 0 || 'This field must not be empty']"
											/>

											<q-input
												filled
												dark
												square
												color="white"
												bg-color="grey-7"
												type="email"
												v-model="email"
												label="Email *"
												hint="abc@abc.com"
												lazy-rules
												:rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']"
											/>

											<q-input
												filled
												square
												color="white"
												bg-color="grey-7"
												dark
												type="number"
												v-model="phone"
												mask="(###) ### - ####"
												unmasked-value
												hint="(###) ### - ####"
												label="Phone"
											/>

											<q-input
												filled
												dark
												square
												color="white"
												bg-color="grey-7"
												type="textarea"
												v-model="comment"
												label="Message *"
												hint="Be as detailed as you'd like"
												lazy-rules
												:rules="[ val => val && val.length > 0 || 'This field must not be empty']"
											/>

											<div class="text-right">
												<q-btn
													label="Reset"
													type="reset"
													color="white"
													text-color="white"
													flat
													class="q-ml-sm"
												/>
												<q-btn label="Submit" type="submit" color="white" text-color="black" />
											</div>
										</q-form>
									</div>
								</q-card-section>
							</div>
						</div>
					</q-card>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
export default {
	name: "ContactPage",
	data() {
		return {
			heading: "Contact Us",
			text:
				'Our relationship with you is extremely important to us. We are always open to suggestions, feedback, or questions. Our team of web designers, developers, and graphic designers are always eager to collaborate with estimating a project or running and analysis on your domain to find what is more important for your project.\n\n By contacting us, you are not subjected to any obligation. We will attempt to contact you for further information that could help us answer your concerns. This stops at your request or if we feel that you are not interested and simply providing feedback or just saying hello!\n\n Please use this form to explain your concerns or make an inquiry about a web design project, and we will get back to you as soon as possible. If you are making an inquiry about a web design, be as thorough as you can be. Provide us with a domain for your current site if you have one and some domains for sites that you like so that we can zero in on a design style that you will love. \n\n Notice: With the increasing spam activity on the internet today, many spammers send emails simply saying "I need a web design." Although we reply nonetheless, we can spot them easily in the following reply from them. It will help you tremendously if you were thorough and provided contact information. This way our spam blocking algorithms will not flag your email.',
			contacts: [
				{
					text: "(717) 945-8132",
					icon: "phone",
					to: "tel:+7179458132"
				},
				{
					text: "lotusms@outlook.com",
					icon: "mail",
					to: "mailto:m%61il%74%6F%3Alotu%73ms%40ou%74%6C%6F%6Fk.%63om"
				},
				{
					text: "Like Us!",
					icon: "fab fa-facebook-f",
					to: "https://www.facebook.com/LOTUSMarketingSolutionsLLC/"
				},
				{
					text: "Follow us on Twitter!",
					icon: "fab fa-twitter",
					to: "https://twitter.com/LotusMarketingS"
				},
				{
					text: "Follow us on LinkedIn!",
					icon: "fab fa-linkedin-in",
					to:
						"https://www.linkedin.com/in/lotus-marketing-solutions-llc-32185462/"
				},
				{
					text: "Follow us on Google!",
					icon: "fab fa-google-plus-g",
					to: "https://plus.google.com/u/0/+LuisSilvaLOTUSMarketingSolutions"
				}
			],
			comment: "",
			email: "",
			name: "",
			phone: ""
		};
	},
	methods: {
		isValidEmailAddress(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}
	}
};
</script>
