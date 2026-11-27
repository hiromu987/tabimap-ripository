import {useState} from "react";
import type {FormEvent} from "react";
import type {TravelComment,TravelPost} from "../types";
interface Props{post:TravelPost;onBack:()=>void;onToggleLike:()=>void;onAddComment:(message:string)=>void;}
const CommentDetailScreen=({post,onBack,onToggleLike,onAddComment}:Props)=>{
 const [message,setMessage]=useState("");
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(!message.trim())return;onAddComment(message.trim());setMessage("");};
 return <div className="screen comment-screen"><div className="comment-hero" style={{backgroundImage:"url("+post.imageUrl+")"}}><button type="button" className="cover-icon-button" onClick={onBack}>‹</button></div><div className="comment-post-body"><div className="post-author-row"><img src={post.avatarUrl} alt=""/><span><strong>{post.author}</strong><small>{post.date} · {post.time}</small></span></div><h1>{post.title}</h1><p>{post.body}</p>{post.location&&<span className="post-location">⌖ {post.location}</span>}<div className="post-action-row"><button type="button" className={post.likedByMe?"liked":""} onClick={onToggleLike}>♡ <strong>{post.likes}</strong></button><span>▢ <strong>{post.comments.length}</strong></span></div></div><section className="comments-section"><h2>コメント ({post.comments.length})</h2>{post.comments.map(comment=><CommentRow key={comment.id} comment={comment}/>)}{post.comments.length===0&&<p className="muted-text">最初のコメントを投稿しましょう。</p>}</section><form className="comment-input-row" onSubmit={submit}><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="コメントを入力..." aria-label="コメント"/><button type="submit" aria-label="コメントを送信" disabled={!message.trim()}>➤</button></form></div>;
};
const CommentRow=({comment}:{comment:TravelComment})=><div className="comment-row"><img src={comment.avatarUrl} alt=""/><div><strong>{comment.author}</strong><p>{comment.message}</p><small>{comment.createdAt}</small></div></div>;
export default CommentDetailScreen;