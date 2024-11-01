import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      {/* <VideoCard title={"What's new in Android"} 
      image ={"photo2.jpg"}
      thumbImage ={"photo1.webp"}
      author={"Android 15"}
      views={"100k"}
      timestamp={"2 days ago"}></VideoCard> */}
      
      <Appbar/>
      <div className="flex justify-evenly	">
        
      <Sidebar/>
      
      <VideoGrid/>
      
      
      </div>
      </div>
      
  );
}
