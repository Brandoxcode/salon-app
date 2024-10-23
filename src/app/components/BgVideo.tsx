import Welcome from "./Welcome"

const bgVideo = () => {
    return (
        <>
            <main>
                <div className="w-full h-screen overflow-hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
                        src='/videos/bg.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false} />
                    <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
                        <Welcome />
                    </div>
                </div>
            </main>
        </>
    )
}

export default bgVideo