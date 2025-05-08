<script setup>
import { ref } from 'vue';

const title = ref("精美筆記本")
const description = ref("高品質紙張，精裝封面")
const price = ref(100)
const quantity = ref(0)
const totalPrice = ref(0)

const add = () =>{
    quantity.value++
        updateTotalPrice()
    }
const minus = () => {
    if (quantity.value > 0) quantity.value--
        updateTotalPrice()
    }
const updateTotalPrice = () =>{
    totalPrice.value = price.value * quantity.value
    }

// export default{
//     setup(){
//         const count = reactive({
//             count: 0,
//             price: 100
//         });
//         // const count = ref (0)

//         const add = () =>{
//             count.count++
//         }

//         const minus = () => {
//             if (count.count > 0) count.count--
//         }

//         return {
//             ...toRefs(count),
//             add,
//             minus,
//         }
//     }
// }
</script>

<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <span>{{ description }}</span>
        <p>單價：${{ price }}</p>
        <p>數量：{{ quantity }}</p>
        <p>總價：${{ totalPrice }}</p>
        <button @click="minus">-</button> 
        <input type="number" v-model="quantity" @input="updateTotalPrice"/>
        <button type="button" @click="add">+</button> 
    
    </div>
</template>

<style>
.card{
    border: 1px solid #444444;
    text-align: start;
}
.card button {
    border-radius: 20px;
    background-color: #f0d6d6;
    width: 15px;
}
.card input{
    margin-left: 10px;
    margin-right: 10px;
}
</style>