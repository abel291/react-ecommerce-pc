import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import "swiper/swiper-bundle.css"

import ListCardProducts from "../../components/ListCardProducts"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
SwiperCore.use([Autoplay, Navigation])
const CarouselProduct = ({ products }) => {
    return (
        <div>
            <h3 className="text-2xl font-bold mb-3">Productos relacionados</h3>
            <div className=" py-2 relative">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.4}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl: ".button-next-marcas",
                        prevEl: ".button-prev-marcas",
                    }}
                    autoplay={{
                        delay: 5000,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ListCardProducts product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex items-center w-full absolute top-2/4 z-10 ">
                    <button
                        aria-label="prev-button"
                        className=" absolute button-next-marcas -mt-2 md:-mt-2 w-10 h-10  lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full text-gray-0 bg-white transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none start-0 transform shadow-md  -translate-x-1/4 lg:-translate-x-1/2 "
                    >
                        <ChevronLeftIcon className="h-6 w-6 lg:h-4 lg:w-4" />
                    </button>
                    <button
                        aria-label="next-button"
                        className=" absolute right-0 button-prev-marcas -mt-2 md:-mt-2 w-10 h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full bg-white transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none end-0 transform shadow-md translate-x-1/4 lg:translate-x-1/2 "
                    >
                        <ChevronRightIcon className="h-6 w-6 lg:h-4 lg:w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarouselProduct
