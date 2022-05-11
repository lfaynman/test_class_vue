const app = Vue.createApp({
    data() {
        return {
            div1Selected: false,
            div2Selected: false,
            div3Selected: false
        }
    },
    methods: {
        divSelected(id) {
            console.log(`id=${id}被選取了!`)
            if (id === 1) {
                this.div1Selected = !this.div1Selected
            } else if (id === 2) {
                this.div2Selected = !this.div2Selected
            } else if (id === 3) {
                this.div3Selected = !this.div3Selected
            }
        }
    },
    computed:{
        div1Classes(){
            return {is1Selected:this.div1Selected}
        },
        div2Classes(){
            return {is1Selected:this.div1Selected}
        },
        div3Classes(){
            return {is1Selected:this.div1Selected}
        }
    }
})
app.mount("#myapp")