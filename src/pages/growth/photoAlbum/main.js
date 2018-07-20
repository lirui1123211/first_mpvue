import Vue from 'vue'
import App from './photoAlbum'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '照片墙'
  }
}
