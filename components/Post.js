import Image from "next/image";
import {ThumbUpIcon, ShareIcon, ChatAltIcon} from "@heroicons/react/outline"

function Post({ name, message, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-2 md:mt-5 md:rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            className="rounded-full "
            width={40}
            height={40}
            alt=""
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
        <div className="inputIcon rounded-none md:rounded-bl-2xl ">
          <div>
            <ThumbUpIcon className="h-6 text-blue-500" />
            <p className="flex text-xs justify-center items-center sm:text-base">
              Like
            </p>
          </div>
        </div>

        <div className="inputIcon rounded-none ">
          <div>
            <ChatAltIcon className="h-6 text-gray-500"/>
            <p className="flex text-xs justify-center items-center sm:text-base">
              Comment
            </p>
          </div>
        </div>

        <div className="inputIcon rounded-none md:rounded-br-2xl">
          <div>
            <ShareIcon className="h-6 text-gray-500"/>
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
