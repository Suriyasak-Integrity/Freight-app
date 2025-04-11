
import Link from 'next/link';
export default function Home() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>📦 Freight Rate App</h1>
      <p>ระบบพร้อมใช้งานแล้ว</p>
      <ul>
        <li><Link href="/search-rate">🔎 ค้นหาราคา</Link></li>
        <li><Link href="/login">👤 เข้าสู่ระบบ</Link></li>
        <li><Link href="/dashboard">📊 สถิติเรท</Link></li>
      </ul>
    </div>
  );
}
