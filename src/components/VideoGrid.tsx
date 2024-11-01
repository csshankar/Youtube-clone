import { VideoCard } from "./VideoCard"
import { Link } from "react-router-dom";


export const VIDEOS = [
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Android 15",
        channel: "9to5Google",
        views: "2.3k",
        timestamp: "4 days ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Mike Smith",
        channel: "Cooking Corner",
        views: "8.1k",
        timestamp: "2 days ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Emma Wilson",
        channel: "Fitness Fanatics",
        views: "4.6k",
        timestamp: "3 days ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Chris Brown",
        channel: "Gadget Guru",
        views: "3.5k",
        timestamp: "1 week ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Sophia Taylor",
        channel: "Nature Explorer",
        views: "6.8k",
        timestamp: "2 weeks ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "James Lee",
        channel: "Gaming Central",
        views: "5.4k",
        timestamp: "5 days ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Olivia Garcia",
        channel: "Beauty Buzz",
        views: "7.9k",
        timestamp: "1 month ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Daniel Martinez",
        channel: "Music Vibes",
        views: "9.9k",
        timestamp: "2 months ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Mia Anderson",
        channel: "Fashion Forward",
        views: "4.3k",
        timestamp: "1 week ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Ethan Thomas",
        channel: "Sports Zone",
        views: "2.1k",
        timestamp: "3 days ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Isabella White",
        channel: "Tech Talk",
        views: "2.0k",
        timestamp: "4 weeks ago"
    },
    {
        image: "thumb2.png",
        thumbImage: "photo1.webp",
        author: "Noah Harris",
        channel: "DIY Projects",
        views: "3.2k",
        timestamp: "1 month ago"
    }
];

export const VideoGrid=()=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pl-2 pt-3" >
            {VIDEOS.map((video,index) => <div key={index}>
                <VideoCard 
                image ={video.image}
            thumbImage ={video.thumbImage}
            
            author= {video.author}
            channel={video.channel}
            views={video.views }
            timestamp={video.timestamp}></VideoCard>
            </div>)}
            </div>)
            }
           