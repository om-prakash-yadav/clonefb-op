import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import {
  
 
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  ChatIcon,
  BellIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  SearchIcon,
  LogoutIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex-1 border-b-2 md:border-none overflow-hidden justify-items-center ">
      <div className="sticky top-0 z-50 bg-white items-center flex justify-between  lg:px-5 ">
        {/* left */}
        <div className="hidden md:flex items-center p-2">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
          />
          <div className="flex ml-2 items-center  rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6" />
            <input
              className="inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink w-40"
              type="text"
              placeholder="Search facebook"
            />
          </div>
        </div>

        {/* mobile view  */}
        <div className="flex md:hidden items-center justify-between w-full">
          <img
            className="h-11"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="facebook"
          />
          <div className="flex items-center">
            <div className="flex ml-2 items-center  rounded-full bg-gray-100 p-2">
              <SearchIcon className="h-5" />

            
            </div>
            <LogoutIcon className="h-7 mx-2" onClick={signOut} />
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
        <div className="hidden md:flex items-center sm:space-x-2 justify-end p-1">
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
      <div className="flex md:hidden justify-center space-x-8 w-full py-2  shadow-md ">
        <HeaderIcon  active Icon={HomeIcon}/>
        <HeaderIcon Icon={UsersIcon} />
        <HeaderIcon Icon={ChatIcon} />
        <HeaderIcon Icon={BellIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={MenuIcon} />
      </div>
    </div>
  );
}

export default Header;
