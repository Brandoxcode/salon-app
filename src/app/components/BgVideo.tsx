import Welcome from "./Welcome"

const bgVideo = () => {
    return (
        <>
            <main>
                <div className="w-full h-screen overflow-hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover -z-[1] safari-fix"
                        src='/videos/bg.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false} />
                </div>
            </main>
        </>
    )
}

export default bgVideo