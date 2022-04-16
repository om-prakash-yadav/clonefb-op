import Image from "next/image";

function StoryCard({name , src , profile}) {
    return (
        <div className="relative  h-44 w-24 lg:w-32 lg:h-56 
        cursor-pointer flex-shrink-0  p-3  
        transform ease md:hover:scale-105 md:hover:animate-pulse rounded-2xl ">
            <Image 
            className="absolute rounded-full z-50 top-10"
            
            src={profile}
            width={40}
            height={40}
            objectFit="cover"
            layout="fixed"
            />
            <Image 
                src={src}
                className="object-cover filter brightness-75 hover:brightness-100 rounded-2xl "
                layout="fill"
            />
            <p className="absolute  bottom-4 w-5/6 text-white text-xs md:text-sm font-semibold truncate">{name}</p>
        </div>
    )
}

export default StoryCard
