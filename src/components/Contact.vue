<template>
  <div @click="checkModal" class="fixed z-[10] top-10 left-0 bottom-0 right-0 bg-gradient-to-b from-slate-500" ref="modalWrap">
    <div class="">
      <div class="flex justify-center items-center">
        <div class="w-full px-2 py-2 rounded-md transition-all md:px-2 md:w-[400px]">
          <div class="t1 relative w-full rounded-lg bg-zinc-700">
            <div class="py-6">
              <h1 class="text-lg font-semibold">Rebel Base</h1>
              <p class="font-medium text-sm md:text-base">
                Bringing your ideas to life through technology.
              </p>
            </div>
            <div
              class="w-[50px] h-[50px] absolute top-0 left-[170px] rounded-full border-4 border-transparent translate-y-[-50%]"
            >
              <img
                src="../assets/logos/RB (3).png"
                class="w-full h-full object-center object-cover rounded-full"
                alt=""
              />
            </div>
          </div>
          <div class="w-full flex flex-col gap-2 mt-2 rounded-lg">
            <div class="c1 transition-all bg-slate-900 rounded-md flex gap-3 items-center ">
              <span class="bg-stone-900 py-2 lg:py-4 px-3 rounded-l-md"><i class="fa-regular fa-envelope text-4xl"></i></span>
              <a class="text-lg md:text-2xl flex-1 text-left font-semibold py-2 lg:py-4 px-2" href="mailto:rebelbase00@gmail.com" target="_blank">Rebelbase00@gmail.com</a>
            </div>
            <div class="c1 transition-all bg-slate-900 rounded-md flex gap-4 items-center">
                <span class="bg-stone-900 py-2 lg:py-4 px-3 rounded-l-md">
                    <i class="fa-solid fa-phone text-4xl"></i>
                </span>
                <a class="text-lg md:text-2xl flex-1 text-left font-semibold py-2 lg:py-4 px-2" href="tel:rebelbase00@gmail.com" target="_blank">
                    +233 570005737
                </a>
            </div>
            <div class="c1 transition-all bg-slate-900 rounded-md flex gap-4 items-center">
                <span class="bg-stone-900 py-2 lg:py-4 px-3 rounded-l-md">
                    <i class="fa-brands fa-twitter text-4xl"></i>
                </span>
                <a class="text-lg md:text-2xl flex-1 text-left font-semibold py-2 lg:py-4 px-2" href="https://twitter.com/RebelBase0" target="_blank">
                    Rebel Base
                </a>
            </div>
          </div>
          <div class="c1 mt-3">
            <span @click="updateModal" class="px-4 py-2 cursor-pointer border-none bg-red-600 rounded-md font-semibold">Close</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Contact",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["updateModal"]),
    checkModal(e) {
      if (e.target == this.$refs.modalWrap) {
        this.updateModal();
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
.c1{
    transform: scale(0);
    animation: contact 1200ms ease-in forwards;
    font-family: 'Roboto', sans-serif;
}

.t1{
  font-family: 'Roboto', sans-serif;
}

.c1:nth-child(2){
    animation-delay: 100ms;
}
.c1:nth-child(3){
    animation-delay: 200ms;
}
.c1:nth-child(4){
    animation-delay: 300ms;
}

@keyframes contact {
    to{
        transform: scale(1)
    }
}
</style>
