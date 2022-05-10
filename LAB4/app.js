const app = Vue.createApp({
    data:function(){
        return {
            primaryGoal: "Have a happy life!",
            planLink: "https://www.trello.com"
        }

    }
})
app.mount("#my-planner")