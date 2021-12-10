import { createApp } from 'vue'
// import { Button, message } from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
const app = createApp(App)

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
// app.use(Button)
app.use(Antd)
// app.config.globalProperties.$message = message
