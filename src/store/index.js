import { createStore } from "vuex";
import axios from "axios";


export default createStore({
    state: {
        modal: false,
        miniNav: false,
        photos: [
            'b1.png',
            'b2.png',
            'b3.png',
            'b4.png',
            'b5.png',
            'b6.png',
            'b7.png',
            'b8.png',
            'b9.png',
            'b10.png',
            'b11.png',
        ],
        dark: false
    },
    getters: {},
    mutations:{
        updateModal(state){
            state.modal = !state.modal
        },
        updateMiniNav(state){
            state.miniNav = !state.miniNav;
            let bdy = document.getElementById('html');
            if(state.miniNav){
                bdy.classList.add('overflow-hidden')
            }else{
                bdy.classList.remove('overflow-hidden')
            }
        },

        toggleDarkMode(state){
            let bb = document.body;
            state.dark = !state.dark;
            if(state.dark){
                bb.classList.add('dark')
            }else{
                bb.classList.remove('dark')
            }
        },
    },
    actions:{},
    modules:{}
})