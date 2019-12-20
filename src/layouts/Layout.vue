<template>
	<q-layout view="lHh lpR lff">
		<q-header elevated class="bg-primary text-white" height-hint="98">
			<q-toolbar>
				<q-toolbar-title>
					<q-img src="../assets/logo.svg" style="max-width:112px" class="q-my-sm" />
				</q-toolbar-title>
				<q-space />
				<div class="main-nav">
					<q-btn to="/" class="nav-item" square clickable exact flat>Home</q-btn>
					<q-btn
						label="Services"
						class="nav-item"
						icon-right="keyboard_arrow_down"
						square
						clickable
						exact
						flat
					>
						<q-menu auto-close square content-style="background-color:#2c5364; color: #ffffff">
							<q-list style="min-width: 100px">
								<q-item clickable to="/web-design">
									<q-item-section>Web Design</q-item-section>
								</q-item>
								<q-item clickable to="/graphic-design">
									<q-item-section>Graphic Design</q-item-section>
								</q-item>
								<q-item clickable to="/user-experience-optimization">
									<q-item-section>User Experience Optimization</q-item-section>
								</q-item>
								<q-item clickable to="social-network-optimization">
									<q-item-section>Social Network Optimization</q-item-section>
								</q-item>
								<q-item clickable to="web-maintenance">
									<q-item-section>Web Maintenance</q-item-section>
								</q-item>
							</q-list>
						</q-menu>
					</q-btn>
					<q-btn
						v-for="nav in navs"
						:key="nav.label"
						:to="nav.to"
						class="nav-item"
						square
						clickable
						exact
						flat
					>{{nav.label}}</q-btn>
				</div>
				<div class="mobile-nav">
					<q-btn
						flat
						dense
						round
						@click="leftDrawerOpen = !leftDrawerOpen"
						icon="menu"
						aria-label="Menu"
					/>
				</div>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" side="left" overlay elevated content-class="bg-grey-2">
			<q-list>
				<q-item-label header>
					<h6 class="text-uppercase q-mt-sm q-mb-none">Navigation</h6>
				</q-item-label>
				<q-item to="/" class="text-grey-9" clickable exact>
					<q-item-section>
						<q-item-label>Home</q-item-label>
					</q-item-section>
				</q-item>
				<q-expansion-item expand-separator label="Services">
					<q-item to="/web-design" class="text-grey-9" clickable exact>
						<q-item-section>
							<q-item-label>Web Design</q-item-label>
						</q-item-section>
					</q-item>
					<q-item to="/graphic-design" class="text-grey-9" clickable exact>
						<q-item-section>
							<q-item-label>Graphic Design</q-item-label>
						</q-item-section>
					</q-item>
					<q-item to="/user-experience-optimization" class="text-grey-9" clickable exact>
						<q-item-section>
							<q-item-label>User Experience Optimization</q-item-label>
						</q-item-section>
					</q-item>
					<q-item to="/social-network-optimization" class="text-grey-9" clickable exact>
						<q-item-section>
							<q-item-label>Social Network Optimization</q-item-label>
						</q-item-section>
					</q-item>
					<q-item to="/web-maintenance" class="text-grey-9" clickable exact>
						<q-item-section>
							<q-item-label>Web Maintenance</q-item-label>
						</q-item-section>
					</q-item>
				</q-expansion-item>
				<q-item v-for="nav in navs" :key="nav.label" :to="nav.to" class="text-grey-9" clickable exact>
					<q-item-section>
						<q-item-label>{{nav.label}}</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>

		<q-footer>
			<div class="full-width row justify-around items-start bg-black footer q-pa-lg">
				<div class="footer-col col-grow col-sm-12 col-md-4 q-pa-lg">
					<left-footer />
				</div>
				<div class="footer-col col-grow col-sm-12 col-md-4 q-pa-lg">
					<center-footer />
				</div>
				<div class="footer-col col-grow col-sm-12 col-md-4 q-pa-lg">
					<right-footer />
				</div>
			</div>
			<div class="copyright text-center q-pa-md uk-child-width-1-1@s" uk-grid>
				<div>Copyright © LOTUS Marketing Solutions LLC 2018</div>
			</div>
		</q-footer>
	</q-layout>
</template>

<script>
import LeftFooter from "../components/footers/LeftFooter";
import CenterFooter from "../components/footers/CenterFooter";
import RightFooter from "../components/footers/RightFooter";

export default {
	name: "MyLayout",
	components: { LeftFooter, CenterFooter, RightFooter },
	data() {
		return {
			leftDrawerOpen: false,
			image: "/assets/logo.svg",
			navs: [
				{
					label: "How It Works",
					to: "/how-it-works"
				},
				{
					label: "Blog",
					to: "/blog"
				},
				{
					label: "About",
					to: "/about"
				},
				{
					label: "Contact",
					to: "/contact"
				}
			]
		};
	}
};
</script>

<style lang="scss">
.q-router-link--active,
.q-btn--active {
	color: #000000 !important;
	background: #d2d2d2 !important;
}
.main-nav {
	margin-top: 28px;
}
.mobile-nav {
	display: none;
}
@media (max-width: 991px) {
	.main-nav {
		display: none;
	}
	.mobile-nav {
		display: block;
	}
}

.footer {
	border-top: 7px solid #4f5b62;
}
.copyright {
	background-color: #4f5b62;
	margin-top: 0 !important;
}
</style>
