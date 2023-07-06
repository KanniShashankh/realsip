const data ={
title: "First Test",
description: "TESTING",
date: "Sun Jul 23 2023",
location: "HYDERABAD",
event: "NCC",
event_time: "1:1",
event_organiser: "Shashankh",
event_link : "https://www.google.com/"
}

export default function ShowEvent() {

    return (
            <>
             <div className="bg-color-black h-screen">
            <div className="border-2 rounded-md height-screen width-[100%] border-white">
            <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">TITLE:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.title}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">DESCRIPTION:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.description}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">DATE:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.date}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">LOCATION:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.location}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">EVENT:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.event}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">EVENT TIME:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.event_time}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">EVENT ORGANISER:</h1>
            <h1 className="text-2xl text-emerald-200 p-4">{data.event_organiser}</h1>
             </div>
             <div className=" flex items-center">
            <h1 className="text-2xl text-emerald-200 p-4 pl-10">EVENT LINK:</h1>
            <h1 className="text-2xl text-emerald-200 p-4 text-blue-700"><a href={data.event_link} target="_blank">{data.event_link}</a></h1>
             </div>
            
            </div>
            </div>
            </>

    );
}