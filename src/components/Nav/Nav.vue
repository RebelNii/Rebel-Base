<template>
  <div class="">
    <Transition name="con" mode="out-in">
      <Contact v-if="modal" />
    </Transition>
    <div class="bbb transition duration-200 fixed right-0 left-0 bg-gray-800 z-10 w-full container-fluid">
      <div class="flex justify-end pr-4 py-1 items-center space-x-2">
        <span class="text-sm md:text-base">Light</span>
        <label @click="toggleDarkMode" for="toggle" class="h-3 w-6 md:h-5 md:w-9 rounded-full bg-white flex items-center cursor-pointer duration-300">
          <div class="h-2 w-3 ml-[1px] md:h-4 md:w-4 rounded-full bg-gray-400 transform duration-300 ease-in-out dark:translate-x-3 md:dark:translate-x-4"></div>
        </label>
        <span class="text-sm md:text-base">Dark</span>
      </div>
      <div class=" container-fluid mx-auto w-full gap-x-2 flex justify-between items-center">
        <div class="flex items-center gap-x-2 px-3 ">
          <img
            src="../../assets/fav/favicon-32x32.png"
            alt=""
            class="w-[40px] md:w-[60px] rounded-full object-center object-cover md:hidden"
          />
          <h1 class="hidden md:block text-3xl font-bold text-yellow-700">
            <a href="/"> Rebel <span class="text-indigo-500">Base</span> </a>
          </h1>
        </div>
        <div
          class="hidden mdNav md:flex flex-1 justify-end items-center gap-x-4 px-1"
        >
          <router-link
            :to="{ name: 'Home' }"
            class="md:p-2 text-sm md:text-lg text-gray-600 hover:text-white font-bold"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'Services' }"
            class="md:p-2 text-sm md:text-lg text-gray-600 hover:text-white font-bold"
            >Services</router-link
          >
          <router-link
            :to="{ name: 'Projects' }"
            class="md:p-2 text-sm md:text-lg text-gray-600 hover:text-white font-bold"
            >Projects</router-link
          >
          <button
            @click="updateModal"
            class="md:p-2 text-sm md:text-lg text-gray-600 hover:text-white font-bold"
          >
            Contact
          </button>
          
        </div>
        <div class="md:hidden pr-2 relative">
          <svg
          @click="updateMiniNav"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="wes w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          </svg>
        </div>
      </div>
      <div class="md:hidden pr-2 relative">
        <svg
          @click="updateMiniNav"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="hidden wes w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div
          v-if="miniNav"
          class="fixed miniNav transition-all animate-slide top-0 right-0 left-0 z-[100] bottom-0 bg-slate-900"
        >
          <div class="w-full flex flex-col">
            <div class="flex justify-end py-2 pr-1">
              <svg
                @click="updateMiniNav"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="sew w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="flex flex-col gap-y-4 w-full mt-6 py-5">
              <router-link
                :to="{ name: 'Home' }"
                class="text-2xl font-semibold py-2 "
              >
                <h1>Home</h1>
                <p class="text-xs text-gray-500">
                  //Home is where the heart is.
                </p>
              </router-link>
              <router-link
                :to="{ name: 'Services' }"
                class="text-2xl font-semibold py-2 "
              >
                <h1>Services</h1>
                <p class="text-xs text-gray-500">//What we have to offer.</p>
              </router-link>
              <router-link
                :to="{ name: 'Projects' }"
                class="text-2xl font-semibold py-2 "
              >
                <h1>Projects</h1>
                <p class="text-xs text-gray-500">//Our handiwork.</p>
              </router-link>
              <button @click="mobileNav" class="text-2xl font-semibold py-2 ">
                <h1>Contact</h1>
                <p class="text-xs text-gray-500">//Let's have a chat</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Contact from "../Contact.vue";
export default {
  name: "Nav",
  components: { Contact },
  methods: {
    ...mapMutations(["updateModal", "updateMiniNav","toggleDarkMode"]),
    mobileNav(){
      this.updateMiniNav();
      this.updateModal()
    },

    
  },
  computed: {
    ...mapState(["modal", "miniNav"]),
  },
  mounted(){

  }
};
</script>

<style>
.con-enter-active,
.con-leave-active{
  transition: 2s ease all;
}

.con-enter-from,
.con-leave-to{
  opacity: 0;
  transform: translateY(60px);
}
</style>
