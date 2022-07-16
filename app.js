const app = {
    data() {
        return {
            name: 'Maria',
            lastName: 'Brito - Especialista',
            product: {
                title: 'Adesivo1',
                description: 'Adesivos coloridos',
                Image: './assets/image/adesivo1.jpg',
            },
            product02: {
                title: 'Adesivo2',
                description: 'Adesivos coloridos',
                Image: './assets/image/adesivo2.jpg',
            }
        }
    }
}
Vue.createApp(app).mount('#app')   