// src/db.ts
import postgres from 'postgres'

// ดึงสายด่วนมาจากไฟล์ .env
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('❌ ตรวจสอบไฟล์ .env ด่วนครับ! ไม่พบข้อมูล DATABASE_URL')
}

// เปิดท่อส่งข้อมูล (Connection Pool) ไปยัง PostgreSQL
const sql = postgres(connectionString)

console.log('🐘 ชุมสาย PostgreSQL เชื่อมต่อสำเร็จ พร้อมส่งข้อมูลสถานีรถไฟ!')

export default sql
