<template>
    <div>
        <form action="">
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Form",
        provide(){
            return {
                kForm:this
            }
        },
        props:{
            model:{
                type:Object,
                required:true
            },
            rules:{
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>