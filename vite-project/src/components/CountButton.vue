<script >
export default {
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        add(){
            this.count++
        },
        minus(){
            this.count--
        },reset(){
            this.count = 0
        }
    }
}
</script>

<template>
    <div class="button">
        <button type="button" @click="add">+1</button> 
        <!-- <span> &nbsp; {{ count }} </span> -->

        <button type="button" @click="minus">-1</button> 
        <!-- <span> &nbsp; {{ count }} </span> -->

        <button type="button" @click="reset">reset</button> 
        <span> &nbsp; {{ count }} </span>
    </div>
    <!-- <div class="button">
        <button type="button" @click="minus">-1</button> 
        <span> &nbsp; {{ count }} </span>
    </div>
    <div class="button">
        <button type="button" @click="reset">reset</button> 
        <span> &nbsp; {{ count }} </span>
    </div> -->
</template>

<style>
.button button{
    margin: 10px;
    background-color: #b6dae0;
    border: 2px solid #6997ac;
    color: #102e3b;
}
.button button:hover{
    background-color: #e7bbbb;
    border: 2px solid #946b70;
}
span{
    font-size: 20px;
    color: #67978b;
}
</style>