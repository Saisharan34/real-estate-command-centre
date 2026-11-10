import {getSupabase} from "./supabase";
import {mockClients,mockProperties,mockVisits} from "./mock-data";
import type {Client,Property,SiteVisit} from "./types";
export async function loadDashboard(){
 const db=getSupabase();
 if(!db) return {properties:mockProperties,clients:mockClients,visits:mockVisits,demo:true};
 try{
  const [p,c,v]=await Promise.all([db.from("properties").select("*").order("id"),db.from("clients").select("*").order("priority"),db.from("site_visits").select("*").order("visit_date",{ascending:false})]);
  if(p.error||c.error||v.error) throw new Error("Supabase query failed");
  return {properties:(p.data??[]) as Property[],clients:(c.data??[]) as Client[],visits:(v.data??[]) as SiteVisit[],demo:false};
 }catch{
  return {properties:mockProperties,clients:mockClients,visits:mockVisits,demo:true};
 }
}
export async function updatePropertyStatus(id:string,status:string){
 const db=getSupabase(); if(!db) return {ok:false,error:"Supabase is not configured. Demo data is read-only."};
 const {error}=await db.from("properties").update({status}).eq("id",id);
 return error?{ok:false,error:error.message}:{ok:true};
}
export async function updateVisit(id:string,patch:Partial<SiteVisit>){
 const db=getSupabase(); if(!db) return {ok:false,error:"Supabase is not configured. Demo data is read-only."};
 const {error}=await db.from("site_visits").update(patch).eq("id",id);
 return error?{ok:false,error:error.message}:{ok:true};
}
