import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './import-style.ts'
import { Button, message, Menu } from 'ant-design-vue'
// const app = createApp(App)
// import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import './styles/index.css'

const app = createApp(App)

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button)
app.use(Menu)

// app.use(Antd)

app.use(store)
app.use(router)
app.mount('#app')

app.config.globalProperties.$message = message
