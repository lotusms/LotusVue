<template>
	<div class="bg-mountain-image q-pa-xl">
		<h1 class="white-text heading text-center q-mb-xl q-mt-none">{{heading}}</h1>
		<div class="uk-child-width-1-1@s uk-child-width-1-2@m" uk-grid>
			<div>
				<p class="white-text paragraph" style="max-width: 80%">{{text}}</p>
				<ul style="max-width: 80%">
					<li v-for="(item, index) in listitems" :key="index">{{item.text}}</li>
				</ul>
				<div
					class="uk-child-width-1-1@s uk-child-width-1-2@m q-gutter-md items-center justify-left q-ml-xl"
					uk-grid
				>
					<q-btn
						type="a"
						color="white"
						text-color="black"
						icon="phone"
						:label="phonebtn"
						:href="phonebtnto"
					/>
					<q-btn
						tyoe="a"
						color="white"
						text-color="black"
						icon="mail"
						:label="mailbtn"
						:href="mailbtnto"
					/>
				</div>
			</div>
			<div class="text-center q-py-lg">
				<img
					:src="`https://raw.githubusercontent.com/lotusms/LotusMS/master/${image}`"
					alt="Mobile Device Compatible"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ResponsiveWebDesign",
	data() {
		return {
			heading: "Responsive Web Design (Mobile Device Compatible)",
			text:
				"All of our websites are built on a responsive framework. This means we ensure the website runs flawlessly on all mobile devices that support a web browser, such as Android phones and tablets, iPhones, iPads, Microsoft mobile devices, and Google Tablets. But why is this important?",
			phonebtn: "(717) 945-8132",
			phonebtnto: "tel:+7179458132",
			mailbtn: "Email Us",
			mailbtnto: "mailto:m%61il%74%6F%3Alotu%73ms%40ou%74%6C%6F%6Fk.%63om",
			listitems: [
				{
					text:
						"We live in a mobile generation. Most people use their phones more often than a computer or laptop."
				},
				{
					text:
						"A non-responsive website is often hard to read and requires pinching and horizontal scrolling to read."
				},
				{
					text:
						"Phone numbers and email addresses are directly connected to your device dialer and email app so that you never have to swap back and forth between browser and dialer, or copy & paste anything."
				},
				{
					text: "Try the buttons below!"
				}
			],
			background: "back_mountain.jpg",
			image: "mock.png"
		};
	}
};
</script>


<style lang="scss" scoped>
.bg-mountain-image {
	color: #fafafa;
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.77)),
		url("https://raw.githubusercontent.com/lotusms/LotusMS/master/back_mountain.jpg")
			center center no-repeat;
	background-position: center center;
	background-size: cover;
	position: relative;
	-webkit-animation: moveBack;
	animation: moveBack;
	-webkit-animation-duration: 30s;
	animation-duration: 30s;
	-webkit-animation-timing-function: linear;
	animation-timing-function: linear;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
}
</style>