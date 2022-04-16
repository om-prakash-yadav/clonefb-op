import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
const contacts = [
  {
    name: "Harsh Jha",
    src: "https://raw.githubusercontent.com/om-prakash-yadav/links/main/harsh.png",
  },

  {
    name: "Monu Paswan",
    src: "https://raw.githubusercontent.com/om-prakash-yadav/links/main/monu.png",
  },

  {
    name: "Akash Raj",
    src: "https://raw.githubusercontent.com/om-prakash-yadav/links/main/akashraj.png",
  },

  {
    name: "pankaj Kumar",
    src: "https://raw.githubusercontent.com/om-prakash-yadav/links/main/1.jpg",
  },
  {
    name: "Suresh Yadav",
    src: "https://raw.githubusercontent.com/om-prakash-yadav/links/main/2.jpg",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 mr-8">
      <div className="flex justify-between items-center text-gray-500 mb-5 ">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
