import {NextRequest,NextResponse} from "next/server";
import {makeAccessToken} from "@/lib/auth";
export async function middleware(req:NextRequest){
 const pin=process.env.APP_PIN;
 const path=req.nextUrl.pathname;
 if(!pin) return NextResponse.next(); // Preview only; configure APP_PIN before production.
 if(path==="/login"||path.startsWith("/_next")||path==="/favicon.ico"||path.startsWith("/api/login")) return NextResponse.next();
 const supplied=req.cookies.get("app_access")?.value;
 const expected=await makeAccessToken(pin);
 if(supplied&&supplied===expected) return NextResponse.next();
 return NextResponse.redirect(new URL("/login",req.url));
}
export const config={matcher:["/((?!.*\\.).*)"]};
