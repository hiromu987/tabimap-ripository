import {useState} from "react";
import type {Trip} from "../types";
import ScreenHeader from "./ScreenHeader";
interface Props{trip:Trip;onBack:()=>void;onOpenPost:(id:string)=>void;}
const MapScreen=({trip,onBack,onOpenPost}:Props)=>{
 const [filter,setFilter]=useState("全員");
 const filters=["全員","自分","友達A","友達B"];
 return <div className="screen map-screen"><ScreenHeader title="思い出マップ" onBack={onBack}/><div className="map-filter-row">{filters.map(f=><button type="button" key={f} className={filter===f?"selected":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="memory-map"><div className="map-land map-land-one"/><div className="map-land map-land-two"/><div className="map-river"/><div className="map-road map-road-a"/><div className="map-road map-road-b"/><div className="map-road map-road-c"/>{trip.posts.slice(0,5).map((post,i)=><button type="button" key={post.id} className={"map-photo-pin pin-position-"+i} onClick={()=>onOpenPost(post.id)}><img src={post.imageUrl} alt={post.location}/><span>{post.author.slice(0,1)}</span></button>)}<button type="button" className="map-location-button" onClick={()=>setFilter("全員")}>◎</button></div>{trip.posts[0]&&<button type="button" className="map-bottom-post" onClick={()=>onOpenPost(trip.posts[0].id)}><img src={trip.posts[0].imageUrl} alt=""/><span><strong>{trip.posts[0].location}</strong><small>{trip.posts[0].author} · {trip.posts[0].time}</small><span>{trip.posts[0].body}</span></span><b>›</b></button>}</div>;
};
export default MapScreen;