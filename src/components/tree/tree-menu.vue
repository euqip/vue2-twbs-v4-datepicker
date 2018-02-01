<template lang="pug">
  .tree-menu
    .label-wrapper
      div(v-if="enabled(node.role)" :style="indent" @click.prevent="toggleChildren" , :title="_(node.title)")
        i.btn.fa(v-if="node.nodes" :class="[showChildren ? opt.deployedfolder || 'fa-minus-square-o' : opt.collapsedfolder || 'fa-plus-square-o']")
        span(v-if=("node.what==='route'" && "enabled(node.role)") href="#", tag="span", :to="node.uri" title="change the <span> tag to a router-link")
          treeMenuItem(:icon="node.icon" :class="node.classes") {{ node.label | i18n}}
        a(v-else-if=("node.what==='link'" && "enabled(node.role)") :href="node.uri")
          treeMenuItem(:icon="node.icon" :class="node.classes") {{ node.label | i18n}}
        div(v-else=("enabled(node.role)"))
          treeMenuItem(:icon="node.icon" :class="node.classes") {{ node.label | i18n}}
      tree-menu(
        v-if="showChildren"
        v-for="node in node.nodes"
        :node="node"
        :depth="depth+1"
        :key="node.keyid"
        :me="me"
        :options="options"
      )

</template>

<script>
  import treeMenuItem from './tree-menu-item'
  export default {
    name: 'tree-menu',
    components: {
      treeMenuItem
    },
    props: {
      'node': {
        type : Object
      },
      'depth': {
        type : Number
      } ,
      'nodes': {
        type : Array
      },
      'options': {
        type : Object,
      },
      'me': {
        type: Object
      }
    },
    data() {
      return {
        showChildren:false,
        // opt was intended to merge defaults with provided options
        opt: this.options || {
          "indentlength": 0,
          "accordion": true,
          "collapsedfolder": "fa-plus-square-o",
          "deployedfolder": "fa-minus-square-o",
          "deployedroot": true
        }
      }
    },
    computed: {
      // iconClasses is not used, it is repolaced by a tarnary class
      // in template, to make is options dependant
      iconClasses() {
        return {
          'fa-caret-right': !this.showChildren,
          'fa-caret-down': this.showChildren,
        }
      },
      labelClasses() {
        return { 'has-children': this.nodes }
      },
      indent(){
        return {
          // default indent length is 20px
          transform: `translate(${this.depth *
            ((this.options.indentlength === undefined) ? 20 : this.options.indentlength)}px)`
        }
      },
    },
    methods: {
      toggleChildren(){
        this.showChildren=!this.showChildren
      },
      enabled: function(role) {
        // you should pass 'me' as param to the component to make it reusable
        // me should be defined to filter nodes.
        if (this.me === undefined  || this.me === null )
          return true
        if (_.indexOf(this.me.roles, role ) >= 0){
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
body {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1em;
}
.tree-menu {
  .label-wrapper {
    padding-bottom: 1px;
    margin-bottom: 1px;
    border-bottom: 1px solid #ccc;
    .has-children {
      cursor: pointer;
    }
  }
}


</style>
