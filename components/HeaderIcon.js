function HeaderIcon({ Icon , active }) {
  return (
    <div className={`flex items-center  cursor-pointer md:px-10 sm:h-14
     md:hover:bg-gray-100 rounded-t-lg ${active && 'md:border-b-4 md:border-blue-500 '}   group ` } >
      <Icon className={`h-6  text-center sm:h-7 mx-auto  group-hover:text-blue-500  ${active ? 'text-blue-500':'text-gray-600'} `} />
    </div>
  );
}

export default HeaderIcon;
