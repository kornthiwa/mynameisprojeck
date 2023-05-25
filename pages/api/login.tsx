export default function handler(req, res) {
  const { username, password } = req.body;

  // ตรวจสอบ username และ password ว่าถูกต้องหรือไม่
  if (username === "myusername" && password === "mypassword") {
    // ถ้าถูกต้อง ให้กลับไปยังหน้าหลัก
    res.redirect("/");
  } else {
    // ถ้าไม่ถูกต้อง ให้กลับไปยังหน้า Login พร้อมแสดงข้อความแจ้งเตือน
    res.status(401).json({ message: "Invalid username or password" });
  }
}
