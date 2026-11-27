import type { Trip } from "../types";
import { initialTrips } from "../data/mockData";
const STORAGE_KEY="tripmemo-trips";
export function loadTrips():Trip[]{try{const value=localStorage.getItem(STORAGE_KEY);if(!value)return initialTrips;const parsed:unknown=JSON.parse(value);return Array.isArray(parsed)?parsed as Trip[]:initialTrips;}catch{return initialTrips;}}
export function saveTrips(trips:Trip[]):void{try{localStorage.setItem(STORAGE_KEY,JSON.stringify(trips));}catch{/* Storageが利用できない場合も画面操作は継続します。 */}}