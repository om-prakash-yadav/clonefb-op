import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="hidden items-center  md:flex space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full hidden md:flex items-center"
          src={src}
          height={30}
          width={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="invisible md:visible h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex  font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
