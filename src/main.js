import { createApp } from 'vue'
import App from './App.vue'
import YBRequest from './service/index'

createApp(App).mount('#app')

YBRequest.request({
    url: "/lyric?id=500665346"
}).then(res => {
    console.log("res:", res);
})

YBRequest.get({
    url: "/lyric",
    params: {
        id: 500665346
    }
}).then(res => {
    console.log("res:", res);
})

