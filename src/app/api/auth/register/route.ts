import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {nama, npm, kelas, email, password} = await request.json();
        console.log({nama, npm, kelas, email, password});
    } catch(e) {
        console.log({e});
    }
    
    return NextResponse.json({massage: "Register Success"});
}