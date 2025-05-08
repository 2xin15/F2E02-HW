<script >
    // import { ref } from 'vue'

    // defineProps({
    //     msg: String,
    // })

    // const count = ref(0)

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
    }
}
</script>

<template>
    <div class="button">
        <button type="button" @click="add">點擊一下吧！</button> 
        <span> &nbsp; {{ count }} </span>
    </div>
</template>

<style>
.button button{
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