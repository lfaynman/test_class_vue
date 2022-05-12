import { createApp } from 'vue'
import App from './App.vue'
import CourseIntro from "./components/CourseIntro.vue"
// add mitt support
import mitt from "mitt"
const emitter = mitt()
const app = createApp(App)
app.component('course-intro', CourseIntro)
app.config.globalProperties.emitter = emitter
app.mount('#app')
