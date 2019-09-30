<template>
    <div>
        <label for="">{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="errStatus">{{errMessage}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "FormItem",
        props:['label','prop'],
        data(){
            return {
                errorMessage:'',
                errStatus:false
            }
        }
    }
</script>

<style scoped>

</style>