const { createApp } = Vue

createApp({
    data() {
        return {
            emailList: [],
            copyMessage: 'Text copied successfully!',
            newObjEmail: class {
                constructor(text, clicked){
                    this.text = text;
                    this.clicked = clicked;
                }
            }
        }
    },
    methods:{
        copyText: function(element) {
            navigator.clipboard.writeText(element.text)
            element.clicked = true;
            setInterval(function(){
                element.clicked = false;
            }, 1500)
        }
    },
    created(){
        for(let i=1; i<=10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // if(!this.emailList.includes(response.data.response)){
                //     this.emailList.push(response.data.response)
                // }
                const cratedObj = new this.newObjEmail(response.data.response, false);
                this.emailList.push(cratedObj)

            });
        }
    }
}).mount('#app')

