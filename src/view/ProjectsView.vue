<template>
    <div class="">
        <div class=" my-4">
            <div class="bg-white bg-yellow-300 dark:bg-stone-700 grid md:grid-cols-2 py-2">
                <div class="text-black dark:text-white flex flex-col justify-center items-center">
                    <div class="">
                        <h1 class="text-2xl lg:text-2xl font-semibold uppercase">Rebel Base</h1>
                        <p class="text-lg text-left break-words px-3 mt-2">
                            We specialize in developing custom web and mobile applications tailored to your unique business needs. Our experienced team of developers, designers, project managers, and marketers work closely with you to create an intuitive and engaging user experience. From simple landing pages to complex e-commerce solutions, we deliver high-quality applications that drive business growth and maximize customer engagement. Let us help you bring your mobile app vision to life.
                        </p>
                    </div>
                </div>
                <div class=" py-1 ">
                    <img src="../assets/emp/tech-boy.png" alt="" class="w-full h-[430px] object-contain object-right">
                </div>
            </div>
            <div class="grid xl:grid-cols-2 px-3 gap-4 place-items-center mt-3">
                <div class="text-black dark:text-white w-full flex flex-col items-center rounded-t-lg">
                    <img src="../assets/projects/rebelbase1.png" alt="" class="w- h-full object-contain object-center rounded-t-lg">
                    <h1 class="mt-4 text-2xl font-semibold">
                        Ron & Friends
                    </h1>
                    <p class="text-left break-words text-lg px-2 mt-1">
                        A employee and task management web application build for a mechanic enterprise. This web application was built with vueJS on the front-end, tailwindcss, nodeJS/ExpressJs on the back-end and MongoDB as the database host.
                    </p>
                    <a href="" class="w-full px-3 rounded py-1 bg-yellow-400 text-center" target="_blank">View</a>
                </div>
                <div class="w-full text-black dark:text-white flex flex-col items-center rounded-t-lg">
                    <img src="../assets/projects/rebelbase2.png" alt="" class="w- h-full object-contain object-center rounded-t-lg">
                    <h1 class="mt-4 text-2xl font-semibold">
                        Blue Pin
                    </h1>
                    <p class="text-left break-words text-lg px-2 mt-1">
                        A Geolocation web application built on vue.Js, tailwindcss, leaflet.JS, mapbox maps. This web app allows users to pin the location of any IP address entered.
                    </p>
                    <a href="https://geolocation-app-neon.vercel.app/" class="w-full px-3 rounded py-1 mt-1 bg-yellow-400 text-center" target="_blank">View</a>
                </div>
            </div>
            <div class="w-full h-full mt-3 text-black dark:text-white flex flex-col space-4 rounded-t-lg px-3">
                <div class="w-full rounded-t-lg">
                    <Swiper class=" w-full rounded-t-lg" :modules="modules" :loop="true" :slidesPerView="1" :autoplay="{delay: 2500, disableOnInteraction: false,}" :pagination="{clickable:true}">
                        <SwiperSlide>
                            <img src="/src/assets/projects/inv1.png" class="rounded-t-lg h-full w-full object-contain object-center" >
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../assets/projects/inv2.png" class="rounded-t-lg h-full w-full object-contain object-center" alt="" >
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../assets/projects/inv3.png" class="rounded-t-lg h-full w-full object-contain object-center" alt="" >
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../assets/projects/inv4.png" class="rounded-t-lg h-full w-full object-contain object-center" alt="" >
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../assets/projects/inv5.png" class="rounded-t-lg h-full w-full object-contain object-center" alt="" >
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h1 class="mt-4 text-2xl font-semibold">
                    Invoice App
                </h1>
                <p class="text-center break-words text-sm px-2 lg:px-36 mt-1">
                    An Invoice web application built on vue.Js, tailwindcss, Laravel api, mysql database. An invoice web app can help you keep track of your payments and outstanding balances, automate reminders to clients about overdue payments, and generate reports that give you a better understanding of your business's financial health.

                    By implementing an invoice web app, you can save time and money, reduce errors, improve your cash flow, and enhance your overall customer service. In today's digital age, an invoice web app is an indispensable tool that no modern business should be without.
                </p>
                <a href="https://github.com/RebelNii/Vue-Invoice-app" class="px-3 rounded py-1 bg-yellow-400 mt-1 text-center" target="_blank">View</a>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import 'swiper/css/pagination';
import {Autoplay, FreeMode, Pagination } from 'swiper';
export default{
    name: 'projects',
    data(){
        return{
            modules: [Autoplay,FreeMode, Pagination]
        }
    },
    methods:{},
    components:{Swiper, SwiperSlide}
}
</script>

<style scoped>

.swiper{
    height: 300px;
    width: 100%;
}
/* overflow: visible; */

/* .swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
} */
</style>