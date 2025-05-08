Vue.createApp({
    data(){
        return{
            count: 0
        }
    },
    methods: {
        add(){
            this.count++
        },
        minus(){
            this.count--
        }
    }
}).mount('#app')