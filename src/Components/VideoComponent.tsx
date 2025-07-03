const VideoComponent = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      <img
        src="https://kathbirali-next.vercel.app/assets/img/cta/cta-video.jpg"
        alt="Video background"
        className="object-cover w-full h-full"
      />

     
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

     
      <div className="absolute inset-0 flex items-center justify-center">
        <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
>
  <svg
    className="w-6 h-6 text-purple-600"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
</a>
      </div>

     
      <div className="absolute bottom-10 w-full text-center px-4">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 tracking-wide drop-shadow-lg">
          
        </h1>
      </div>
    </div>
  );
};

export default VideoComponent;
