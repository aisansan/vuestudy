<template>
    <div>
        <h2>我是购物车</h2>
        <table>
            <tr>
                <td>勾选</td>
                <td>课程名称</td>
                <td>课程价格</td>
                <td>数量</td>
                <td>价格</td>
            </tr>
            <tr v-for="(item,index) in courseItem" v-bind:key="item.id">
                <td><input type="checkbox" v-model="item.isActive"></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.number}}</td>
                <td>{{item.price*item.number}}</td>
                <td>
                    <button @click="minus(index)">-</button>
                    {{item.number}}
                    <button @click="add(index)">+</button>
                </td>

            </tr>
            <tr>
                <td></td>
                <td>{{isActiveCourse}}/{{allCourseList}}</td>
                <td>{{allPrice}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props:[
            'courseItem'
        ],
        methods:{
            //wrong way
            minus(index){
                let number = this.courseItem[index].number;
                if (number > 1){
                    this.courseItem[index].number -= 1;
                }else{
                    if (window.confirm("really")){
                        this.$emit('removeItem',index);
                    }
                }

            },
            add(index){
                this.courseItem[index].number += 1;
            }
        },
        computed:{
            isActiveCourse(){
                return this.courseItem.filter(item => item.isActive).length;
            },
            allCourseList(){
                return this.courseItem.length;
            },
            allPrice(){
                let num = 0;
                this.courseItem.forEach(item => {
                    if (item.isActive){
                        num += item.price*item.number;
                    }
                })
                return num;
            }
        }
    }
</script>

<style scoped>

</style>