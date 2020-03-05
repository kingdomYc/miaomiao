import Vue from 'vue'
import MsgBox from './MsgBox/index.vue'

export const msgBox = (() => {
    const defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: function(){
            //console.log(123)
        },
        handleOk: function(){
            //console.log(123)
        }
    }

    const MyComponent = Vue.extend(MsgBox)

    return (opts) => {
        for(const attr in opts){
            defaults[attr] = opts[attr]
        }

        const vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel(){
                    //if(defaults.handleCancel != null){
                        defaults.handleCancel &&  defaults.handleCancel.call(this)
                        document.body.removeChild( vm.$el )
                    //}                   
                },
                handleOk(){
                    //if(defaults.handleOk != null){
                        defaults.handleOk && defaults.handleOk.call(this)
                        document.body.removeChild( vm.$el )
                    //}
                }
            }
        });

        document.body.appendChild( vm.$el )
    }
})()