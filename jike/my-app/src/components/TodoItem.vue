<template>
  <li class="item">
    <input type="checkbox" v-model="checked">
    <slot name="item" v-bind="{checked}"></slot>
    <button v-on:click="handleClick">delete</button>
  </li>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
    
      item1:this.item,
      checked: false
    }
  },
  methods:{
    handleClick(){
      console.log(this.item1);
    }
  }
}
</script>

<style scoped>
.item {
    color: red;
}
</style>
