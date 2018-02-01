<template lang="pug">
    div
      .bg-secondary.text-white.names(v-for="item in items") {{item}}
</template>

<script>
  //import Vue from "vue";
  export default {
    name: "dayNames",
    mixins: [
    ],
    extends: {
    },
    props: {
      "items"  : { type: Array },
      "item"   : { type: String },
      "itemkey": { type: String },
      //Alphabetized for better readability
    data () {
      return{}
    },
    },
    computed: {
    },
    components: {},
    watch: {},
    methods: {
    },
    // component life cycle hooks, use kebab-cased-names
      beforeCreate () {},
      mounted () {},
  }
</script>

<style scoped lang="scss">
  @import "./datepicker.scss";
  .names {
    float: left;
    //background : $color4;
    width : $daywidth;
    height : $dayheight;
    text-align: center;
    margin : 0;
    padding : 0;
    line-height : $dayheight;
    vertical-align: center;
  }
</style>
