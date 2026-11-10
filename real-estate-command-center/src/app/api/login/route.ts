import {NextRequest,NextResponse} from "next/server";
import {makeAccessToken} from "@/lib/auth";
export async function POST(req:NextRequest){
 const {pin}=await req.json().catch(()=>({pin:""}));
 const expected=process.env.APP_PIN;
 if(!expected) return NextResponse.json({ok:true,preview:true});
 if(typeof pin!=="string"||pin!==expected) return NextResponse.json({ok:false,error:"Incorrect PIN"},{status:401});
 const res=NextResponse.json({ok:true});
 res.cookies.set("app_access",await makeAccessToken(expected),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:60*60*24*7});
 return res;
}
