<script setup>
    // import { ref } from 'vue';
    import { reactive } from 'vue';

    // const count = ref(0)

    const count = reactive({
        num: 0,
        add: () => {
            count.num++
        },
        minus: () => {
            count.num--
        },
        reset: () => {
            count.num = 0
        }
    })
</script>

<template>
    <div class="button3">
        <button type="button" @click="count.add">+1</button> 
        <button type="button" @click="count.minus">-1</button> 
        <button type="button" @click="count.reset">reset</button> 
        <span> {{ count.num }} </span>
    </div>

</template>

<style>
.button3 button{
    margin: 10px;
    background-color: #b6dae0;
    border: 2px solid #6997ac;
    color: #102e3b;
}
.button3 button:hover{
    background-color: #e7bbbb;
    border: 2px solid #946b70;
}
.button3 span{
    font-size: 20px;
    color: #67978b;
}
</style>