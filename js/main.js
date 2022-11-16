const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
        }
    },
    methods:{
        copyText: function(i) {
            navigator.clipboard.writeText(this.emailList[i])
        }
    },
    created(){
        for(let i=1; i<=10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                if(!this.emailList.includes(response.data.response)){
                    this.emailList.push(response.data.response)
                }
            });
        }
    }
}).mount('#app')

