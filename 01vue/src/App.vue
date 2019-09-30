<template>
  <div id="app">
    <h1>{{title}}</h1>
    <br>
    <h2>添加课程</h2>
    <div>
      <label for="">课程名称：</label>
      <input type="text" v-model="courseInfo.name">
    </div>
    <div>
      <label for="">课程价格：</label>
      <input type="text" v-model="courseInfo.price">
    </div>
    <div>
      <button @click="addCourseToList">添加到课程列表</button>
    </div>
    <br>
    <h2>课程列表</h2>
    <table>
      <tr>
        <th>课程名称</th>
        <th>课程价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in courseList" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td><button @click="addCourseToCart(index)">添加到购物车</button></td>
      </tr>
    </table>
    <cart @removeItem ="remove" v-bind:courseItem = "courseItem"></cart>
  </div>
</template>
<script>
  import Cart from './components/Cart';
  export default {
    name:"app",
    components: {Cart},
    comments:{
      Cart
    },
    data(){
      return {
        title:"开课吧",
        courseItem :[],
        courseInfo:{
          name:'',
          price:''
        },
        courseList:[
          {
            id:1,
            name:"web全栈开发架构师",
            price:"9900"
          },
          {
            id:2,
            name:"python人工智能",
            price:"8800"
          }
        ]
      }
    },
    methods:{
      addCourseToList(){
        this.courseList.push(this.courseInfo);
      },
      addCourseToCart(index){
        let item = this.courseList[index];
        let isHasCourse = this.courseItem.find(x=>x.id === item.id);
        if (isHasCourse){
          // console.log(isHasCourse);
          this.courseItem[index].number += 1;
        }else{
          this.courseItem.push({
                    ...item,
                    number:1,
                    isActive:true
            }
          );
        }
      },
      remove(index){
        this.courseItem.splice(index,1);
      },
    }
  }
</script>

