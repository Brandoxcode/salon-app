'use client'
import Image from "next/image";
import list from "../../../utils/galleryList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const photos = () => {
    return (
        <section className="py-96">
            <div className="container">
                <Swiper
                    loop={true}
                    navigation
                    pagination={{ type: 'fraction' }}
                    modules={[Navigation, Pagination]}
                    className="h-96 w-full rounded-md"
                >
                    {list.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex h-full w-full items-center justify-center">
                                <Image
                                    width={500}
                                    height={900}
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