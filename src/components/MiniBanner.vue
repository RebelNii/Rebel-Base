<template>
    <div class="md:px-4 md:hidden">
        <div class="container mx-auto bg-white rounded-md mb-2">
            <div class="">
                <!-- <Swiper :modules="modules" :loop="true" :slidesPerView="1" :autoplay="{delay: 2500, disableOnInteraction: false,}" :pagination="{clickable:true}">
                    <SwiperSlide v-for="(photo, index) in this.photos" :key="index">
                        <img :src="`/src/assets/Banners/${photo}`" alt="Rebel Base">
                    </SwiperSlide>
                </Swiper> -->
                <Swiper :modules="modules" :loop="true" :slidesPerView="1" :autoplay="{delay: 2500, disableOnInteraction: false,}" :pagination="{clickable:true}">
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b1.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b2.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b3.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b4.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b5.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b6.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b7.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b8.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b9.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b10.png" alt="Rebel Base">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/Banners/b11.png" alt="Rebel Base">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {FreeMode, Autoplay, Pagination} from 'swiper';
import { mapState } from 'vuex';
export default{
    name: "mini-Banner",
    data(){
        return{
            modules: [FreeMode, Autoplay, Pagination]
        }
    },
    components:{Swiper, SwiperSlide},
    computed:{...mapState(['photos'])}
}
</script>

<style scoped>
.swiper{
    height: 300px;
    width: 100%;
    /* overflow: visible; */
}

.swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}
</style>