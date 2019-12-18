<template>
	<div class="q-mx-xl text-center">
		<div>
			<q-timeline :layout="layout" color="secondary">
				<q-timeline-entry heading>
					<h2 class="heading green-text">This is how it works!</h2>
				</q-timeline-entry>

				<q-timeline-entry title subtitle="Phase 0" side="left">
					<div class="q-mx-sm card">
						<h5 class="green-text">Initial Consultation</h5>
						<div class="cd-timeline-img" style="padding: 15px;">
							<img src="../../assets/images/phase0.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>It all starts with a call and analysis of business requirements. We will discuss and estimate size, complexity, and cost; either in person or via email, phone, or online meeting.</p>
					</div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 1" side="right">
					<div class="q-mx-sm card">
						<h5 class="green-text">Mock Designs</h5>
						<div class="cd-timeline-img">
							<img src="../../assets/images/phase1.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>Once we have agreed, we will collect an initial retainer payment (50% of total work or 33% for Specialty and Enterprise Designs. This step kicks off the initial design mock ups that will demonstrate the web design proposed look & feel.</p>
					</div>
					<div></div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 2" side="left">
					<div class="q-mx-sm card">
						<h5 class="green-text">Web Development</h5>
						<div class="cd-timeline-img" style="padding: 20px;">
							<img src="../../assets/images/phase2.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>Once the web design has been reviewed and approved (this may need several revisions), the designs are developed to perform the functions needed. These can include page navigation, element transitions, database connections, dynamic processing, and more.</p>
					</div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 1.2" side="right">
					<div class="q-mx-sm card">
						<h5 class="green-text">Process Iteration</h5>
						<div class="cd-timeline-img" style="padding: 15px;">
							<img src="../../assets/images/phase1-2.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>Large projects such as Specialty and Enterprise web designs and business solutions are too large to develop in one phase. If the project is large enough, it will be divided in iterations of web design and web development targeting a few screens at a time. At some point, payment will be required during these iterations.</p>
					</div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 3" side="left">
					<div class="q-mx-sm card">
						<h5 class="green-text">Testing</h5>
						<div class="cd-timeline-img" style="padding: 20px;">
							<img src="../../assets/images/phase3.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>At the end of phase 2 for every iteration, we will conduct a stress testing process that ensures the web design is compatible with all browsers, mobile devices, and operating systems. The testing phase also includes debugging of all errors found and UI/UX inconsistencies.</p>
					</div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 4" side="right">
					<div class="q-mx-sm card">
						<h5 class="green-text">Content Copywrite</h5>
						<div class="cd-timeline-img" style="padding: 20px;">
							<img src="../../assets/images/phase4.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>Once the website or business solution is working as expected, the content is written to ensure the information is correct. The content will be submitted by the client.</p>
					</div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 5" side="left">
					<div class="q-mx-sm card">
						<h5 class="green-text">Delivery</h5>
						<div class="cd-timeline-img" style="padding: 10px;">
							<img src="../../assets/images/phase5.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>At the end of the project or the end of every iteration for large projects, a payment will be required before the design is migrated to a live domain and server. These screens will be considered "finalized." Any changes to these pages can be taken care of during an enhancement phase.</p>
					</div>
				</q-timeline-entry>

				<q-timeline-entry subtitle="Phase 6" side="right">
					<div class="q-mx-sm card">
						<h5 class="green-text">Enhancements</h5>
						<div class="cd-timeline-img" style="padding: 25px;">
							<img src="../../assets/images/phase6.svg" class="icon" />
						</div>
						<p
							class="white-text"
						>This phase is not always needed; however, there are times when a client would like to re-design a page or set of pages that have already been finalized. The enhancement phase facilitates further improvement to the site.</p>
					</div>
				</q-timeline-entry>
			</q-timeline>
		</div>
	</div>
</template>

<script>
export default {
	name: "Timeline",
	data() {
		return {};
	},
	computed: {
		layout() {
			return this.$q.screen.lt.sm ? "dense" : "loose";
		}
	}
};
</script>
<style lang="scss" scoped>
.card {
	background: $dark;
	padding: 20px !important;
	border-radius: 8px !important;
	.cd-timeline-img {
		padding: 10px;
		border-radius: 50%;
		background: #263238;
		margin: 0 auto 20px;
		width: 97px;
		height: 97px;
		border: 4px solid #cccccc;
		.icon {
			width: 100px;
		}
	}
}
</style>