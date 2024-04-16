import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import {sql} from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const {nama, npm, kelas, email, password} = await request.json();
        // Validasi email dan password
        console.log({nama, npm, kelas, email, password});

        const hashedPassword = await hash(password, 10);

        const response = await sql `
            INSERT INTO users (nama, npm, kelas, email, password) 
            VALUES (${nama}, ${npm}, ${kelas}, ${email}, ${hashedPassword})
        `;
        console.log({response});
    } catch(e) {
        console.log({e});
    }
    
    return NextResponse.json({massage: "Register Success"});
}