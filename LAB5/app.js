const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: ''
        }
    },
    methods: {
        submitForm(ev) {
            ev.preventDefault()
            alert('已經提交了~~~')
        },
        submitForm2() {
            alert('還是提交了')
        },
        setToDo(event, message) {
            this.todo = `${message} ${event.target.value}`
        },
        increase1() {
            this.counter1 += 1;
        },
        decrease1() {
            this.counter1 -= 1;
        },
        increase2(step) {
            this.counter1 += step;
        },
        decrease2(step) {
            this.counter1 -= step;
        }
    }
})
app.mount("#app1")