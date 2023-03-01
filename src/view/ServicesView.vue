<template>
    <div class="">
        <div class="">
            <div class="mb-5 grid xl:grid-cols-2">
                <div class="">
                    <!-- <h1 class="text-lg font-semibold">Our vow..</h1> -->
                    <article class="px-8 text-lg py-5 break-words text-left">
                        Looking for a reliable partner to bring your digital ideas to life? Look no further than our company, the experts in web development, mobile development, UI/UX, and web maintenance. With years of experience and a team of skilled professionals, we deliver top-quality solutions that meet your unique business needs. From initial concept to final delivery, we work closely with you every step of the way to ensure your satisfaction. Trust us to bring your digital vision to reality and keep your online presence up-to-date and running smoothly.
                    </article>
                </div>
                <div class="">
                    <div class="w-full rounded-lg overflow-hidden px-1 md:px-2 lg:px-0 lg:pr-4 py-2">
                        <img src="./src/assets/emp/IMG_1034.jpg" class=" hover:scale-110  transition-all md:block object-contain md:object-cover rounded-lg md:h-[550px] xl:h-[350px] w-full" srcset="./src/assets/emp/IMG_0140.jpg 375w, ./src/assets/emp/IMG_0130.jpg 1000w" sizes="(max-width: 480px) 80vw, 90vw" alt="" loading="eager">
                        <!-- <img src="/src/assets/bg/test3.jpg" class="md:hidden object-contain rounded-lg h-[300px] w-full" alt=""> -->
                    </div>
                </div>
            </div>
            <ServicesVue />
        </div>
    </div>
</template>


<script>
import ServicesVue from '../components/Home/Services.vue';

    export default{
        name: "Services",
        data(){
            return{}
        },
        components:{ServicesVue}
    }
</script>