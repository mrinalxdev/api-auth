import type { ServerWebSocket } from "bun"

const server = Bun.serve({
    port: 3000,
    fetch(request, server) {
        if(server.upgrade(request)){
            return;
        }

        return new Response("Hello World")
    },
    websocket:{
        open(ws){
            const welcomeMessage = "Hello this side Mrinal !!"
            ws.send(welcomeMessage)
            console.log("connection opened")
        },
        message(ws, message){
            console.log(`incoming message ${message}`)
            ws.send(message);
        },

        close(ws){
            console.log("connection closed")
        }
    }
})

console.log(`Listening on LOCALHOST : ${server.port}`)
