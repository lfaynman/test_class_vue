const app = Vue.createApp({
    data() {
        return {
            issue: "",
            counter: 0
        }
    },
    methods: {

        resetIssue() {
            this.issue = "";
            this.counter=0;
        },
        increase() {
            this.counter += 1;
        }
    },
    computed: {
        outputIssue() {
            console.log(`output issue is called:${this.issue}`)
            if (this.issue === "") {
                return ""
            }
            let prefix = "!".repeat(this.counter)
            return `[${prefix}]${this.issue}`
        },
    }
})
app.mount("#myapp")