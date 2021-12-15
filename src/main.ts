import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Menu, Pagination, Tabs, Form, Input } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import './styles/index.css'

const app = createApp(App)

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button)
app.use(Menu)
app.use(Pagination)
app.use(Tabs)
app.use(Form)
app.use(Input)

app.use(store)
app.use(router)
app.mount('#app')
