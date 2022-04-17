import Image from "next/image";
import {ThumbUpIcon, ShareIcon, ChatAltIcon} from "@heroicons/react/outline"
import { useState } from "react/cjs/react.development";



function Post({ name, message, postImage, image, timestamp }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-2 md:mt-5 md:rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            className="rounded-full "
            width={40}
            height={40}
            alt="profile pic"
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* footer */}

      <div className="flex justify-between items-center md:rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div  onClick={toggleClass}  className="inputIcon rounded-none md:rounded-bl-2xl">
          <div className="flex ">
            <ThumbUpIcon   className={isActive ? "h-5 md:h-6 fill-blue-400 text-blue-600": "h-5 md:h-6 text-blue-600   mr-2"} 
      />
            <p className="flex  text-xs justify-center items-center sm:text-base">
              {isActive ? "You Liked":"Like"}
            </p>
          </div>
        </div>

        <div className="inputIcon rounded-none ">
          <div className="flex">
            <ChatAltIcon className="h-5 md:h-6 text-gray-500 mr-2"/>
            <p className="flex text-xs justify-center items-center sm:text-base">
              Comment
            </p>
          </div>
        </div>

        <div className="inputIcon rounded-none md:rounded-br-2xl">
          <div className="flex">
            <ShareIcon className="h-5 md:h-6 text-gray-500 mr-2"/>
            <p className="flex text-xs justify-center items-center sm:text-base">
              Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
