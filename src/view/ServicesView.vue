<template>
    <div class="">
        <div class="">
            <div class="bg-yellow-400 dark:bg-stone-700 py-5 grid xl:grid-cols-2">
                <div class="text-black dark:text-white">
                    <!-- <h1 class="text-lg font-semibold">Our vow..</h1> -->
                    <article class="px-8 text-lg font-semibold py-5 break-words text-left">
                        Looking for a reliable partner to bring your digital ideas to life? Look no further than our company, the experts in web development, mobile development, UI/UX, and web maintenance. With years of experience and a team of skilled professionals, we deliver top-quality solutions that meet your unique business needs. From initial concept to final delivery, we work closely with you every step of the way to ensure your satisfaction. Trust us to bring your digital vision to reality and keep your online presence up-to-date and running smoothly.
                    </article>
                </div>
                <div class="">
                    <div class="w-full rounded-lg overflow-hidden px-1 md:px-2 lg:px-0 lg:pr-4 py-2 ">
                        <img src="../assets/emp/IMG0134.jpg" class=" hover:scale-105 transition duration-200 md:block object-contain md:object-cover rounded-lg md:h-[550px] xl:h-[350px] w-full" srcset="../assets/emp/IMG0140.jpg 375w, ../assets/emp/IMG0130.jpg 1000w" sizes="(max-width: 480px) 80vw, 90vw" alt="" loading="eager">
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