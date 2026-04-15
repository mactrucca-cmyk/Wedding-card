/* ============================================================
   WEDDING INVITATION – script.js
   Thiệp Cưới Online – Nhật & Trinh
============================================================ */

/* ============================================================
   ⚙️  CẤU HÌNH
============================================================ */
const CONFIG = {
  groomName:  "Lâm Tứ Nhật",
  groomShort: "Tứ Nhật",
  groomBio:   "",
  groomPhoto: "images/BEN_0690.jpg",

  brideName:  "Đoàn Thị Tú Trinh",
  brideShort: "Tú Trinh",
  brideBio:   "",
  bridePhoto: "images/BEN_0610.jpg",

  logoFile: "logo.png",

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
      icon: "🥂", title: "Tiệc Vu Quy",
      date: "Chủ Nhật, 10/05/2026", time: "11:00 – 14:00",
      location: "Nhà hàng Phố Đôi",
      address: "737 Xa Lộ Hà Nội, Phường Long Bình, Đồng Nai",
      mapsUrl: "https://maps.app.goo.gl/bctJtPu2CHb9Twjz7"
    },
    {
      icon: "🎊", title: "Tiệc Thành Hôn",
      date: "Chủ Nhật, 14/06/2026", time: "11:00 – 14:00",
      location: "Nhà hàng White Lotus – Sảnh Boulevard",
      address: "05-07 Hoàng Hoa Thám, Phú Nhuận, Huế",
      mapsUrl: "https://maps.app.goo.gl/gg437btm5JHEB8f87"
    }
  ],

  contactPhone: "0366 432 416",
  musicFile:    "music/romantic.mp3",

  googleScriptUrl: "https://script.google.com/macros/s/AKfycbwMF1xAyzKHFBSETwAFvCO7fbZd3kuAumh3gBU4dxlOmVFEbG07MCYDAuRqxPxJz1ys7Q/exec",

  timeline: [
    {
      year: "2024", title: "Lời Cầu Hôn",
      desc: "Một khoảnh khắc thiêng liêng, với trái tim đầy yêu thương.",
      photo: "images/02.jpg"
    },
    {
      year: "2026", title: "Ngày Trọng Đại",
      desc: "Hôm nay, chúng tôi cùng nhau bước vào một chương mới của cuộc đời. Trước sự chứng kiến của gia đình và những người thân yêu, chúng tôi nguyện cùng nhau mãi mãi.",
      photo: "images/01.jpg"
    }
  ],

  gallery: [
        { src: "images/01.jpg",       cap: "Ngày trọng đại" },
     { src: "images/02.jpg",       cap: "Ngày trọng đại" },
     { src: "images/BEN_0610.jpg", cap: "Cô dâu xinh đẹp" },
    { src: "images/BEN_0690.jpg", cap: "Chú rể lịch lãm" },
    { src: "images/BEN_9264.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_9164.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_9555.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_8571.jpg",       cap: "Ngày trọng đại" },
    { src: "images/03.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_0232.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_0044.jpg", cap: "Ngày trọng đại" },
    { src: "images/BEN_0166.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_0250.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_0477.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_0577.jpg",       cap: "Ngày trọng đại" },
    { src: "images/BEN_0610.jpg",       cap: "Ngày trọng đại" },
  ],

  albumImages: [
    { src: "images/01.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/02.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },    
     { src: "images/BEN_0610.jpg", cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
    { src: "images/BEN_0690.jpg", cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
    { src: "images/03.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
    { src: "images/BEN_0232.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_0044.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_0166.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_0250.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                   { src: "images/BEN_0270.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                  { src: "images/BEN_0333.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                   { src: "images/BEN_0371.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_0477.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_0577.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_0610.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                    { src: "images/BEN_7563.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_7720.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_7791.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                        { src: "images/BEN_7904.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8046.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8160.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8204.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8307.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                       { src: "images/BEN_8375.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8469.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
                      { src: "images/BEN_8537.jp",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8571.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8683.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8726.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_8954.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9077.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9091.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9164.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9264.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9304.jpg",       cat: "dinh-hon", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9318.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9495.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9555.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9587.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9643.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9737.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
     { src: "images/BEN_9794.jpg",       cat: "anh-cuoi", cap: "Ảnh cưới đẹp" },
   ]
};

/* ============================================================
   GLOBAL STATE
============================================================ */
let lbPhotos = [], lbIndex = 0;
let isAlbumPage = false;
let _currentGuestUrl = "";
let _isGuestMode = false;

/* ============================================================
   INIT
   BUG FIX: initMusicPlayer() được gọi đúng chỗ,
   không còn bị khai báo lồng bên trong DOMContentLoaded
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  isAlbumPage  = document.body.classList.contains("album-page");
  _isGuestMode = new URLSearchParams(window.location.search).has("guest");

  initParticles();
  initMusicPlayer(); // ← FIX: gọi đúng chỗ

  if (!isAlbumPage) {
    initHero();
    initGuestMode();
    initTimeline();
    initCouple();
    initFamily();
    initEvents();
    initCountdown();
    initGallery();
    initRSVP();
    if (!_isGuestMode) initShare();
    initScrollReveal();
    const inp = document.getElementById("guestNameInput");
    if (inp) inp.addEventListener("keydown", e => { if (e.key === "Enter") generateGuestLink(); });
  }
});

/* ============================================================
   ALBUM PAGE
============================================================ */
function initAlbumPage() {
  initParticles();
  initMusicPlayer(); // nhạc chạy cả trang album
  initAlbumFilter();
  renderAlbum("all");
}

/* ============================================================
   HERO
============================================================ */
function initHero() {
  _setTxt("heroGroom",  CONFIG.groomShort);
  _setTxt("heroBride",  CONFIG.brideShort);
  _setTxt("heroDate",   CONFIG.weddingDateDisplay);
  _setHTML("footerNames", `${CONFIG.groomShort} &amp; ${CONFIG.brideShort}`);
  _setTxt("footerDate",  CONFIG.weddingDateDisplay);
  const ft = document.getElementById("footerTel");
  if (ft) ft.innerHTML = `Liên hệ: <a href="tel:${CONFIG.contactPhone.replace(/\s/g,"")}">${CONFIG.contactPhone}</a>`;
  const pt = document.getElementById("pageTitle");
  if (pt) pt.textContent = `Thiệp Cưới – ${CONFIG.groomShort} & ${CONFIG.brideShort}`;

  const ring = document.getElementById("heroLogoRing");
  if (!ring) return;
  const img = document.createElement("img");
  img.className = "hero-logo-img";
  img.alt = `${CONFIG.groomShort} & ${CONFIG.brideShort}`;
  const svgFallback = _makeLogoSVG();
  img.onload  = () => { svgFallback.remove(); };
  img.onerror = () => { img.remove(); };
  ring.appendChild(svgFallback);
  ring.appendChild(img);
  img.src = CONFIG.logoFile;
}

function _makeLogoSVG() {
  const ns  = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox","0 0 200 200");
  svg.setAttribute("class","hero-logo-svg");
  svg.innerHTML = `
    <circle cx="100" cy="100" r="94" fill="none" stroke="#c9a96e" stroke-width="1.2" opacity="0.55"/>
    <text x="100" y="76"  text-anchor="middle" font-family="Playfair Display,serif" font-size="64" font-weight="400" fill="#c9a96e" opacity="0.9">N</text>
    <text x="100" y="112" text-anchor="middle" font-family="Playfair Display,serif" font-size="34" font-weight="300" fill="#c9a96e" opacity="0.65">&amp;</text>
    <text x="100" y="166" text-anchor="middle" font-family="Playfair Display,serif" font-size="64" font-weight="400" fill="#c9a96e" opacity="0.9">T</text>`;
  return svg;
}

/* ============================================================
   GUEST MODE
============================================================ */
function initGuestMode() {
  const params = new URLSearchParams(window.location.search);
  const guest  = params.get("guest");

  if (guest) {
    const name    = decodeURIComponent(guest);
    const greetEl = document.getElementById("guestGreeting");
    if (greetEl) {greetEl.textContent = ` ${name}`; greetEl.style.display = "inline-block"; }

    // Ẩn section chỉ dành cho chủ thiệp
    document.querySelectorAll(".owner-only").forEach(el => el.style.display = "none");

    // Hiện QR trong hero
    const qrWrap = document.getElementById("heroGuestQr");
    if (qrWrap) {
      qrWrap.classList.remove("hidden");
      const qrBox = document.getElementById("hgqQrBox");
      if (qrBox) _buildQR(qrBox, window.location.href);
    }
  } else {
    const qrWrap = document.getElementById("heroGuestQr");
    if (qrWrap) qrWrap.style.display = "none";
  }
}

/* ============================================================
   TIMELINE
============================================================ */
function initTimeline() {
  const tl = document.getElementById("timeline");
  if (!tl) return;
  CONFIG.timeline.forEach(item => {
    tl.innerHTML += `
    <div class="tl-item reveal">
      <div class="tl-content">
        <img class="tl-img" src="${item.photo}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'"/>
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
    { role:"Chú Rể", name:CONFIG.groomName, bio:CONFIG.groomBio, photo:CONFIG.groomPhoto },
    { role:"Cô Dâu", name:CONFIG.brideName, bio:CONFIG.brideBio, photo:CONFIG.bridePhoto }
  ].forEach(p => {
    row.innerHTML += `
    <div class="couple-card reveal">
      <div style="overflow:hidden">
        <img class="couple-photo" src="${p.photo}" alt="${p.name}" loading="lazy" onerror="this.style.background='var(--cream)'"/>
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
    cols.innerHTML += `
    <div class="family-card reveal">
      <p class="family-side">${i===0?"Nhà Trai":"Nhà Gái"}</p>
      <h3 class="family-title">${fam.title||""}</h3>
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
  const ids = ["cDays","cHours","cMins","cSecs"];
  const els = ids.map(id => document.getElementById(id));
  const cdMsg = document.getElementById("cdMsg");
  function update() {
    const diff = target - Date.now();
    if (!els[0]) return;
    if (diff <= 0) {
      els.forEach(e => { if(e) e.textContent="00"; });
      if (cdMsg) cdMsg.textContent = "🎉 Hôm nay là ngày cưới! Chúc mừng hạnh phúc!";
      return;
    }
    const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000),
          m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
    [d,h,m,s].forEach((v,i)=>{ if(els[i]) els[i].textContent=String(v).padStart(2,"0"); });
    if (cdMsg) cdMsg.textContent = d>0 ? `Còn ${d} ngày nữa là đến ngày cưới! 💕` : "Ngày trọng đại đã đến! 🎊";
  }
  update(); setInterval(update, 1000);
}

/* ============================================================
   GALLERY
============================================================ */
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  const valid = CONFIG.gallery.filter(img => img.src && img.src.trim());
  lbPhotos = valid;
  if (valid.length === 0) {
    grid.innerHTML = `<p style="text-align:center;color:var(--text-soft);padding:2rem;font-size:.9rem">Chưa có ảnh. Thêm file vào <code>images/</code> và cập nhật <code>CONFIG.gallery</code>.</p>`;
    return;
  }
  valid.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "masonry-item reveal";
    item.innerHTML = `<img src="${img.src}" alt="${img.cap}" loading="lazy" onerror="this.closest('.masonry-item').style.display='none'"/>`;
    item.onclick = () => openLB(i, valid);
    grid.appendChild(item);
  });
}

/* ============================================================
   RSVP – Google Sheet + localStorage
============================================================ */
function initRSVP() { renderRSVPList(); }

async function submitRSVP(e) {
  e.preventDefault();
  const name    = document.getElementById("rName").value.trim();
  const phone   = document.getElementById("rPhone").value.trim();
  const guests  = document.getElementById("rGuests").value;
  const attend  = document.getElementById("rAttend").value;
  const msg     = document.getElementById("rMsg").value.trim();
  const eventEl = document.querySelector('input[name="rEvent"]:checked');
  const event   = eventEl ? eventEl.value : "Chưa chọn";

  if (!name) { showToast("Vui lòng nhập họ tên!"); return; }

  const data = { name, phone, event, guests, attend, msg, time: new Date().toLocaleString("vi-VN") };

  const btn    = document.getElementById("rsvpSubmitBtn");
  const btnTxt = document.getElementById("rsvpBtnTxt");
  const dots   = document.getElementById("rsvpDots");
  if (btn) btn.disabled = true;
  if (btnTxt) btnTxt.classList.add("hidden");
  if (dots) dots.classList.remove("hidden");

  // localStorage backup
  const stored = JSON.parse(localStorage.getItem("weddingRSVP") || "[]");
  stored.unshift(data);
  localStorage.setItem("weddingRSVP", JSON.stringify(stored));

  // Gửi Google Sheet
  if (CONFIG.googleScriptUrl && CONFIG.googleScriptUrl.startsWith("http")) {
    try {
      await fetch(CONFIG.googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    } catch(err) {
      console.warn("Google Sheet: lỗi gửi, đã lưu local.", err);
    }
  }

  setTimeout(() => {
    if (btn) btn.disabled = false;
    if (btnTxt) btnTxt.classList.remove("hidden");
    if (dots) dots.classList.add("hidden");
    document.getElementById("rsvpForm").classList.add("hidden");
    const ok = document.getElementById("rsvpOk");
    if (ok) ok.classList.remove("hidden");
    const okMsg = document.getElementById("rsvpOkMsg");
    if (okMsg) {
      okMsg.textContent = attend === "khong"
        ? "Rất tiếc bạn không thể tham dự. Chúng tôi trân trọng lời hồi âm của bạn 💕"
        : `Chúng tôi rất mong được gặp bạn tại ${event} 🎉`;
    }
    renderRSVPList();
  }, 700);
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
  list.innerHTML = `<h4 style="font-size:.85rem;font-weight:600;color:var(--text-soft);margin-bottom:.8rem">Đã xác nhận (${stored.length} khách)</h4>`;
  stored.slice(0,6).forEach(e => {
    list.innerHTML += `
    <div class="rsvp-entry">
      <div>
        <span class="rsvp-entry-name">👤 ${e.name}</span>
        <div style="font-size:.76rem;color:var(--text-soft);margin-top:.2rem">${e.event||""} · ${e.guests||""} người</div>
        ${e.msg?`<div style="font-size:.76rem;color:var(--text-soft);margin-top:.15rem">💬 "${e.msg}"</div>`:""}
      </div>
      <span class="rsvp-entry-detail">${e.attend==="co"?"✅":"❌"}</span>
    </div>`;
  });
}

/* ============================================================
   SHARE
============================================================ */
function initShare() {
  const qrBox = document.getElementById("qrBox");
  if (!qrBox) return;
  _buildQR(qrBox, _baseUrl());
}
function shareToFB()        { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`,"_blank"); }
function shareToMessenger() { window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(location.href)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(location.href)}`,"_blank"); }
function shareToZalo()      { window.open(`https://zalo.me/share?url=${encodeURIComponent(location.href)}`,"_blank"); }
function copyLink() {
  navigator.clipboard.writeText(location.href)
    .then(()=>showToast("✓ Đã sao chép link thiệp cưới!"))
    .catch(()=>showToast("Link: "+location.href));
}

/* ============================================================
   TẠO LINK KHÁCH
============================================================ */
function generateGuestLink() {
  const input = document.getElementById("guestNameInput");
  const name  = input ? input.value.trim() : "";
  if (!name) { showToast("Vui lòng nhập tên khách mời!"); input&&input.focus(); return; }

  const url = `${_baseUrl()}?guest=${encodeURIComponent(name)}`;
  _currentGuestUrl = url;

  const result = document.getElementById("guestLinkResult");
  if (result) result.classList.remove("hidden");

  const preview = document.getElementById("glrPreview");
  if (preview) preview.innerHTML = `
    <div style="font-size:.76rem;color:var(--text-soft);margin-bottom:.35rem">Khách mời sẽ thấy:</div>
    <strong>🎉 ${name}</strong>
    <div style="font-size:.78rem;color:var(--text-soft);margin-top:.25rem">Hiển thị bên dưới tên <em>${CONFIG.groomShort} &amp; ${CONFIG.brideShort}</em></div>`;

  const urlEl = document.getElementById("glrUrl");
  if (urlEl) urlEl.value = url;

  const qrEl = document.getElementById("glrQr");
  if (qrEl) {
    qrEl.innerHTML = "";
    _buildQR(qrEl, url);
    const p = document.createElement("p");
    p.textContent = "Quét QR để mở thiệp";
    qrEl.appendChild(p);
  }

  showToast(`✓ Đã tạo link cho "${name}"`);
  result && result.scrollIntoView({ behavior:"smooth", block:"nearest" });
}

function copyGuestLink() {
  if (!_currentGuestUrl) return;
  navigator.clipboard.writeText(_currentGuestUrl)
    .then(()=>showToast("✓ Đã sao chép link mời khách!"))
    .catch(()=>{ const u=document.getElementById("glrUrl"); if(u){u.select();document.execCommand("copy");showToast("✓ Đã sao chép!");} });
}
function shareGuestFB()        { if(_currentGuestUrl) window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(_currentGuestUrl)}`,"_blank"); }
function shareGuestMessenger() { if(_currentGuestUrl) window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(_currentGuestUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(_currentGuestUrl)}`,"_blank"); }
function shareGuestZalo()      { if(_currentGuestUrl) window.open(`https://zalo.me/share?url=${encodeURIComponent(_currentGuestUrl)}`,"_blank"); }

/* ============================================================
   LIGHTBOX
============================================================ */
function openLB(index, photos) {
  lbPhotos=photos; lbIndex=index; renderLB();
  document.getElementById("lightbox").classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeLB() {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.style.overflow="";
}
function lbNav(dir) { lbIndex=(lbIndex+dir+lbPhotos.length)%lbPhotos.length; renderLB(); }
function renderLB() {
  const img=document.getElementById("lbImg"), cap=document.getElementById("lbCaption");
  const p=lbPhotos[lbIndex];
  if (!img||!p) return;
  img.style.opacity=0; img.src=p.src||p; img.alt=p.cap||"";
  img.onload=()=>{img.style.transition="opacity .3s"; img.style.opacity=1;};
  if(cap) cap.textContent=p.cap||"";
}
document.addEventListener("keydown", e => {
  const lb=document.getElementById("lightbox");
  if(lb&&!lb.classList.contains("hidden")){
    if(e.key==="ArrowRight") lbNav(1);
    if(e.key==="ArrowLeft")  lbNav(-1);
    if(e.key==="Escape")     closeLB();
  }
});

/* ============================================================
   MUSIC PLAYER
   BUG FIX: Hàm duy nhất, đúng logic autoplay + sessionStorage
============================================================ */
function initMusicPlayer() {
  const btn   = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");
  const bars  = document.getElementById("musicBars");
  if (!btn || !audio) return;

  audio.src  = CONFIG.musicFile;
  audio.loop = true;

  // Khôi phục vị trí nhạc khi chuyển trang
  const savedTime = sessionStorage.getItem("musicTime");
  if (savedTime) audio.currentTime = parseFloat(savedTime);

  // Lưu vị trí mỗi giây
  setInterval(() => {
    if (!audio.paused) sessionStorage.setItem("musicTime", audio.currentTime);
  }, 1000);

  function setPlaying(playing) {
    if (playing) {
      btn.querySelector(".ic-play").classList.add("hidden");
      btn.querySelector(".ic-pause").classList.remove("hidden");
      bars && bars.classList.add("playing");
      sessionStorage.setItem("musicPlaying", "1");
    } else {
      btn.querySelector(".ic-play").classList.remove("hidden");
      btn.querySelector(".ic-pause").classList.add("hidden");
      bars && bars.classList.remove("playing");
      sessionStorage.removeItem("musicPlaying");
    }
  }

  // Auto-play khi người dùng chạm lần đầu
  function tryAutoplay() {
    audio.play()
      .then(() => { setPlaying(true); })
      .catch(() => {});
  }

  if (sessionStorage.getItem("musicPlaying") === "1") {
    // Trang trước đang phát → phát tiếp ngay
    tryAutoplay();
  } else {
    // Chờ click/touch lần đầu
    document.addEventListener("click",     tryAutoplay, { once: true });
    document.addEventListener("touchstart", tryAutoplay, { once: true, passive: true });
  }

  // Nút bật/tắt thủ công
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // không trigger tryAutoplay
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  });
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initScrollReveal() {
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target);} });
  },{threshold:0.1});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ============================================================
   ALBUM
============================================================ */
function initAlbumFilter() {
  const btns=document.querySelectorAll(".filter-btn");
  btns.forEach(btn=>btn.addEventListener("click",()=>{
    btns.forEach(b=>b.classList.remove("active")); btn.classList.add("active");
    renderAlbum(btn.dataset.cat);
  }));
}
function renderAlbum(cat) {
  const grid=document.getElementById("albumGrid"), noPhotos=document.getElementById("noPhotos");
  if(!grid) return;
  const valid=CONFIG.albumImages.filter(img=>img.src&&img.src.trim());
  const filtered=cat==="all"?valid:valid.filter(img=>img.cat===cat);
  grid.innerHTML="";
  if(filtered.length===0){noPhotos&&noPhotos.classList.remove("hidden");return;}
  noPhotos&&noPhotos.classList.add("hidden");
  filtered.forEach((img,i)=>{
    const item=document.createElement("div"); item.className="masonry-item";
    item.innerHTML=`<img src="${img.src}" alt="${img.cap}" loading="lazy" onerror="this.closest('.masonry-item').remove()"/>`;
    item.onclick=()=>openLB(i,filtered); grid.appendChild(item);
  });
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="scale(1)";io.unobserve(e.target);}});
  },{threshold:0.05});
  grid.querySelectorAll(".masonry-item").forEach(el=>{
    el.style.opacity="0"; el.style.transform="scale(0.95)"; el.style.transition="opacity .5s,transform .5s"; io.observe(el);
  });
}

/* ============================================================
   PARTICLES
============================================================ */
function initParticles() {
  const canvas=document.getElementById("particleCanvas"); if(!canvas) return;
  const ctx=canvas.getContext("2d"); let W,H,particles=[];
  function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;}
  resize(); window.addEventListener("resize",resize,{passive:true});
  class P{
    constructor(){this.reset(true);}
    reset(init=false){
      this.x=Math.random()*W; this.y=init?Math.random()*H:-30;
      this.size=8+Math.random()*14; this.speedY=0.6+Math.random()*1.2;
      this.speedX=(Math.random()-.5)*.8; this.opacity=0.4+Math.random()*.5;
      this.angle=Math.random()*Math.PI*2; this.spin=(Math.random()-.5)*.06;
      this.type=Math.random()<.4?"heart":"petal";
    }
    update(){this.y+=this.speedY;this.x+=this.speedX+Math.sin(this.y*.01)*.4;this.angle+=this.spin;if(this.y>H+30)this.reset();}
    draw(){
      ctx.save();ctx.globalAlpha=this.opacity;ctx.translate(this.x,this.y);ctx.rotate(this.angle);
      if(this.type==="heart"){const r=this.size/2;ctx.beginPath();ctx.moveTo(0,r*.35);ctx.bezierCurveTo(-r*.5,-r*.3,-r,r*.15,0,r);ctx.bezierCurveTo(r,r*.15,r*.5,-r*.3,0,r*.35);ctx.fillStyle="rgba(247,163,106,.85)";ctx.fill();}
      else{ctx.beginPath();ctx.ellipse(0,0,this.size*.3,this.size*.7,0,0,Math.PI*2);ctx.fillStyle="rgba(255,180,150,.7)";ctx.fill();}
      ctx.restore();
    }
  }
  const N=innerWidth<600?14:24;
  for(let i=0;i<N;i++) particles.push(new P());
  let last=0;
  (function loop(ts){
    if(ts-last<40){requestAnimationFrame(loop);return;}last=ts;
    ctx.clearRect(0,0,W,H);particles.forEach(p=>{p.update();p.draw();});
    requestAnimationFrame(loop);
  })(0);
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg,dur=2800){
  let t=document.getElementById("toast");
  if(!t){t=document.createElement("div");t.className="toast";t.id="toast";document.body.appendChild(t);}
  t.textContent=msg; t.classList.remove("hidden");
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.add("hidden"),dur);
}

/* ============================================================
   UTILITIES
============================================================ */
function scrollTo(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"});}
function _setTxt(id,v){const e=document.getElementById(id);if(e)e.textContent=v;}
function _setHTML(id,v){const e=document.getElementById(id);if(e)e.innerHTML=v;}
function _baseUrl(){return window.location.href.split("?")[0];}
function _buildQR(container,url){
  if(!container)return;
  const wrap=document.createElement("div");
  container.prepend(wrap);
  try{new QRCode(wrap,{text:url,width:150,height:150,colorDark:"#1a1008",colorLight:"#fff",correctLevel:QRCode.CorrectLevel.M});}
  catch(err){wrap.innerHTML=`<div style="width:150px;height:150px;background:var(--orange-pale);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--text-soft);padding:.8rem;text-align:center;word-break:break-all">${url}</div>`;}
}
