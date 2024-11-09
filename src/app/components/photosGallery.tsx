import React from 'react';
import list from "../../../utils/galleryList";

const PhotoGallery = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">Photo Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {list.map((image,) => (
                    <div key={image.id} className="overflow-hidden rounded-lg">
                        <img
                            src={image.img}
                            alt={`Photo ${image.id + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery
