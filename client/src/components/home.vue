<template>
    <div>
        <h1 >{{kuy}}</h1>
        tad
        <input type="text" id = "inn" v-model="tad">
        kuy
        <input type="text" id = "inn" v-model="kuy">
        <button v-on:click="yed(tad,kuy)"> Fuck! </button>
    </div>
</template>
<script>
import FuckService from '../Fuckservice'
export default {
    name: 'home',
    data() {
        return{tad: String,kuy:String}
    },
    methods: {
        yed:async function(t,k){
            let data = {
                text:t,
                ku : k
            }
            alert('in '+t)

            await FuckService.postfuck(data)
            let s =await FuckService.getfuck()
            alert(s)
            this.kuy=s;
        }
    }
};
</script>
