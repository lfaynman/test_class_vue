const app = Vue.createApp({
    data() {
        return {
            courses: [{ id: "POOP", name: "Python OOP", duration: 35 },
            { id: "BDPY", name: "Pythone and Big Data", duration: 35 }],
            detailsVisible: true
        }
    },
    computed: {},
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
})

app.mount('#app')