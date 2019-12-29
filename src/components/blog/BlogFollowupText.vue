<template>
	<div v-html="textfollow"></div>
</template>

<script>
export default {
	name: "BlogFollowupText",
	props: ["textfollow"]
};
</script>
