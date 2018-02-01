<template lang="pug">
      span
        i.btn.fa(v-if="icon" :class="icon")
        span.d-none.d-md-inline
          slot
</template>

<script>
  export default {
    name: "treeMenuItem",
    components: {
    },
    computed: {
    },
    props: {
      'icon': {
        type: String,
        default : ''
      }
    },
    methods: {
    },
    data () {
      return{}
    },
  }
</script>

<style scoped lang="scss">
</style>