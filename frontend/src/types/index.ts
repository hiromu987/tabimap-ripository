export type Screen = "login" | "register" | "home" | "trip-create" | "trip-detail" | "map" | "post-create" | "timeline" | "album" | "comment-detail" | "profile";
export type BottomTab = "home" | "map" | "create" | "album" | "profile";
export interface AppUser { id:string; name:string; email:string; avatarUrl:string; }
export interface TripMember { id:string; name:string; avatarUrl:string; }
export interface TravelComment { id:string; author:string; avatarUrl:string; message:string; createdAt:string; }
export interface TravelPost { id:string; title:string; body:string; location:string; date:string; time:string; imageUrl:string; author:string; avatarUrl:string; likes:number; likedByMe:boolean; comments:TravelComment[]; }
export interface Trip { id:string; name:string; startDate:string; endDate:string; destinations:string[]; members:TripMember[]; description:string; coverImage:string; isActive:boolean; posts:TravelPost[]; }
export interface TripFormValues { name:string; startDate:string; endDate:string; destinations:string; description:string; coverImage:string; }
export interface PostFormValues { title:string; body:string; location:string; date:string; time:string; imageUrl:string; }