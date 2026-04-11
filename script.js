/* ============================================================
   WEDDING INVITATION – script.js
   Thiệp Cưới Online Cao Cấp – Tiếng Việt
============================================================ */

/* ============================================================
   ⚙️  CẤU HÌNH – Chỉnh sửa thông tin tại đây
============================================================ */
const CONFIG = {
  groomName: "Lâm Tứ Nhật",
  groomShort: "Nhật",
  groomBio: "",
  groomPhoto: "images/BEN_0690.jpg",

  brideName: "Đoàn Thị Tú Trinh",
  brideShort: "Trinh",
  brideBio: "",
  bridePhoto: "images/BEN_0610.jpg",

  weddingDate: "2026-05-10T10:00:00",
  weddingDateDisplay: "10 · 05 · 2026",

  groomFamily: {
     title: " ",
    father: "Lâm Tứ Thông",
    mother: "Phan Thị Liên Hoa",
    address: "Trần Hưng Đạo, Phường Phú Xuân, thành phố Huế"
  },
  brideFamily: {
      title: " ",
    father: "Đoàn Minh Sơn",
    mother: "Đoàn Thị Tý",
    address: "Tổ 29 khu phố Vườn Dừa, Phường Phước Tân, Đồng Nai"
  },

  events: [

    {
      icon: "🥂",
      title: "Tiệc Vu Quy",
      date: "Chủ Nhật, 10/05/2026",
      time: "11:00 – 14:00",
      location: "Nhà hàng Phố Đôi",
      address: "737 Xa Lộ Hà Nội, Phường Long Bình, Đồng Nai",
      mapsUrl: "https://maps.app.goo.gl/bctJtPu2CHb9Twjz7"
    },
    {
      icon: "🎊",
      title: "Tiệc Thành Hôn",
      date: "Chủ Nhật, 14/06/2026",
      time: "11:00 – 14:00",
      location: "Nhà hàng White Lotus - Sảnh Boulevard",
      address: "05-07 Hoàng Hoa Thám, Phú Nhuận, Huế",
      mapsUrl: "https://maps.app.goo.gl/gg437btm5JHEB8f87"
    }
  ],

  contactPhone: "0366 432 416",

  musicFile: "music/romantic.mp3",

  timeline: [
    {
      year: "2023",
      title: "Lời Cầu Hôn",
      desc: "hạnh phúc và gật đầu đồng ý.",
      photo: "images/01.jpg"
    },
    {
      year: "2025",
      title: "Ngày Trọng Đại",
      desc: "Và hôm nay, chúng tôi cùng nhau bước vào một chương mới của cuộc đời. Trước sự chứng kiến của gia đình và những người thân yêu, chúng tôi xin phép được kết đôi và cùng nhau viết tiếp câu chuyện tình yêu này mãi mãi.",
      photo: "images/03.jpg"
    }
  ],

  // Gallery images array – add your real photos here
  gallery: generateGalleryImages(),

  // Album images (50+ photos with categories)
  albumImages: generateAlbumImages()
};

/* ---- Generate placeholder gallery images ---- */
function generateGalleryImages() {
  const photos = [
    { src: "images/DSCF5301.JPG", cap: "Khoảnh khắc hạnh phúc" },
    { src: "images/DSCF5325.jpg", cap: "Đôi uyên ương" },
    { src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=75", cap: "Tình yêu đẹp" },
    { src: "https://images.unsplash.com/photo-1606216794079-73f4f9f6ce3b?w=600&q=75", cap: "Hoa cưới" },
    { src: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?w=600&q=75", cap: "Lễ cưới" },
    { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=75", cap: "Nụ hôn đầu" },
    { src: "https://images.unsplash.com/photo-1525258946800-90d1948cbcb4?w=600&q=75", cap: "Hạnh phúc mãi mãi" },
    { src: "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=600&q=75", cap: "Buổi tối lãng mạn" },
    { src: "https://images.unsplash.com/photo-1587271339318-2e78e9420e69?w=600&q=75", cap: "Trao nhẫn" },
    { src: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&q=75", cap: "Gia đình hạnh phúc" },
    { src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=75", cap: "Cầu hôn" },
    { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=75", cap: "Tiệc cưới" },
  ];
  return photos;
}

function generateAlbumImages() {
  const categories = ["dinh-hon", "anh-cuoi"];
  const unsplashIds = [
    ["images/DSCF6721.jpg","photo-1511285560929-80b456fea0bc","photo-1529333166437-7750a6dd5a70","photo-1606216794079-73f4f9f6ce3b","photo-1513278974582-3e1b4a4fa21e","photo-1465495976277-4387d4b0b4c6","photo-1525258946800-90d1948cbcb4","photo-1485872299829-c673f5194813","photo-1587271339318-2e78e9420e69","photo-1546032996-6dfacbacbf3f"],
    ["photo-1544078751-58fee2d8a03b","photo-1469371670807-013ccf25f16a","photo-1511988617509-a57c8a288659","photo-1558618666-fcd25c85cd64","photo-1523438885200-e635ba2c371e","photo-1490730141103-6cac27aaab94","photo-1522673607200-164d1b6ce486","photo-1519225421980-715cb0215aed","photo-1525302843855-8a72bce17442","photo-1507003211169-0a1dd7228f2d"],
  ];
  const captions = ["Khoảnh khắc hạnh phúc","Tình yêu đôi mình","Nụ cười hạnh phúc","Yêu mãi mãi","Bên nhau trọn đời","Hành trình yêu","Kỷ niệm đẹp","Chúng mình và nhau","Một ngày đặc biệt","Hạnh phúc vỡ oà"];

  const all = [];
  categories.forEach((cat, ci) => {
    unsplashIds[ci].forEach((id, ii) => {
      all.push({
        src: `https://images.unsplash.com/${id}?w=600&q=75`,
        cat,
        cap: captions[ii % captions.length]
      });
    });
  });
  return all;
}

/* ============================================================
   GLOBAL STATE
============================================================ */
let lbPhotos = [];
let lbIndex = 0;
let isAlbumPage = false;

/* ============================================================
   INIT ON PAGE LOAD
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  isAlbumPage = document.body.classList.contains("album-page");

  initParticles();
  initMusicPlayer();

  if (!isAlbumPage) {
    initHero();
    initGuestGreeting();
    initTimeline();
    initCouple();
    initFamily();
    initEvents();
    initCountdown();
    initGallery();
    initRSVP();
    initShare();
    initScrollReveal();
  }
});

/* ============================================================
   ALBUM PAGE INIT (called from album.html)
============================================================ */
function initAlbumPage() {
  initParticles();
  initAlbumFilter();
  renderAlbum("all");
}

/* ============================================================
   HERO
============================================================ */
function initHero() {
  const g = document.getElementById("heroGroom");
  const b = document.getElementById("heroBride");
  const d = document.getElementById("heroDate");
  const fn = document.getElementById("footerNames");
  const fd = document.getElementById("footerDate");
  const ft = document.getElementById("footerTel");
  const pt = document.getElementById("pageTitle");

  if(g) g.textContent = CONFIG.groomShort;
  if(b) b.textContent = CONFIG.brideShort;
  if(d) d.textContent = CONFIG.weddingDateDisplay;
  if(fn) fn.innerHTML = `${CONFIG.groomShort} &amp; ${CONFIG.brideShort}`;
  if(fd) fd.textContent = CONFIG.weddingDateDisplay;
  if(ft) ft.innerHTML = `Liên hệ: <a href="tel:${CONFIG.contactPhone.replace(/\s/g,'')}">${CONFIG.contactPhone}</a>`;
  if(pt) pt.textContent = `Thiệp Cưới – ${CONFIG.groomShort} & ${CONFIG.brideShort}`;
}

/* ============================================================
   GUEST GREETING
============================================================ */
function initGuestGreeting() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("guest");
  const el = document.getElementById("guestGreeting");
  if (guest && el) {
    el.textContent = `🎉 Chào mừng gia đình ${decodeURIComponent(guest)}`;
    el.style.display = "inline-block";
  }
}

/* ============================================================
   TIMELINE
============================================================ */
function initTimeline() {
  const tl = document.getElementById("timeline");
  if (!tl) return;
  CONFIG.timeline.forEach((item, i) => {
    const even = i % 2 === 1;
    tl.innerHTML += `
    <div class="tl-item reveal ${even ? "" : ""}">
      <div class="tl-content">
        <img class="tl-img" src="${item.photo}" alt="${item.title}" loading="lazy" />
        <p class="tl-year">${item.year}</p>
        <h3 class="tl-title">${item.title}</h3>
        <p class="tl-desc">${item.desc}</p>
      </div>
      <div class="tl-dot"></div>
      <div class="tl-content" style="visibility:hidden;pointer-events:none"></div>
    </div>`;
  });
}

/* ============================================================
   COUPLE
============================================================ */
function initCouple() {
  const row = document.getElementById("coupleRow");
  if (!row) return;
  const people = [
    { role: "Chú Rể", name: CONFIG.groomName, bio: CONFIG.groomBio, photo: CONFIG.groomPhoto },
    { role: "Cô Dâu", name: CONFIG.brideName, bio: CONFIG.brideBio, photo: CONFIG.bridePhoto }
  ];
  people.forEach(p => {
    row.innerHTML += `
    <div class="couple-card reveal">
      <div style="overflow:hidden">
        <img class="couple-photo" src="${p.photo}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="couple-info">
        <p class="couple-role">${p.role}</p>
        <h3 class="couple-name">${p.name}</h3>
        <p class="couple-bio">${p.bio}</p>
      </div>
    </div>`;
  });
}

/* ============================================================
   FAMILY
============================================================ */
function initFamily() {
  const cols = document.getElementById("familyCols");
  if (!cols) return;
  [CONFIG.groomFamily, CONFIG.brideFamily].forEach(fam => {
    const label = fam === CONFIG.groomFamily ? "Nhà Trai" : "Nhà Gái" ;
    cols.innerHTML += `
    <div class="family-card reveal">
      <p class="family-side">${label}</p>
      <h3 class="family-title">${fam.title}</h3>
      <div class="family-info">
        <p><strong>Cha:</strong>${fam.father}</p>
        <p><strong>Mẹ:</strong>${fam.mother}</p>
      </div>
      <div class="family-addr"><strong>📍 Địa chỉ:</strong><br>${fam.address}</div>
    </div>`;
  });
}

/* ============================================================
   EVENTS
============================================================ */
function initEvents() {
  const row = document.getElementById("eventsRow");
  if (!row) return;
  CONFIG.events.forEach(ev => {
    row.innerHTML += `
    <div class="event-card reveal">
      <div class="event-header">
        <div class="event-icon">${ev.icon}</div>
        <h3 class="event-title">${ev.title}</h3>
      </div>
      <div class="event-body">
        <div class="event-row"><span class="eico">📅</span><span><strong>${ev.date}</strong></span></div>
        <div class="event-row"><span class="eico">⏰</span><span>${ev.time}</span></div>
        <div class="event-row"><span class="eico">📍</span><span><strong>${ev.location}</strong></span></div>
        <div class="event-row"><span class="eico">🏠</span><span style="font-size:.82rem">${ev.address}</span></div>
        <a href="${ev.mapsUrl}" target="_blank" rel="noopener" class="btn-map">🗺️ Xem Bản Đồ</a>
      </div>
    </div>`;
  });
}

/* ============================================================
   COUNTDOWN
============================================================ */
function initCountdown() {
  const target = new Date(CONFIG.weddingDate).getTime();
  const cDays = document.getElementById("cDays");
  const cHours = document.getElementById("cHours");
  const cMins = document.getElementById("cMins");
  const cSecs = document.getElementById("cSecs");
  const cdMsg = document.getElementById("cdMsg");

  function update() {
    const now = Date.now();
    const diff = target - now;
    if (!cDays) return;
    if (diff <= 0) {
      cDays.textContent = "00";
      cHours.textContent = "00";
      cMins.textContent = "00";
      cSecs.textContent = "00";
      if (cdMsg) cdMsg.textContent = "🎉 Hôm nay là ngày cưới! Chúc mừng hạnh phúc!";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cDays.textContent = String(d).padStart(2,"0");
    cHours.textContent = String(h).padStart(2,"0");
    cMins.textContent = String(m).padStart(2,"0");
    cSecs.textContent = String(s).padStart(2,"0");
    if (cdMsg) cdMsg.textContent = d > 0 ? `Còn ${d} ngày nữa là đến ngày cưới! 💕` : "Ngày trọng đại đã đến! 🎊";
  }
  update();
  setInterval(update, 1000);
}

/* ============================================================
   GALLERY
============================================================ */
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  lbPhotos = CONFIG.gallery;
  CONFIG.gallery.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "masonry-item reveal";
    item.innerHTML = `<img src="${img.src}" alt="${img.cap}" loading="lazy" />`;
    item.onclick = () => openLB(i, CONFIG.gallery);
    grid.appendChild(item);
  });
}

/* ============================================================
   RSVP
============================================================ */
function initRSVP() {
  renderRSVPList();
}

function submitRSVP(e) {
  e.preventDefault();
  const name = document.getElementById("rName").value.trim();
  const phone = document.getElementById("rPhone").value.trim();
  const guests = document.getElementById("rGuests").value;
  const msg = document.getElementById("rMsg").value.trim();
  if (!name) { showToast("Vui lòng nhập họ tên!"); return; }

  const entry = { name, phone, guests, msg, time: new Date().toLocaleString("vi-VN") };
  const stored = JSON.parse(localStorage.getItem("weddingRSVP") || "[]");
  stored.unshift(entry);
  localStorage.setItem("weddingRSVP", JSON.stringify(stored));

  document.getElementById("rsvpForm").classList.add("hidden");
  document.getElementById("rsvpOk").classList.remove("hidden");
  renderRSVPList();
}

function resetRSVP() {
  document.getElementById("rsvpForm").classList.remove("hidden");
  document.getElementById("rsvpOk").classList.add("hidden");
  document.getElementById("rsvpForm").reset();
}

function renderRSVPList() {
  const list = document.getElementById("rsvpGuestList");
  if (!list) return;
  const stored = JSON.parse(localStorage.getItem("weddingRSVP") || "[]");
  if (stored.length === 0) { list.innerHTML = ""; return; }
  list.innerHTML = `<h4 style="font-size:.88rem;font-weight:600;color:var(--text-soft);margin-bottom:.8rem">Đã xác nhận (${stored.length} khách)</h4>`;
  stored.slice(0,8).forEach(e => {
    list.innerHTML += `
    <div class="rsvp-entry">
      <div>
        <span class="rsvp-entry-name">👤 ${e.name}</span>
        ${e.msg ? `<div style="font-size:.78rem;color:var(--text-soft);margin-top:.2rem">💬 "${e.msg}"</div>` : ""}
      </div>
      <span class="rsvp-entry-detail">${e.guests} người</span>
    </div>`;
  });
}

/* ============================================================
   SHARE
============================================================ */
function initShare() {
  const qrBox = document.getElementById("qrBox");
  if (!qrBox) return;
  const url = window.location.href.split("?")[0];
  try {
    new QRCode(qrBox, {
      text: url,
      width: 160,
      height: 160,
      colorDark: "#3a2c1e",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  } catch(e) {
    qrBox.innerHTML = `<div style="width:160px;height:160px;background:var(--orange-pale);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.78rem;color:var(--text-soft);padding:1rem;text-align:center">QR Code<br><small>${url}</small></div>`;
  }
}

function shareToFB() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}
function shareToMessenger() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/dialog/send?link=${url}&app_id=291494419107518&redirect_uri=${url}`, "_blank");
}
function shareToZalo() {
  window.open(`https://zalo.me/share?url=${encodeURIComponent(window.location.href)}`, "_blank");
}
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("✓ Đã sao chép link thiệp cưới!");
  }).catch(() => {
    showToast("Link: " + window.location.href);
  });
}

/* ============================================================
   LIGHTBOX
============================================================ */
function openLB(index, photos) {
  lbPhotos = photos;
  lbIndex = index;
  renderLB();
  const lb = document.getElementById("lightbox");
  lb.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeLB() {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.style.overflow = "";
}
function lbNav(dir) {
  lbIndex = (lbIndex + dir + lbPhotos.length) % lbPhotos.length;
  renderLB();
}
function renderLB() {
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCaption");
  const counter = document.getElementById("lbCounter");
  const photo = lbPhotos[lbIndex];
  if (!img || !photo) return;
  img.style.opacity = 0;
  img.src = photo.src || photo;
  img.alt = photo.cap || "";
  img.onload = () => { img.style.transition = "opacity .3s"; img.style.opacity = 1; };
  if (cap) cap.textContent = photo.cap || "";
  if (counter) counter.textContent = `${lbIndex+1} / ${lbPhotos.length}`;
}
document.addEventListener("keydown", e => {
  const lb = document.getElementById("lightbox");
  if (lb && !lb.classList.contains("hidden")) {
    if (e.key === "ArrowRight") lbNav(1);
    if (e.key === "ArrowLeft") lbNav(-1);
    if (e.key === "Escape") closeLB();
  }
});

/* ============================================================
   MUSIC PLAYER
============================================================ */
function initMusicPlayer() {
  const btn = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");
  const bars = document.getElementById("musicBars");
  if (!btn || !audio) return;

  audio.src = CONFIG.musicFile;

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        btn.querySelector(".ic-play").classList.add("hidden");
        btn.querySelector(".ic-pause").classList.remove("hidden");
        bars && bars.classList.add("playing");
      }).catch(() => showToast("Không thể phát nhạc. Vui lòng thêm file nhạc vào thư mục /music/"));
    } else {
      audio.pause();
      btn.querySelector(".ic-play").classList.remove("hidden");
      btn.querySelector(".ic-pause").classList.add("hidden");
      bars && bars.classList.remove("playing");
    }
  });
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ============================================================
   ALBUM FILTER & RENDER
============================================================ */
function initAlbumFilter() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      renderAlbum(cat);
    });
  });
}

function renderAlbum(cat) {
  const grid = document.getElementById("albumGrid");
  const noPhotos = document.getElementById("noPhotos");
  if (!grid) return;

  const filtered = cat === "all"
    ? CONFIG.albumImages
    : CONFIG.albumImages.filter(img => img.cat === cat);

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noPhotos && noPhotos.classList.remove("hidden");
    return;
  }
  noPhotos && noPhotos.classList.add("hidden");

  filtered.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "masonry-item";
    item.style.animationDelay = `${i * 0.04}s`;
    item.innerHTML = `<img src="${img.src}" alt="${img.cap}" loading="lazy" />`;
    item.onclick = () => openLB(i, filtered);
    grid.appendChild(item);
  });

  // Re-init scroll reveal for album
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "scale(1)";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  grid.querySelectorAll(".masonry-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "scale(0.95)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
    io.observe(el);
  });
}

/* ============================================================
   PARTICLES – Hearts & Petals
============================================================ */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = -30;
      this.size = 8 + Math.random() * 14;
      this.speedY = 0.6 + Math.random() * 1.2;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.opacity = 0.5 + Math.random() * 0.5;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.06;
      this.type = Math.random() < 0.4 ? "heart" : "petal";
      this.hue = Math.random() < 0.5 ? "247,163,106" : "255,180,150";
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.4;
      this.angle += this.spin;
      if (this.y > H + 30) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      if (this.type === "heart") {
        drawHeart(ctx, this.size, this.hue);
      } else {
        drawPetal(ctx, this.size, this.hue);
      }
      ctx.restore();
    }
  }

  function drawHeart(ctx, s, hue) {
    const r = s / 2;
    ctx.beginPath();
    ctx.moveTo(0, r * 0.35);
    ctx.bezierCurveTo(-r * 0.5, -r * 0.3, -r, r * 0.15, 0, r);
    ctx.bezierCurveTo(r, r * 0.15, r * 0.5, -r * 0.3, 0, r * 0.35);
    ctx.fillStyle = `rgba(${hue},0.85)`;
    ctx.fill();
  }

  function drawPetal(ctx, s, hue) {
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.3, s * 0.7, 0, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hue},0.7)`;
    ctx.fill();
  }

  // Create particles
  const N = window.innerWidth < 600 ? 16 : 28;
  for (let i = 0; i < N; i++) {
    const p = new Particle();
    p.y = Math.random() * H; // spread initially
    particles.push(p);
  }

  let lastTime = 0;
  function loop(ts) {
    if (ts - lastTime < 40) { requestAnimationFrame(loop); return; } // ~25fps
    lastTime = ts;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, duration = 2800) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add("hidden"), duration);
}

/* ============================================================
   UTILITY
============================================================ */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
