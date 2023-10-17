import React from "react";

function Story({ story, onLike, img }) {
  return (
    <div className="w-full p-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex">
          <div className="w-1/3 pr-4">
            <img src={img} alt="Image" className="w-full rounded-lg" />
          </div>
          <div className="w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{story.title}</h3>
            <p className="text-gray-700 text-sm mb-2">{story.Dicription}</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{story.title2}</h3>
            <p className="text-gray-700 text-sm mb-2">{story.Dicription2}</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{story.title3}</h3>
            <p className="text-gray-700 text-sm mb-2">{story.Dicription3}</p>
            <div className="flex items-center">
              <p className="text-gray-700">Likes: {story.likes}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={onLike}
              >
                Like
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
