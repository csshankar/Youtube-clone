import React from "react"
import Videotab from '../../components/Videotab'
import { Appbar } from "@/components/Appbar"
import { VideoGrid } from "@/components/VideoGrid"

const VideoTab: React.FC = () => {
    return(<div><Appbar /> 
    <Videotab image="thumb2.png" channel="Android 15" subscribers="3.31M subscribers" likes="4.5K" dislikes="2.5K" />
    </div>)
}

export default VideoTab