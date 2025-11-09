// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


app.directive('img-lazy', {
    mounted(el, binding) {
        // el：指令绑定的元素
        // binding：binding.value 指令=后面绑定的表达式的值-》图片的url
        console.log(el, binding.value)
        // el.src = binding.value
        useIntersectionObserver(
            el, 
            ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if(isIntersecting) {
                    el.src = binding.value
                }
            }
        )
    }
})