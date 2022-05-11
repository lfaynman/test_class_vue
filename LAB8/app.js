const app = Vue.createApp({
    data() {
        return {
            courseContent: "",
            courses: ["vue", "blockchain", "react&full stack", "security", "android"]
        }
    },
    computed: {},
    methods: {
        addCourse() {
            this.courses.push(this.courseContent)
        },
        removeCourse(i) {
            this.courses.splice(i, 1)
        }
    }
})
app.mount("#app")