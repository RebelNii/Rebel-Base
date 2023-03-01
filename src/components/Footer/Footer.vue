<template>
    <div class="">
        <div class="w-full container mx-auto px-3">
            <div class="w-full bg-slate-900 rounded-t-md  flex flex-col md:flex-row justify-center gap-y-5 py-4 px-2">
                <div class="w-full">
                    <h1 class="text-2xl font-bold">Rebel <span>Base</span></h1>
                    <div class="">
                        <p class="px-4 py-2 break-words">
                            Transform your digital vision into reality with our expert team of web developers, mobile app developers, and UI/UX designers who specialize in delivering top-notch solutions and maintenance services to enhance your online presence.
                        </p>
                    </div>
                    <div class="flex flex-col gap-y-3">
                        <h1 class="text-lg font-bold">Follow US.</h1>
                        <div class="flex justify-center items-center gap-5">
                            <a href="mailto:rebelbase00@gmail.com" class="overflow-hidden">
                            <i class="fa-solid hover:scale-110 transition-all fa-envelope text-white text-3xl"></i>
                        </a>
                        <a href="https://twitter.com/RebelBase0" class="overflow-hidden">
                            <i class="fa-brands fa-twitter hover:scale-110 transition-all text-blue-700 text-3xl"></i>
                        </a>
                        <a href="https://www.youtube.com/@RebelBase596" class="overflow-hidden" target="_blank">
                            <i class="fa-brands fa-square-youtube hover:scale-105 transition-all text-red-700 text-3xl"></i>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-evenly flex-col md:flex-row gap-3">
                    <div class="">
                        <h1 class="f1 tracking-wide text-lg font-bold uppercase mb-5">Learn</h1>
                        <ul class="flex cursor-pointer md:flex-col flex-row flex-wrap gap-2 justify-evenly lg:text-gray-600/50">
                            <li class="transition-all hover:text-white">Web apps</li>
                            <li class="transition-all hover:text-white">Mobile apps</li>
                            <li class="transition-all hover:text-white">UI/UX</li>
                            <li class="transition-all hover:text-white">APIs</li>
                            <li class="transition-all hover:text-white">Desktop apps</li>
                        </ul>
                    </div>
                    <div class="">
                        <h1 class="f1 tracking-wide text-lg font-bold uppercase mb-5">Services</h1>
                        <ul class="flex cursor-pointer md:flex-col flex-row flex-wrap gap-2 justify-evenly lg:text-gray-600/50">
                            <li class="transition-all hover:text-white">Web apps</li>
                            <li class="transition-all hover:text-white">Mobile apps</li>
                            <li class="transition-all hover:text-white">UI/UX</li>
                            <li class="transition-all hover:text-white">Api design</li>
                            <li class="transition-all hover:text-white">Desktop apps</li>
                        </ul>
                    </div>
                    <div class="">
                        <h1 class="f1 tracking-wide text-lg font-bold uppercase mb-5">Tools</h1>
                        <ul class="flex cursor-pointer md:flex-col flex-row flex-wrap gap-2 justify-evenly lg:text-gray-600/50">
                            <li class="transition-all hover:text-white">Laravel</li>
                            <li class="transition-all hover:text-white">VueJS</li>
                            <li class="transition-all hover:text-white">ReactJS</li>
                            <li class="transition-all hover:text-white">ElectronJS</li>
                            <li class="transition-all hover:text-white">Ionic-Vue</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full bg-slate-900 px-2 py-2">
                <p>&copy Rebel Base <span id="year"></span>.&nbsp; All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Footer',
        components:{},
        methods:{
            rights(){
                const year = document.getElementById('year');
                // console.log(year)
                return year.textContent = new Date().getFullYear();
            }
        },
        mounted(){
            this.rights();
        }
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");

.f1 {
  font-family: "Raleway", sans-serif;
}
</style>