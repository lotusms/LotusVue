<template>
	<div>
		<apexchart width="97%" type="line" :options="options" :series="series"></apexchart>
	</div>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

Vue.component("apexchart", VueApexCharts);

export default {
	name: "RoiChart",
	components: { VueApexCharts },
	data() {
		return {
			options: {
				chart: {
					id: "vuechart-example",
					type: "line",
					fontFamily: "Barlow",
					foreColor: "#2c5364",
					height: 700,
					width: 600,
					parentHeightOffset: 50
				},
				xaxis: {
					type: "category",
					categories: [
						"DIY Tools",
						"Freelancer",
						"Sm Web Company",
						"Lg Web Company",
						"Digital Agency"
					],
					min: 0,
					labels: {
						show: true,
						rotate: -45,
						rotateAlways: false,
						hideOverlappingLabels: true,
						showDuplicates: false,
						trim: true,
						minHeight: undefined,
						maxHeight: 120,
						style: {
							colors: [],
							fontSize: "12px",
							fontFamily: "Barlow",
							cssClass: "apexcharts-xaxis-label"
						},
						offsetX: 0,
						offsetY: 0,
						format: undefined,
						formatter: undefined,
						datetimeFormatter: {
							year: "yyyy",
							month: "MMM 'yy",
							day: "dd MMM",
							hour: "HH:mm"
						}
					},
					axisBorder: {
						show: true,
						color: "#78909C",
						height: 1,
						width: "100%",
						offsetX: 0,
						offsetY: 0
					},
					axisTicks: {
						show: true,
						borderType: "solid",
						color: "#78909C",
						height: 6,
						offsetX: 55,
						offsetY: 0
					},
					tickAmount: undefined,
					tickPlacement: "between",
					min: 0,
					max: undefined,
					range: undefined,
					floating: false,
					position: "bottom",
					title: {
						text: undefined,
						offsetX: 0,
						offsetY: 0,
						style: {
							color: undefined,
							fontSize: "12px",
							fontFamily: "Helvetica, Arial, sans-serif",
							cssClass: "apexcharts-xaxis-title"
						}
					},
					crosshairs: {
						show: true,
						width: 2,
						position: "back",
						opacity: 0.9,
						stroke: {
							color: "#b6b6b6",
							width: 0,
							dashArray: 0
						},
						fill: {
							type: "solid",
							color: "#B1B9C4",
							gradient: {
								colorFrom: "#D8E3F0",
								colorTo: "#BED1E6",
								stops: [0, 100],
								opacityFrom: 0.4,
								opacityTo: 0.5
							}
						},
						dropShadow: {
							enabled: false,
							top: 0,
							left: 0,
							blur: 1,
							opacity: 0.4
						}
					},
					tooltip: {
						enabled: false,
						formatter: undefined,
						offsetY: 0,
						style: {
							fontSize: 0,
							fontFamily: 0
						}
					}
					// max: 100000
				},
				yaxis: {
					show: true,
					showAlways: true,
					seriesName: "series - 1",
					opposite: false,
					reversed: false,
					logarithmic: false,
					tickAmount: 7,
					min: 6,
					max: 8,
					forceNiceScale: false,
					floating: false,
					decimalsInFloat: undefined,
					labels: {
						show: true,
						align: "right",
						minWidth: 0,
						maxWidth: 160,
						style: {
							color: undefined,
							fontSize: "12px",
							fontFamily: "Barlow",
							cssClass: "apexcharts-yaxis-label"
						},
						offsetX: -10,
						offsetY: 0,
						rotate: 0
					},
					axisBorder: {
						show: true,
						color: "#2c5364",
						offsetX: 0,
						offsetY: 0
					},
					axisTicks: {
						show: true,
						borderType: "solid",
						color: "#2c5364",
						width: 6,
						offsetX: 0,
						offsetY: 0
					},
					title: {
						text: "$",
						rotate: -90,
						offsetX: 0,
						offsetY: 0,
						style: {
							color: "#2c5364",
							fontSize: "12px",
							fontFamily: "Barlow",
							cssClass: "apexcharts-yaxis-title"
						}
					},
					crosshairs: {
						show: true,
						position: "back",
						stroke: {
							color: "#2c5364",
							width: 2,
							dashArray: 0
						}
					},
					tooltip: {
						enabled: true,
						offsetX: 0
					},
					categories: [15000, 30000, 45000, 60000, 75000, 90000],
					min: 0,
					max: 100000
				},
				grid: {
					show: true,
					borderColor: "#90A4AE",
					strokeDashArray: 0,
					position: "back",
					xaxis: {
						lines: {
							show: false
						}
					},
					yaxis: {
						lines: {
							show: false
						}
					},
					row: {
						colors: undefined,
						opacity: 0.5
					},
					column: {
						colors: undefined,
						opacity: 0.5
					},
					padding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}
				},
				markers: {
					size: 0,
					colors: "#2c5364",
					strokeColors: "#2c5364",
					strokeWidth: 20,
					strokeOpacity: 0.9,
					fillOpacity: 1,
					discrete: [],
					shape: "circle",
					radius: 2,
					offsetX: 0,
					offsetY: 0,
					onClick: undefined,
					onDblClick: undefined,
					hover: {
						size: undefined,
						sizeOffset: 3
					}
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: "#2c5364",
					width: 4,
					dashArray: 0
				},
				subtitle: {
					text: "Expected Costs",
					align: "center",
					margin: 10,
					offsetX: 0,
					offsetY: 0,
					floating: false,
					style: {
						fontSize: "25px",
						fontFamily: "Playball",
						color: "#539608"
					}
				}
			},
			series: [
				{
					name: "series-1",
					data: [
						{ x: "DIY Tools", y: 0 },
						{ x: "Freelancer", y: 5000 },
						{ x: "Sm Web Company", y: 25000 },
						{ x: "Lg Web Company", y: 50000 },
						{ x: "Digital Agency", y: 100000 }
					]
				}
			]
		};
	}
};
</script>