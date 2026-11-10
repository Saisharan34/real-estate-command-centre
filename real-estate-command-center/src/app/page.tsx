import {loadDashboard} from "@/lib/data";import Dashboard from "@/components/dashboard";
export const dynamic="force-dynamic";
export default async function Home(){const data=await loadDashboard();return <Dashboard initial={data}/>}
