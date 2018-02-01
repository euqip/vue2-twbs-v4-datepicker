<template lang="pug">
        .desabledday
          span.fa(:class="icondesable")
</template>

<script>
  export default {
    props: {
      icondesable: { type: String, default: "fa-times"}
    }

  }
</script>
