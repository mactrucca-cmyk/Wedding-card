/* ============================================================
   WEDDING INVITATION – script.js
   Thiệp Cưới Online Cao Cấp – Tiếng Việt
============================================================ */

/* ============================================================
   ⚙️  CẤU HÌNH – Chỉnh sửa thông tin tại đây
============================================================ */
const CONFIG = {
  groomName:  "Lâm Tứ Nhật",
  groomShort: "Nhật",
  groomBio:   "",
  groomPhoto: "images/BEN_0690.jpg",

  brideName:  "Đoàn Thị Tú Trinh",
  brideShort: "Trinh",
  brideBio:   "",
  bridePhoto: "images/BEN_0610.jpg",

  weddingDate:        "2026-05-10T11:00:00",
  weddingDateDisplay: "10 · 05 · 2026",

  groomFamily: {
    title:   " ",
    father:  "Lâm Tứ Thông",
    mother:  "Phan Thị Liên Hoa",
    address: "Trần Hưng Đạo, Phường Phú Xuân, thành phố Huế"
  },
  brideFamily: {
    title:   " ",
    father:  "Đoàn Minh Sơn",
    mother:  "Đoàn Thị Tý",
    address: "Tổ 29 khu phố Vườn Dừa, Phường Phước Tân, Đồng Nai"
  },

  events: [
    {
      icon:     "🥂",
      title:    "Tiệc Vu Quy",
      date:     "Chủ Nhật, 10/05/2026",
      time:     "11:00 – 14:00",
      location: "Nhà hàng Phố Đôi",
      address:  "737 Xa Lộ Hà Nội, Phường Long Bình, Đồng Nai",
      mapsUrl:  "https://maps.app.goo.gl/bctJtPu2CHb9Twjz7"
    },
    {
      icon:     "🎊",
      title:    "Tiệc Thành Hôn",
      date:     "Chủ Nhật, 14/06/2026",
      time:     "11:00 – 14:00",
      location: "Nhà hàng White Lotus – Sảnh Boulevard",
      address:  "05-07 Hoàng Hoa Thám, Phú Nhuận, Huế",
      mapsUrl:  "https://maps.app.goo.gl/gg437btm5JHEB8f87"
    }
  ],

  contactPhone: "0366 432 416",
  musicFile:    "music/romantic.mp3",

  timeline: [
    {
      year:  "2023",
      title: "Lời Cầu Hôn",
      desc:  "Một khoảnh khắc thiêng liêng, anh quỳ xuống với trái tim đầy yêu thương. Em đã gật đầu đồng ý trong niềm hạnh phúc vỡ oà.",
      photo: "images/01.jpg"
    },
    {
      year:  "2026",
      title: "Ngày Trọng Đại",
      desc:  "Hôm nay, chúng tôi cùng nhau bước vào một chương mới của cuộc đời. Trước sự chứng kiến của gia đình và những người thân yêu, chúng tôi nguyện cùng nhau mãi mãi.",
      photo: "images/02.jpg"
    }
  ],

  /* ----------------------------------------------------------
     GALLERY – ảnh từ folder images/
     Thêm tên file ảnh vào đây (đặt file vào thư mục images/)
     Định dạng: { src: "images/TEN_FILE.jpg", cap: "Chú thích" }
  ---------------------------------------------------------- */
  gallery: [
    { src: "images/BEN_0610.jpg", cap: "Cô dâu xinh đẹp" },
    { src: "images/BEN_0690.jpg", cap: "Chú rể lịch lãm" },
    { src: "images/01.jpg",       cap: "Lời cầu hôn" },
    { src: "images/02.jpg",       cap: "Ngày trọng đại" },
    // Thêm ảnh tại đây:
    // { src: "images/TEN_ANH.jpg", cap: "Chú thích ảnh" },
  ],

  /* ----------------------------------------------------------
     ALBUM – ảnh phân theo danh mục
     cat: "dinh-hon" | "anh-cuoi"
     Thêm ảnh vào đây theo đúng định dạng bên dưới
  ---------------------------------------------------------- */
  albumImages: [
    { src: "images/BEN_0610.jpg", cat: "anh-cuoi", cap: "Cô dâu" },
    { src: "images/BEN_0690.jpg", cat: "anh-cuoi", cap: "Chú rể" },
    { src: "images/01.jpg",       cat: "dinh-hon", cap: "Cầu hôn" },
    { src: "images/02.jpg",       cat: "anh-cuoi", cap: "Ngày cưới" },
    // Thêm ảnh tại đây:
    // { src: "images/TEN_ANH.jpg", cat: "anh-cuoi", cap: "Chú thích" },
  ]
};

/* ============================================================
   GLOBAL STATE
============================================================ */
let lbPhotos = [];
let lbIndex  = 0;
let isAlbumPage = false;
let _currentGuestUrl = "";

/* ============================================================
   INIT
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
    // Enter key trên ô tên khách
    const inp = document.getElementById("guestNameInput");
    if (inp) inp.addEventListener("keydown", e => { if (e.key === "Enter") generateGuestLink(); });
  }
});

/* ============================================================
   ALBUM PAGE
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
  // Tên hiển thị trong layout mới (hero-name-text)
  _setTxt("heroGroom",  CONFIG.groomShort);
  _setTxt("heroBride",  CONFIG.brideShort);
  _setTxt("heroDate",   CONFIG.weddingDateDisplay);
  _setHTML("footerNames", `${CONFIG.groomShort} &amp; ${CONFIG.brideShort}`);
  _setTxt("footerDate", CONFIG.weddingDateDisplay);
  const ft = document.getElementById("footerTel");
  if (ft) ft.innerHTML = `Liên hệ: <a href="tel:${CONFIG.contactPhone.replace(/\s/g,"")}">${CONFIG.contactPhone}</a>`;
  const pt = document.getElementById("pageTitle");
  if (pt) pt.textContent = `Thiệp Cưới – ${CONFIG.groomShort} & ${CONFIG.brideShort}`;

  // Logo: thử load từ images/logo.png trước, sau đó logo.png cùng thư mục
  const logoImg = document.querySelector(".hero-logo-img");
  if (logoImg) {
    // Thứ tự ưu tiên: images/logo.png → logo.png → fallback SVG hiện ra
    logoImg.onerror = function() {
      // Thử đường dẫn thứ 2
      if (this.src.includes("images/logo.png")) {
        this.src = "logo.png";
      } else {
        // Không tìm thấy → hiện SVG fallback
        this.style.display = "none";
        const svg = document.getElementById("heroLogoBg");
        if (svg) svg.classList.remove("hidden");
      }
    };
    logoImg.src = "images/logo.png";
  }
}

/* ============================================================
   GUEST GREETING – đọc từ URL ?guest=Ten
============================================================ */
function initGuestGreeting() {
  const params = new URLSearchParams(window.location.search);
  const guest  = params.get("guest");
  const el     = document.getElementById("guestGreeting");
  if (guest && el) {
    const name = decodeURIComponent(guest);
    el.textContent = `🎉 ${name}`;
    el.style.display = "inline-block";
  }
}

/* ============================================================
   TIMELINE
============================================================ */
function initTimeline() {
  const tl = document.getElementById("timeline");
  if (!tl) return;
  CONFIG.timeline.forEach((item) => {
    tl.innerHTML += `
    <div class="tl-item reveal">
      <div class="tl-content">
        <img class="tl-img" src="${item.photo}" alt="${item.title}" loading="lazy"
             onerror="this.style.display='none'" />
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
  [
    { role: "Chú Rể", name: CONFIG.groomName, bio: CONFIG.groomBio, photo: CONFIG.groomPhoto },
    { role: "Cô Dâu", name: CONFIG.brideName, bio: CONFIG.brideBio, photo: CONFIG.bridePhoto }
  ].forEach(p => {
    row.innerHTML += `
    <div class="couple-card reveal">
      <div style="overflow:hidden">
        <img class="couple-photo" src="${p.photo}" alt="${p.name}" loading="lazy"
             onerror="this.style.background='var(--cream)'" />
      </div>
      <div class="couple-info">
        <p class="couple-role">${p.role}</p>
        <h3 class="couple-name">${p.name}</h3>
        ${p.bio ? `<p class="couple-bio">${p.bio}</p>` : ""}
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
  [CONFIG.groomFamily, CONFIG.brideFamily].forEach((fam, i) => {
    const label = i === 0 ? "Nhà Trai" : "Nhà Gái";
    cols.innerHTML += `
    <div class="family-card reveal">
      <p class="family-side">${label}</p>
      <h3 class="family-title">${fam.title || ""}</h3>
      <div class="family-info">
        <p><strong>Cha:</strong> ${fam.father}</p>
        <p><strong>Mẹ:</strong> ${fam.mother}</p>
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
  const ids    = ["cDays","cHours","cMins","cSecs"];
  const els    = ids.map(id => document.getElementById(id));
  const cdMsg  = document.getElementById("cdMsg");

  function update() {
    const diff = target - Date.now();
    if (!els[0]) return;
    if (diff <= 0) {
      els.forEach(e => { if (e) e.textContent = "00"; });
      if (cdMsg) cdMsg.textContent = "🎉 Hôm nay là ngày cưới! Chúc mừng hạnh phúc!";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    [d, h, m, s].forEach((v, i) => { if (els[i]) els[i].textContent = String(v).padStart(2,"0"); });
    if (cdMsg) cdMsg.textContent = d > 0
      ? `Còn ${d} ngày nữa là đến ngày cưới! 💕`
      : "Ngày trọng đại đã đến! 🎊";
  }
  update();
  setInterval(update, 1000);
}

/* ============================================================
   GALLERY – từ folder images/
============================================================ */
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  // Lọc bỏ ảnh rỗng / placeholder
  const valid = CONFIG.gallery.filter(img => img.src && img.src.trim() !== "" && !img.src.includes("them ten anh"));
  lbPhotos = valid;

  if (valid.length === 0) {
    grid.innerHTML = `<p style="text-align:center;color:var(--text-soft);padding:2rem;font-size:.9rem">
      Chưa có ảnh. Thêm file ảnh vào thư mục <code>images/</code> và cập nhật mảng <code>CONFIG.gallery</code> trong script.js
    </p>`;
    return;
  }

  valid.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "masonry-item reveal";
    item.innerHTML = `<img src="${img.src}" alt="${img.cap}" loading="lazy"
      onerror="this.closest('.masonry-item').style.display='none'" />`;
    item.onclick = () => openLB(i, valid);
    grid.appendChild(item);
  });
}

/* ============================================================
   RSVP – localStorage
============================================================ */
function initRSVP() { renderRSVPList(); }

function submitRSVP(e) {
  e.preventDefault();
  const name   = document.getElementById("rName").value.trim();
  const phone  = document.getElementById("rPhone").value.trim();
  const guests = document.getElementById("rGuests").value;
  const msg    = document.getElementById("rMsg").value.trim();
  if (!name) { showToast("Vui lòng nhập họ tên!"); return; }

  const entry  = { name, phone, guests, msg, time: new Date().toLocaleString("vi-VN") };
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
  stored.slice(0, 8).forEach(e => {
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
   CHIA SẺ CHUNG
============================================================ */
function initShare() {
  const qrBox = document.getElementById("qrBox");
  if (!qrBox) return;
  _buildQR(qrBox, _baseUrl());
}

function shareToFB()        { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, "_blank"); }
function shareToMessenger() { window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(location.href)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(location.href)}`, "_blank"); }
function shareToZalo()      { window.open(`https://zalo.me/share?url=${encodeURIComponent(location.href)}`, "_blank"); }
function copyLink() {
  navigator.clipboard.writeText(location.href)
    .then(() => showToast("✓ Đã sao chép link thiệp cưới!"))
    .catch(() => showToast("Link: " + location.href));
}

/* ============================================================
   TẠO LINK MỜI KHÁCH CÁ NHÂN
============================================================ */
function generateGuestLink() {
  const input = document.getElementById("guestNameInput");
  const name  = input ? input.value.trim() : "";
  if (!name) { showToast("Vui lòng nhập tên khách mời!"); input && input.focus(); return; }

  const encoded        = encodeURIComponent(name);
  const url            = `${_baseUrl()}?guest=${encoded}`;
  _currentGuestUrl     = url;

  // Hiện result box
  const result = document.getElementById("guestLinkResult");
  if (result) result.classList.remove("hidden");

  // Preview
  const preview = document.getElementById("glrPreview");
  if (preview) preview.innerHTML = `
    <div style="font-size:.78rem;color:var(--text-soft);margin-bottom:.4rem">Khách mời sẽ thấy trên thiệp:</div>
    <strong style="font-size:1.05rem">🎉 ${name}</strong>
    <div style="font-size:.8rem;color:var(--text-soft);margin-top:.3rem">
      Hiển thị bên dưới tên <em>${CONFIG.groomShort} &amp; ${CONFIG.brideShort}</em>, phía trên "Trân trọng kính mời"
    </div>`;

  // URL
  const urlEl = document.getElementById("glrUrl");
  if (urlEl) urlEl.value = url;

  // QR
  const qrEl = document.getElementById("glrQr");
  if (qrEl) {
    qrEl.innerHTML = "";
    const wrap = document.createElement("div");
    qrEl.appendChild(wrap);
    const p = document.createElement("p");
    p.textContent = "Quét QR để mở thiệp";
    qrEl.appendChild(p);
    _buildQR(qrEl, url, wrap);
  }

  showToast(`✓ Đã tạo link cho "${name}"`);
  result && result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function copyGuestLink() {
  if (!_currentGuestUrl) return;
  navigator.clipboard.writeText(_currentGuestUrl)
    .then(() => showToast("✓ Đã sao chép link mời khách!"))
    .catch(() => {
      const u = document.getElementById("glrUrl");
      if (u) { u.select(); document.execCommand("copy"); showToast("✓ Đã sao chép!"); }
    });
}
function shareGuestFB()        { if (_currentGuestUrl) window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(_currentGuestUrl)}`, "_blank"); }
function shareGuestMessenger() { if (_currentGuestUrl) window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(_currentGuestUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(_currentGuestUrl)}`, "_blank"); }
function shareGuestZalo()      { if (_currentGuestUrl) window.open(`https://zalo.me/share?url=${encodeURIComponent(_currentGuestUrl)}`, "_blank"); }

/* ============================================================
   LIGHTBOX
============================================================ */
function openLB(index, photos) {
  lbPhotos = photos;
  lbIndex  = index;
  renderLB();
  document.getElementById("lightbox").classList.remove("hidden");
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
  const img     = document.getElementById("lbImg");
  const cap     = document.getElementById("lbCaption");
  const counter = document.getElementById("lbCounter");
  const photo   = lbPhotos[lbIndex];
  if (!img || !photo) return;
  img.style.opacity = 0;
  img.src   = photo.src || photo;
  img.alt   = photo.cap || "";
  img.onload = () => { img.style.transition = "opacity .3s"; img.style.opacity = 1; };
  if (cap)     cap.textContent     = photo.cap || "";
  if (counter) counter.textContent = `${lbIndex + 1} / ${lbPhotos.length}`;
}
document.addEventListener("keydown", e => {
  const lb = document.getElementById("lightbox");
  if (lb && !lb.classList.contains("hidden")) {
    if (e.key === "ArrowRight") lbNav(1);
    if (e.key === "ArrowLeft")  lbNav(-1);
    if (e.key === "Escape")     closeLB();
  }
});

/* ============================================================
   MUSIC PLAYER
============================================================ */
function initMusicPlayer() {
  const btn   = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");
  const bars  = document.getElementById("musicBars");
  if (!btn || !audio) return;
  audio.src = CONFIG.musicFile;
  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play()
        .then(() => {
          btn.querySelector(".ic-play").classList.add("hidden");
          btn.querySelector(".ic-pause").classList.remove("hidden");
          bars && bars.classList.add("playing");
        })
        .catch(() => showToast("Không thể phát nhạc. Vui lòng thêm file vào /music/"));
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
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
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
      renderAlbum(btn.dataset.cat);
    });
  });
}

function renderAlbum(cat) {
  const grid     = document.getElementById("albumGrid");
  const noPhotos = document.getElementById("noPhotos");
  if (!grid) return;

  const valid    = CONFIG.albumImages.filter(img => img.src && img.src.trim() !== "");
  const filtered = cat === "all" ? valid : valid.filter(img => img.cat === cat);

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noPhotos && noPhotos.classList.remove("hidden");
    return;
  }
  noPhotos && noPhotos.classList.add("hidden");

  filtered.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "masonry-item";
    item.innerHTML = `<img src="${img.src}" alt="${img.cap}" loading="lazy"
      onerror="this.closest('.masonry-item').remove()" />`;
    item.onclick = () => openLB(i, filtered);
    grid.appendChild(item);
  });

  // Fade-in
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = "1";
        e.target.style.transform = "scale(1)";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  grid.querySelectorAll(".masonry-item").forEach(el => {
    el.style.opacity    = "0";
    el.style.transform  = "scale(0.95)";
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

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x       = Math.random() * W;
      this.y       = init ? Math.random() * H : -30;
      this.size    = 8 + Math.random() * 14;
      this.speedY  = 0.6 + Math.random() * 1.2;
      this.speedX  = (Math.random() - 0.5) * 0.8;
      this.opacity = 0.4 + Math.random() * 0.5;
      this.angle   = Math.random() * Math.PI * 2;
      this.spin    = (Math.random() - 0.5) * 0.06;
      this.type    = Math.random() < 0.4 ? "heart" : "petal";
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
        const r = this.size / 2;
        ctx.beginPath();
        ctx.moveTo(0, r * 0.35);
        ctx.bezierCurveTo(-r * 0.5, -r * 0.3, -r, r * 0.15, 0, r);
        ctx.bezierCurveTo(r, r * 0.15, r * 0.5, -r * 0.3, 0, r * 0.35);
        ctx.fillStyle = "rgba(247,163,106,0.85)";
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.3, this.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,180,150,0.7)";
        ctx.fill();
      }
      ctx.restore();
    }
  }

  const N = window.innerWidth < 600 ? 16 : 26;
  for (let i = 0; i < N; i++) particles.push(new Particle());

  let lastTime = 0;
  (function loop(ts) {
    if (ts - lastTime < 40) { requestAnimationFrame(loop); return; }
    lastTime = ts;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })(0);
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, duration = 2800) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.id = "toast"; document.body.appendChild(t); }
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
function _setTxt(id, val)  { const e = document.getElementById(id); if (e) e.textContent = val; }
function _setHTML(id, val) { const e = document.getElementById(id); if (e) e.innerHTML   = val; }
function _baseUrl()        { return window.location.href.split("?")[0]; }

function _buildQR(container, url, targetEl) {
  const wrap = targetEl || container;
  if (!wrap) return;
  try {
    new QRCode(wrap, {
      text: url, width: 160, height: 160,
      colorDark: "#3a2c1e", colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  } catch (err) {
    wrap.innerHTML = `<div style="width:160px;height:160px;background:var(--orange-pale);border-radius:10px;
      display:flex;align-items:center;justify-content:center;font-size:.7rem;
      color:var(--text-soft);padding:.8rem;text-align:center;word-break:break-all">${url}</div>`;
  }
}
