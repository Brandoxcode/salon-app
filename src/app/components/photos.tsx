'use client'
import Image from "next/image";
import list from "../../../utils/galleryList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/bundle'

const photos = () => {
    return (
        <section className="py-72 mt-14 lg:max-xl:py-96">
            <div className="container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="h-96 w-full rounded-md"
                >
                    {list.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center">
                                <Image
                                    width={500}
                                    height={300}
                                    alt='prueba'
                                    className="block h-full object-cover rounded-md"
                                    src={item.img}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default photos