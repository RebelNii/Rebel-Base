<template>
  <div class="">
    <div class="">
      <div class="bg-yellow-300 dark:bg-slate-800 transition duration-200 grid gap-3 xl:grid-cols-2 pb-2">
        <div class="md:px-10 md:py-10 lg:px-18 lg:py-20">
          <div class="px-12 text-black dark:text-white py-12 text-left">
            <h1 class="header text-lg md:text-3xl font-bold">
              Building digital dreams, one line of code at a time.
            </h1>
            <p class="pp text-sm mt-1 md:text-base font-medium">
              Bringing your ideas to life, through technology.
            </p>
             <button @click="updateModal" class="ctn relative bg-green-600 p-1 md:py-2 md:px-4 rounded-lg mt-2 text-white text-sm md:text-lg font-semibold">
                Let's Talk.
                <span class="animate-ping absolute h-4 w-4 translate-y-[-50%] bg-blue-600 rounded-full top-0 right-0 opacity-75"></span>
             </button>
          </div>
        </div>
        <div class="anime flex justify-center items-center px-1 md:px-3">
          <img
            src="../assets/emp/a2.png"
            alt="" loading="eager" srcset="/src/assets/emp/a2.png 1000w, /src/assets/emp/a2s.png 379w,/src/assets/emp/a2mm.png 790w" sizes="(max-width: 480px) 80vw, 90vw"
            class="w-full h-[350px] object-center object-contain md:object-cover rounded md:rounded-lg"
          />
        </div>
      </div>
      <Serve />
      <!-- <MiniServices /> -->
      <Banner />
      <MiniBanner />
    </div>
  </div>
</template>

<script>
import MiniServices from '../components/Home/MiniServices.vue'
import Banner from '../components/Banner.vue';
import MiniBanner from '../components/MiniBanner.vue';
import Serve from '../components/Serve.vue'
import { mapState, mapMutations } from 'vuex';
export default {
  name: "Home",
  data() {
    return {
      anime: true,
    };
  },
  components: { MiniServices, Banner,MiniBanner, Serve},
  methods:{
    toggleModal(){
      this.modal = !this.modal
    },
    ...mapMutations(['updateModal'])
  },
  computed:{
    ...mapState(['modal']),
    
  },
  created() {},
  mounted() {
    // this.animes();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

.header {
  font-family: "Raleway", sans-serif;
}
.pp, .ctn {
  font-family: "Roboto", sans-serif;
}
/* .anime{
    position: relative;
    animation: an1 3s forwards;
}

@keyframes an1 {
    0%{right: -50%}
    100%{right: 0;}
} */
</style>
