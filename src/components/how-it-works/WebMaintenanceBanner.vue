<template>
	<div class="bg-dark-grey full-width row justify-center items-start">
		<div class="col-grow col-xs-12 col-sm-4">
			<div class="picture">
				<div class="picture-circle">
					<div class="child"></div>
				</div>
				<div class="img-parent">
					<img
						src="https://raw.githubusercontent.com/lotusms/LotusMS/master/404Apple.png"
						width="428"
						height="405"
						title="Web Maintenance"
						alt="Web Maintenance"
					/>
				</div>
			</div>
		</div>
		<div class="col-grow col-xs-12 col-sm-8 height500">
			<div class="row full-height justify-center items-center content-center">
				<div class="col-shrink col-xs-12 col-sm-6">
					<h5 class="subheading green-text">Web Maintenance</h5>
					<p
						class="white-text"
					>Browsers and technologies in your website upgrade very frequently. Some upgrades do not affect your website and some will. We have very affordable maintenance plans in place specifically for this purpose. We will continue to make sure your website and business solution are running like the day we built them.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "WebMaintenanceBanner"
};
</script>



<style lang="scss" scoped>
.height500 {
	height: 420px !important;
	.content-center {
		height: 100% !important;
	}
}
.picture {
	width: 100%;
	position: absolute;
	.picture-circle {
		background-color: #cbccce;
		border-radius: 0 500px 500px 0;
		position: absolute;
		height: 420px;
		width: 420px;
		.child {
			padding-top: 100%;
		}
	}
	.img-parent {
		img {
			position: relative;
			bottom: 0;
			left: 20px;
			width: 444px;
		}
	}
}
@media (max-width: 991px) {
	.height500 {
		.content-center {
			height: 100% !important;
			justify-content: flex-end;
			padding-right: 40px;
		}
	}
}
@media (max-width: 740px) {
	.picture {
		.picture-circle {
			width: 345px;
			.child {
				padding-top: 100%;
			}
		}
		.img-parent {
			img {
				width: 345px;
				bottom: -93px;
			}
		}
	}
}
@media (max-width: 599px) {
	.picture {
		position: static;
		.picture-circle {
			display: none;
		}
		.img-parent {
			text-align: center;
			padding: 20px;
			img {
				position: static;
				width: 255px;
			}
		}
	}
	.height500 {
		height: auto !important;
		.content-center {
			height: auto;
			justify-content: inherit;
			padding-right: initial;
			padding: 20px;
		}
	}
}
</style>
