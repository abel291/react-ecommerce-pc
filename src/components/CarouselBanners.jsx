import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

const CarouselBanners = ({ images, path="" }) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={{
                    nextEl: ".button-next-banner",
                    prevEl: ".button-prev-banner",
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.img}>
                        <img
                            className="h-full mx-auto w-full object-cover overflow-hidden rounded md:rounded-xl"
                            src={path + image.img}
                            alt={image.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex items-center w-full absolute top-2/4 z-10 ">
                <button
                    aria-label="prev-button"
                    className="absolute button-next-banner  h-14 w-10 md:h-20 md:w-14 text-black flex items-center justify-center rounded-md text-gray-0 bg-white transition duration-250 hover:bg-orange-400 hover:text-white focus:outline-none start-0 transform shadow-md -translate-x-1/4 lg:-translate-x-1/2"
                >
                    <ChevronLeftIcon className="h-4 w-4 md:h-7 md:w-7" />
                </button>
                <button
                    aria-label="next-button"
                    className="absolute right-0 button-prev-banner  h-14 w-10 md:h-20 md:w-14 text-black flex items-center justify-center rounded-md bg-white transition duration-250 hover:bg-orange-400 hover:text-white focus:outline-none end-0 transform shadow-md translate-x-1/4  lg:translate-x-1/2"
                >
                    <ChevronRightIcon className="h-4 w-4 md:h-7 md:w-7" />
                </button>
            </div>
        </div>
    )
}

export default CarouselBanners
