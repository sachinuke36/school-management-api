import db from './config/db.js'; // adjust path as needed

(async () => {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ DB connected:', rows);
  } catch (err) {
    console.error('❌ Connection error:', err);
  }
})();