import Vue from 'vue'
import App from './App.vue'


export class MfeVue extends HTMLElement {
    connectedCallback() {
        // new Vue(App).mount(this)

        new Vue(App).$mount(this)
    }
}
  
customElements.define('vue-element', MfeVue);