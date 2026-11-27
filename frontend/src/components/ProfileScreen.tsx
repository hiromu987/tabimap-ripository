import type {AppUser,Trip} from "../types";
import {profileBadges} from "../data/mockData";
import ScreenHeader from "./ScreenHeader";
interface Props{user:AppUser;trips:Trip[];onLogout:()=>void;onBack:()=>void;}
const ProfileScreen=({user,trips,onLogout,onBack}:Props)=>{
 const count=trips.reduce((n,t)=>n+t.posts.length,0);
 return <div className="screen"><ScreenHeader title="マイページ" onBack={onBack}/><section className="profile-summary"><img className="profile-large-avatar" src={user.avatarUrl} alt={user.name}/><h1>{user.name}</h1><p>@tabinosuke</p><div className="profile-stats"><span><strong>{count}</strong><small>投稿数</small></span><span><strong>24</strong><small>訪問スポット</small></span><span><strong>8</strong><small>獲得バッジ</small></span></div></section><section className="profile-section"><div className="section-title-row"><h2>バッジコレクション</h2><button type="button" className="link-button">もっと見る ›</button></div><div className="badge-grid">{profileBadges.map(b=><div className="badge-item" key={b.id}><span className={"badge-art "+b.color}>{b.icon}</span><strong>{b.title}</strong></div>)}</div></section><section className="profile-menu"><button type="button" onClick={()=>window.alert("設定は今後実装します。")}><span>⚙</span>設定<b>›</b></button><button type="button" onClick={()=>window.alert("ヘルプ・お問い合わせは今後実装します。")}><span>ⓘ</span>ヘルプ・お問い合わせ<b>›</b></button><button type="button" onClick={onLogout}><span>⇥</span>ログアウト<b>›</b></button></section></div>;
};
export default ProfileScreen;