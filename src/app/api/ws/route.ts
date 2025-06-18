// import { NextRequest, NextResponse } from 'next/server';
// import { wsManager } from '@/app/Websocket';

// // Initialize WebSocket server when this API route is first called
// let isInitialized = false;

// export async function GET(request: NextRequest) {
//   if (!isInitialized) {
//     wsManager.init(8080);
//     isInitialized = true;
//   }
  
//   return NextResponse.json({ message: 'WebSocket server initialized' });
// }