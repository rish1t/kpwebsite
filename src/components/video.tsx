export default function VideoPage() {
    return (
        <div className="flex w-[100%] h-[80vh] flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-[100%] h-[100%] flex items-center justify-center">
                {/* <iframe
            src="https://www.youtube.com/embed/c1nYtX-NUsc?si=-e27C6v9feBnRpzf"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe> */}
                <iframe src="https://www.youtube.com/embed/c1nYtX-NUsc?si=e1L3dyQ2nNcUPQg_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="md:w-[65%] md:h-[80%] rounded-lg shadow-lg"></iframe>
            </div>
            
        </div>
    )
}