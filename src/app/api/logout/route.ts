import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ success: true });

  response.cookies.set('vclass_auth', '', { 
      path: '/',
      expires: new Date(0) 
    }); // hapus vclass cookies

  response.cookies.set('MoodleSession', '', {
      path: '/', 
      expires: new Date(0)
    }); //hapus moodle session

  response.cookies.set('user_jurusan', '', { 
      path: '/', 
      expires: new Date(0) 
    }); // HAPUS jurusan

  return response;
}
