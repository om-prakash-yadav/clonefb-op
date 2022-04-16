import StoryCard from "./StoryCard";

const stories = [
   
    {
        name:"Om Prakash",
        src:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/Untitled.png",
        profile:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/Untitled.png",
    },
   
    {
        name:"Harsh",
        src:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/harsh.png",
        profile:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/harsh.png",
    },
   
    {
        name:"Monu",
        src:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/monu.png",
        profile:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/monu.png",
    },
   
    {
        name:"Akash",
        src:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/akashraj.png",
        profile:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/akashraj.png",
    },
   
    {
        name:"pankaj",
        src:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/1.jpg",
        profile:"https://raw.githubusercontent.com/om-prakash-yadav/links/main/1.jpg",
    },
   
  
   
   
];


function Stories() {
    return (
        <div className="flex p-4 justify-items-start  space-x-2  overflow-x-scroll scrollbar-hide"> 
        {stories.map((story) => (
            <StoryCard  key={story.src}
                name={story.name} src={story.src} profile={story.profile}
            />

        ))}
        
        </div>
    )
}

export default Stories
