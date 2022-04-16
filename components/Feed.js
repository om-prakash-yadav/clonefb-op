import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({posts}) {
  return (
    <div className="flex-grow h-screen xl:mr-40 overflow-y-auto scrollbar-hide ">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* stories */}

        <Stories />
        {/* input box */}
        <InputBox />
        {/* posts */}
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
