import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts"

const app = new Application()
const router = new Router()

router.get("/", (ctx: Context) => {
    ctx.response.body = "Hola mundo!"
});

router.get("/hola", (ctx: Context) => {
    ctx.response.status = 200,
    ctx.response.body = `
    <!DOCTYPE html>
        <html>
            <head> Desafio Denon </head>
            <body>
                <h1 style= "color: blue"> Welcome to my first server with OAK </h1>
                <h3> This is a text to contain random words to try the funcionality of OAK
            </body>
        </html>
    `
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({port:3000})
console.log('Servidor escuchando puerto 3000') 
