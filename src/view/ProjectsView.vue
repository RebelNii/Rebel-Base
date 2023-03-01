<template>
    <div class="">
        <div class="px-3 my-4">
            <div class="bg-white grid md:grid-cols-2 py-2">
                <div class="text-black flex flex-col justify-center items-center">
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
            <div class="grid xl:grid-cols-2 gap-4 place-items-center mt-3">
                <div class="w-full flex flex-col items-center rounded-t-lg">
                    <img src="../assets/projects/rebelbase1.png" alt="" class="w- h-full object-contain object-center rounded-t-lg">
                    <h1 class="mt-4 text-2xl font-semibold">
                        Ron & Friends
                    </h1>
                    <p class="text-left break-words text-lg px-2 mt-1">
                        A employee and task management web application build for a mechanic enterprise. This web application was built with vueJS on the front-end, tailwindcss, nodeJS/ExpressJs on the back-end and MongoDB as the database host.
                    </p>
                </div>
                <div class="w-full flex flex-col items-center rounded-t-lg">
                    <img src="../assets/projects/rebelbase2.png" alt="" class="w- h-full object-contain object-center rounded-t-lg">
                    <h1 class="mt-4 text-2xl font-semibold">
                        Blue Pin
                    </h1>
                    <p class="text-left break-words text-lg px-2 mt-1">
                        A Geolocation web application built on vue.Js, tailwindcss, leaflet.JS, mapbox maps. This web app allows users to pin the location of any IP address entered.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'projects',
    data(){
        return{}
    },
    methods:{},
    components:{}
}
</script>

<style>
</style>