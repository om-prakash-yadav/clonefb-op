import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex-1 overflow-hidden justify-items-center ">
      <div className="sticky top-0 z-50 bg-white items-center flex justify-between  lg:px-5 ">
        {/* left */}
        <div className="flex items-center p-1">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
          />
          <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6" />
            <input
              className="inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink w-40"
              type="text"
              placeholder="Search facebook"
            />
          </div>
        </div>

        {/* center */}
        <div className="hidden md:flex justify-center flex-grow">
          <div className="flex space-x-4 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center sm:space-x-2 justify-end p-1">
          {/* profile pic */}
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer "
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
          />
          <p className="whitespace-nowrap hidden md:flex items-center justify-center font-semibold pr-3">
            {session.user.name}
          </p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
      <div className="flex md:hidden justify-center space-x-12 py-2  shadow-md ">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={MenuIcon} />
      </div>
    </div>
  );
}

export default Header;
