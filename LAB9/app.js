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
app.component("course-content", {
    template: `
    <li>
    <h2>{{c.id}}</h2>
    <button @click="toggleCourseDetail">show details</button>
    <ul v-if="detailsVisible">
        <li>{{c.name}}</li>
        <li>{{c.duration}}</li>
    </ul>
    </li>

    `,
    data() {
        return {
            detailsVisible: true,
            c: { id: "POOP", name: "Python OOP", duration: 35 }
        }
    },
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible;
        }
    }

})
app.mount('#app')