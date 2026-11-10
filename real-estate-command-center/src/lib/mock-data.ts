import type {Client,Property,SiteVisit} from "./types";
export const mockProperties:Property[]=[
{id:"PLT-101",title:"Settlement plot near main road",sub_locality:"Madkai",area_sqm:255,asking_price_inr:3570000,road_width_m:6,zone_type:"Settlement",sanad_status:true,clear_title:true,status:"Available",gmaps_url:"",notes:"Water and electricity nearby"},
{id:"PLT-102",title:"Residential plot",sub_locality:"Farmagudi",area_sqm:300,asking_price_inr:4200000,road_width_m:8,zone_type:"Settlement",sanad_status:true,clear_title:true,status:"Available",gmaps_url:"",notes:"G+2 potential subject to approvals"},
{id:"PLT-103",title:"Orchard plot",sub_locality:"Borim",area_sqm:500,asking_price_inr:2800000,road_width_m:3,zone_type:"Orchard",sanad_status:false,clear_title:false,status:"In Token",gmaps_url:"",notes:"Verify title and permissions"},
{id:"PLT-104",title:"Commercial plot",sub_locality:"Ponda",area_sqm:220,asking_price_inr:5100000,road_width_m:9,zone_type:"Commercial",sanad_status:true,clear_title:true,status:"Available",gmaps_url:"",notes:"Near market"}
];
export const mockClients:Client[]=[
{id:"CL-201",name:"Aarav Naik",phone:"+91 98765 43210",priority:"Hot",budget_max_inr:4000000,min_road_width_m:6,preferred_locations:"Madkai, Farmagudi",is_active:true},
{id:"CL-202",name:"Maya Kamat",phone:"+91 98765 12345",priority:"Warm",budget_max_inr:5500000,min_road_width_m:8,preferred_locations:"Ponda, Farmagudi",is_active:true},
{id:"CL-203",name:"Rohan Dessai",phone:"+91 98220 11111",priority:"Cold",budget_max_inr:3000000,min_road_width_m:4,preferred_locations:"Borim",is_active:true}
];
export const mockVisits:SiteVisit[]=[
{id:"VIS-301",client_id:"CL-201",property_id:"PLT-101",visit_date:"2026-11-08",status:"Rejected",rejection_reason:"Road Width",client_feedback:"Would prefer a wider access road."},
{id:"VIS-302",client_id:"CL-202",property_id:"PLT-104",visit_date:"2026-11-12",status:"Scheduled",rejection_reason:null,client_feedback:""}
];
