import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import persian from './persian.json'

Vue.use(Vuei18n)

export const i18n = new Vuei18n({
    locale: 'fa',
    messages: {
        "fa": persian,
    }
})
