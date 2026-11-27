import type {Trip} from "../types";
import {formatJapaneseDate} from "../utils/date";
import ScreenHeader from "./ScreenHeader";
interface Props{trip:Trip;onBack:()=>void;onOpenPost:(id:string)=>void;}
const TimelineScreen=({trip,onBack,onOpenPost}:Props)=>{
 const posts=[...trip.posts].sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
 const dates=Array.from(new Set(posts.map(p=>p.date)));
 return <div className="screen"><ScreenHeader title="思い出タイムライン" onBack={onBack}/><div className="timeline-segment"><button type="button" className="selected">タイムライン</button><button type="button" onClick={onBack}>旅行詳細</button></div><div className="timeline-list">{dates.map(date=><section className="timeline-day" key={date}><h2>{formatJapaneseDate(date)}</h2>{posts.filter(p=>p.date===date).map(post=><button type="button" className="timeline-post" key={post.id} onClick={()=>onOpenPost(post.id)}><span className="timeline-dot"/><img src={post.imageUrl} alt=""/><span className="timeline-post-copy"><strong>{post.location||post.title}</strong><span>{post.title}</span><small>{post.time} · {post.author}</small></span><span className="timeline-arrow">›</span></button>)}</section>)}{posts.length===0&&<div className="empty-inline">まだ投稿はありません。</div>}</div></div>;
};
export default TimelineScreen;