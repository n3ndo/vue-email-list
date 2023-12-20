const { createApp } = Vue;

    createApp({
        data() {
            return {
                emails: [],
            }
        },
        methods: {
            getRandomEmail() {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                })
            },
            get10RandomEmail() {
                for (let i = 0; i < 10; i++) {
                    this.getRandomEmail();
                }
            }
        },
        mounted() {
            this.get10RandomEmail();
            console.log(this.emails);
        },
    }).mount('#app');