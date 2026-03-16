# 💍 Thiệp Cưới Online Cao Cấp – Minh & Linh

Website thiệp cưới đầy đủ tính năng, viết bằng HTML/CSS/JavaScript thuần.

## 📁 Cấu trúc file

```
wedding-invitation/
├── index.html       ← Trang thiệp cưới chính
├── album.html       ← Trang album ảnh
├── style.css        ← Toàn bộ style
├── script.js        ← Logic + cấu hình
├── images/          ← Thêm ảnh cưới vào đây
└── music/
    └── romantic.mp3 ← Thêm file nhạc vào đây
```

## ⚙️ Cách chỉnh thông tin

Mở file `script.js`, tìm đoạn `const CONFIG = { ... }` ở đầu file và chỉnh sửa:

```javascript
const CONFIG = {
  groomName: "Nguyễn Văn Minh",     // Tên chú rể đầy đủ
  groomShort: "Minh",               // Tên ngắn
  brideName: "Trần Thị Bảo Linh",   // Tên cô dâu đầy đủ
  brideShort: "Linh",               // Tên ngắn
  weddingDate: "2025-06-15T10:00:00",// Ngày cưới (ISO format)
  contactPhone: "0912 345 678",     // Số điện thoại liên hệ
  // ... và nhiều hơn nữa
}
```

## 🎵 Thêm nhạc nền

Đặt file MP3 vào thư mục `music/` và đặt tên `romantic.mp3`
Hoặc chỉnh `musicFile: "music/ten-file.mp3"` trong CONFIG.

## 🖼️ Thêm ảnh

Thêm ảnh thật vào thư mục `images/` và cập nhật mảng `gallery` và `albumImages` trong CONFIG.

## 🔗 Gửi thiệp cho từng khách

Thêm tên khách vào URL:
```
https://your-site.com/?guest=Nguyen
→ Hiển thị: "🎉 Chào mừng gia đình Nguyen"
```

## 🚀 Triển khai website

### Option 1: GitHub Pages (miễn phí)
1. Tạo tài khoản tại github.com
2. Tạo repository mới: `ten-cuoi`
3. Upload tất cả file lên
4. Vào Settings → Pages → Source: main
5. Link thiệp: `https://username.github.io/ten-cuoi`

### Option 2: Netlify (miễn phí, nhanh nhất)
1. Truy cập netlify.com → Đăng ký miễn phí
2. Kéo thả thư mục `wedding-invitation` vào trang
3. Netlify tự tạo link: `https://random-name.netlify.app`
4. Có thể đặt tên riêng: `minh-linh-wedding.netlify.app`

### Option 3: Vercel (miễn phí)
1. Truy cập vercel.com → Đăng ký
2. Cài Vercel CLI: `npm i -g vercel`
3. Chạy: `vercel deploy` trong thư mục
4. Link: `https://ten-cuoi.vercel.app`

## ✨ Tính năng đầy đủ

- [x] Hero section với animation
- [x] Chuyện tình yêu dạng timeline
- [x] Card cô dâu & chú rể
- [x] Thông tin hai họ
- [x] 3 sự kiện cưới + Google Maps
- [x] Đếm ngược ngày cưới
- [x] Gallery masonry 12+ ảnh
- [x] Album ảnh 50+ ảnh với bộ lọc
- [x] RSVP lưu localStorage
- [x] Chia sẻ Facebook/Messenger/Zalo
- [x] QR Code tự động
- [x] Nhạc nền lãng mạn
- [x] Trái tim & cánh hoa rơi
- [x] Chào khách theo tên từ URL
- [x] Responsive mobile/tablet/desktop
- [x] Lightbox xem ảnh lớn
