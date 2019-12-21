<template>
  <div>
    <slot>{{ component }} </slot>
  </div>
</template>

<script>
export default {
  name: "BlogComponent",
  props: ["component"]
};
</script>

<style></style>
