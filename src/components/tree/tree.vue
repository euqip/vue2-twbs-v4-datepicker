<template lang="pug">

  .container-fluid
    treeMenu(:options="tree.options" :nodes="tree.nodes" :depth="0" :node="tree" :me="me")
</template>

<script>
  import treeMenu from "./tree-menu";
  import bc from "./ui-config.js"

  export default {
    name: "treedemo",
    props: [
    ],
    components: {
      treeMenu
    },
    data: function () {
      return {
        open: false,
        tree: bc.treedata,
        me: bc.me
      }
    }
  }
</script>

