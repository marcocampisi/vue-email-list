const { createApp } = Vue;

createApp({
    data() {
        return{
            mailArray : []
        }
    },
    methods: {
        generateMails() {
            this.mailArray = [];

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data;
                    this.mailArray.push(result.response);
                });
            }

            if (this.mailArray.length > 10) {
                this.mailArray.splice(0, this.mailArray.length - 10);
            }
        }
    }
}).mount('#app');