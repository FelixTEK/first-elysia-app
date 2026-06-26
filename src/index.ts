// src/index.ts
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import sql from './db' 

const app = new Elysia()
  .use(cors())
  .get('/', () => 'ยินดีต้อนรับสู่ระบบอาณัติสัญญาณแผนที่รถไฟ รฟท. 🦫')

  // เพิ่ม Route นี้เพื่อให้หน้าเว็บดึงข้อมูลมาแสดง
  .get('/api/stations', async () => {
    const data = await sql`SELECT * FROM stations`
    return data
  })
  .listen(3000)

console.log(`🦊 Elysia วิ่งเต็มฝีสูบที่ http://localhost:3000`)
