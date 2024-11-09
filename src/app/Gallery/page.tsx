import Photos from "../components/photos";
import PhotoGallery from "../components/photosGallery";


const gallery = () => {
    return (
        <>
            <div className="bg-slate-50">
                <Photos />
                <PhotoGallery />
            </div>
        </>
    );
}

export default gallery