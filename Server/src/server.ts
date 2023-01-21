import fastify from 'fastify'
import cors from '@fastify/cors'
import { Prisma, PrismaClient } from '@prisma/client'


const app = fastify()
const prisma = new PrismaClient()

app.register(cors)


app.get('/', async () => {
    const habits = await prisma.habit.findMany({})
    
    
    return "<h1>asdHello Gui</h1>"
})
app.listen({
    port: 3333,
}).then(() =>{
    console.log('Server run')
})