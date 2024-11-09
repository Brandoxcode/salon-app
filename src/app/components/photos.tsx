'use client'
import Image from "next/image";
import list from "../../../utils/galleryList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const photos = () => {
    return (
        <>
            <section className="pt-40 pb-10 md:py-60 lg:max-xl:py-96 flex justify-center items-center h-full w-full">
                <div className="container">
                    <Swiper
                        navigation={true}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Navigation, Pagination, EffectFade]}
                        className="h-auto w-full rounded-md"
                    >
                        {list.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex items-center justify-center w-full">
                                    <Image
                                        width={500}
                                        height={500}
                                        alt='prueba'
                                        className="rounded-md"
                                        src={item.img}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default photos