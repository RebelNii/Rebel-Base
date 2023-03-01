<template>
  <div class="w-full container-fluid mx-auto text-white text-center">
    <div class="w-full flex flex-col">
      <div class="w-full nav border-b-2 border-zinc-900">
        <Nav />
      </div>
      <div class="py-2 w-full">
        <router-view class="router-view" v-slot="{Component}">
          <Transition name="opacity-vue" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
      </div>
      <div class=" w-full mt-auto">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav.vue";
import Footer from "./components/Footer/Footer.vue";
import Contact from './components/Contact.vue';
import {mapState} from 'vuex';

export default {
  name: "App",
  data(){
    return{
      
    }
  },
  components: {
    Nav, Contact,Footer
  },
  methods:{
    
  },
  computed:{
    ...mapState(['modal'])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
  /* background-color: black; */
  font-family: "Raleway", sans-serif;
}
html {
  /* Firefox */
  /* scrollbar-width: none; */
  scrollbar-width: auto;
  /* Edge */
  -ms-overflow-style: none;
}
/* Safari & chrome */
.html::-webkit-scrollbar {
    /* display: none; */
    border-radius: 10px;
}

#app {
  width: 100vw;
  min-height: 100vh;
  overflow-y:scroll;
  overflow-x: hidden;
  /* Firefox */
  /* scrollbar-width: none; */
  /* Edge */
  /* -ms-overflow-style: none; */
}

.opacity-vue-enter-active,
.opacity-vue-leave-active{
  transition: 600ms ease all;
}

.opacity-vue-enter-from,
.opacity-vue-leave-to{
  opacity: 0;
  transform: translateY(60px);
}

.mdNav a.router-link-exact-active {
  color: #fff;
  border-bottom: 5px solid white;
  border-radius: 5px;
}
</style>
