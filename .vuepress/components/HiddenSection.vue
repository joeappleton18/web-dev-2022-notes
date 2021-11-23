<template>
  <div>
    <h4 v-on:click="hidden = !hidden"> Click me for a hint</h4>
    <div v-if="!hidden">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["display-text"],
  data: function() {
    return {
      hidden: true,
    };
  },
};
</script>
