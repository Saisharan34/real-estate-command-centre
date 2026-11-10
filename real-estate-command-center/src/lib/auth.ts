export async function makeAccessToken(pin:string){
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(pin),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
 const sig=await crypto.subtle.sign("HMAC",key,new TextEncoder().encode("real-estate-command-center:app-access:v1"));
 return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
}
