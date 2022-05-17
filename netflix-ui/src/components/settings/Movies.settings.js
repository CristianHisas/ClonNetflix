import { FreeMode } from "swiper";

export const SwiperProps = {
  slidesPerView: 2,
  freeMode: true,
  modules: [ FreeMode ],
  breakpoints: {
    1200: {
      slidesPerView: 7
    },
    992: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    576: {
      slidesPerView: 3
    }
  } 
}