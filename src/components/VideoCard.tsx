import React from "react"

export function VideoCard(props:any){
    return (
        <div className="p-2 pb-1">
            <a href="/video" className="inline-block">
            <img className ="rounded-xl cursor-pointer" src ={props.thumbImage}></img></a>
            <div className="pt-2 flex justify-start">
                
                <div className="">
                   <img className="rounded-full w-8 h-8 focus:cursor-auto"  src={props.image} ></img>
                </div>
                <div className="col-span-11 pl-2">
                <div className="col-span-11 pl-5 text-white-400 text-base font-semibold cursor-pointer">{props.author}</div>
                <div className="col-span-11 pl-5 text-gray-400 text-sm cursor-pointer">{props.channel} </div>
                <div className="col-span-11 pl-5 text-gray-400 text-xs cursor-pointer">{props.views} . {props.timestamp} </div>
                </div>
            </div>
        </div>
    )
}