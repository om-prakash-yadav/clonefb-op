import Image from "next/image";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [loading, setLoading] = useState(null);

  //  firebase v9
  const sendPost = async (e) => {
    if (!inputRef.current.value) return;
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    // 1 . create a post and add to firebase 'posts' collection
    // 2 . get the post id of the newly created post
    // 3 . upload the image to firebase storage using post id
    // 4. get the post image url from firebase storage and update the original post with image
    const docRef = await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });
    console.log("new document added with ID :", docRef.id);
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, imageToPost, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          postImage: downloadURL,
        });
      }
    );
    inputRef.current.value = "";
    setLoading(false);
    removeImage();
  };

 

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white  p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
     
     {imageToPost && (
          <div
            className="flex flex-col items-center justify-center cursor-pointer p-2 "
          >
            <img onClick={removeImage} src={imageToPost} className="h-full w-full object-contain rounded-xl" alt="error loading image" />
            <button
                    type="button"
                    disabled={!imageToPost}
                    className="flex w-32 align-middle justify-center items-center mt-4 rounded-md border border-transparent shadow-sm px-4  py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-400"
                    onClick={sendPost}
                  >
                    {loading ? "uploading ..." : "Upload post"}
                  </button>
           
          </div>
        )}
     
     
      <div className="flex space-x-4 p-4 min-w-fit items-center flex-shrink-0">
        <Image
          className="rounded-full flex-shrink-0"
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full text-sm flex-grow h-12 bg-gray-100 px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`Welome ! ,  ${session.user.name} `}
          />
          <button type="submit" hidden onClick={sendPost}></button>
        </form>
       
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500 " />
          <p className="hidden md:flex md:text-sm  ">Live Video</p>
        </div>
        <div
          onClick={() => {
            filepickerRef.current.click();
          }}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400 " />
          <p className="hidden md:flex md:text-sm">Photo/Video</p>
          <input
            ref={filepickerRef}
            type="file"
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="hidden md:flex md:text-sm">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
