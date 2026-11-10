export type PropertyStatus = "Available" | "In Token" | "Sold";
export type Priority = "Hot" | "Warm" | "Cold";
export type VisitStatus = "Scheduled" | "Visited" | "Liked" | "Rejected";
export type RejectionReason = "Price" | "Road Width" | "Slope/Shape" | "Zoning/FAR" | "Distance";
export interface Property {
  id:string; title:string; sub_locality:string; area_sqm:number; asking_price_inr:number;
  road_width_m:number; zone_type:string; sanad_status:boolean; clear_title:boolean;
  status:PropertyStatus; gmaps_url:string; notes:string;
}
export interface Client {
  id:string; name:string; phone:string; priority:Priority; budget_max_inr:number;
  min_road_width_m:number; preferred_locations:string; is_active:boolean;
}
export interface SiteVisit {
  id:string; client_id:string; property_id:string; visit_date:string; status:VisitStatus;
  rejection_reason:RejectionReason|null; client_feedback:string;
}
