import React from "react";
import './Video.css'

const Video = () => {
  return (
    <div className="videoContainer col-span-12 md:col-span-6 lg:col-span-3 grid grid-cols-4 grid-rows-4 h-[200px] md:h-[250px]">
      <div className="thumbnailContainer col-span-4 row-span-3 overflow-hidden">
        <img src="https://picsum.photos/400/300" alt="" className="object-fill h-full w-full rounded-lg" />
      </div>
      <div className="videoDetails col-span-4 row-span-1 gap-2 p-3 py-1 grid grid-cols-12 justify-center items-center">
        <div className="col-span-2">
          <img
            src="https://picsum.photos/50/50"
            alt=""
            className="rounded-full w-[40px] aspect-square"
          />
        </div>
        <div className="videoTitle col-span-9">
          <div>Title of The Video</div>
          <div className="text-xs">ChannelNmae • 3.4M </div>
        </div>
        <div className="videoStats">
            15M • 4K • 3K
        </div>
      </div>
    </div>
  );
};

export default Video;
