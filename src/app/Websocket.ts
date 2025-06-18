// import { WebSocketServer } from 'ws';
// import { createServer } from 'http';
// import { NextRequest, NextResponse } from 'next/server';

// interface WebSocketMessage {
//   type: 'object_created';
//   data: any;
//   apiId: string;
//   timestamp: string;
// }

// class WebSocketManager {
//   private wss: WebSocketServer | null = null;
//   private server: any = null;
//   private isInitialized: boolean = false;

//   init(port: number = 8080) {
//     if (this.isInitialized) {
//       console.log('WebSocket server already initialized');
//       return;
//     }

//     this.server = createServer();
//     this.wss = new WebSocketServer({ server: this.server });

//     this.wss.on('connection', (ws) => {
//       console.log('Client connected');
      
//       ws.on('message', (message) => {
//         try {
//           const data: WebSocketMessage = JSON.parse(message.toString());
//           console.log('Received message:', data);
          
//           // Process the message and trigger mapping
//           this.handleObjectCreated(data);
//         } catch (error) {
//           console.error('Error parsing WebSocket message:', error);
//         }
//       });

//       ws.on('close', () => {
//         console.log('Client disconnected');
//       });
//     });

//     this.server.listen(port, () => {
//       console.log(`WebSocket server running on port ${port}`);
//       this.isInitialized = true;
//     });
//   }

//   private async handleObjectCreated(message: WebSocketMessage) {
//     try {
//       console.log(`Processing object creation for API ${message.apiId}`);
//       await this.triggerMapping(message.apiId, message.data);
//     } catch (error) {
//       console.error('Error handling object creation:', error);
//     }
//   }

//   private async triggerMapping(apiId: string, data: any) {
//     try {
//       const response = await fetch(`http://localhost:3000/api/map?endpointId=${apiId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           data})
//       });

//       if (!response.ok) {
//         throw new Error(`Mapping API returned ${response.body}`);
//       }

//       console.log(`Successfully triggered mapping for API ${apiId}`);
//     } catch (error) {
//       console.error('Error triggering mapping:', error);
//     }
//   }

//   broadcast(message: WebSocketMessage) {
//     if (this.wss) {
//       this.wss.clients.forEach((client) => {
//         if (client.readyState === 1) { // WebSocket.OPEN
//           client.send(JSON.stringify(message));
//         }
//       });
//     }
//   }
// }

// export const wsManager = new WebSocketManager();

// // Auto-initialize when the module is imported
// if (typeof window === 'undefined') { // Only on server side
//   wsManager.init(8080);
// }

// export async function GET(request: NextRequest) {
//   return NextResponse.json({ message: 'WebSocket server initialized' });
// }