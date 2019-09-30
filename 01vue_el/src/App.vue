<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">
    {{model.username}}
    <br>
    {{model.password}}
<!--    <k-input @input="value = arguments[0]" :value="value"></k-input>-->
<k-form :model="model" :rules="rules">
  <k-form-item label="用户名" prop="username">
    <k-input v-model="model.username"></k-input>
  </k-form-item>
  <k-form-item label="密码" prop="password">
    <k-input v-model="model.password"></k-input>
  </k-form-item>
</k-form>

  </div>
</template>

<script>
import KInput from './components/Input.vue'
import KFormItem from './components/FormItem'
import KForm from './components/Form'
export default {
  name: 'app',
  data(){
    return {
      model:{
        username:'',
        password:''
      },
      rule:{

      },
      value:''
    }
  },
  components: {
    KInput,
    KFormItem,
    KForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
