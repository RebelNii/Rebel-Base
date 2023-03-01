<template>
    <div class="md:px-4 hidden md:block">
        <div class="container mx-auto bg-white dark:bg-gray-400 rounded-md mb-2 ">
            <div class="">
                <Swiper :modules="modules" :loop="true" :navigation="false" :slidesPerView="3" :pagination="{clickable:true}" :spaceBetween="30" :centeredSlides="true" :autoplay="{delay: 2500, disableOnInteraction: false,}" :freeMode="true">
                    <SwiperSlide v-for="photo in this.photos">
                        <img :src="`src/assets/Banners/${photo}`" loading="eager" alt="Rebel Base">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>


<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, FreeMode, Pagination, Navigation } from 'swiper';
import { mapState } from 'vuex';
export default{
    name: 'Banner',
    data(){
        return{
            modules: [Autoplay,FreeMode, Pagination, Navigation]
        }
    },
    components:{Swiper,SwiperSlide},
    methods:{},
    computed:{
        ...mapState(['photos'])
    }
}
</script>

<style scoped>

.swiper{
    height: 300px;
    width: 600px;
    /* overflow: visible; */
}

.swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}
</style>