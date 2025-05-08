<script>
import { ref } from 'vue';
    
export default{
    setup(){
        const count = ref (0)

        const add = () =>{
            count.value++
        }

        const minus = () => {
            count.value--
        }

        const reset = () => {
            count.value = 0
        }

        return {
            count,
            add,
            minus,
            reset
        }
    }
    
}
</script>

<template>
    <div class="button2">
        
        <button type="button" @click="add">+1</button> 
    
        <button type="button" @click="minus">-1</button> 
    
        <button type="button" @click="reset">reset</button> 
        <span> {{ count }} </span>

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
.button2 button{
    margin: 10px;
    background-color: #e7bbbb;
    border: 2px solid #946b70;
}
.button2 button:hover{
    background-color: #b6dae0;
    border: 2px solid #6997ac;
    color: #102e3b;
}
.button2 span{
    font-size: 20px;
    color: #6b2c44;
}
</style>