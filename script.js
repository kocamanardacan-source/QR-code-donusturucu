let qr;

function qrUret() {
  let text = document.getElementById("qrText").value.trim();
  const color = document.getElementById("qrColor").value;
  const qrBox = document.getElementById("qrBox");
  const bilgi = document.getElementById("bilgi");
  const indirBtn = document.getElementById("indirBtn");

  qrBox.innerHTML = "";
  bilgi.innerHTML = "";
  indirBtn.disabled = true;

  if (text === "") {
    alert("Lütfen metin veya link gir");
    return;
  }

  // 🔍 OTOMATİK URL ALGILAMA
  let urlAlgilandi = false;
  if (
    !text.startsWith("http://") &&
    !text.startsWith("https://") &&
    (text.includes(".com") ||
     text.includes(".net") ||
     text.includes(".org") ||
     text.includes(".tr"))
  ) {
    text = "https://" + text;
    urlAlgilandi = true;
  }

  qr = new QRCode(qrBox, {
    text: text,
    width: 200,
    height: 200,
    colorDark: color,
    colorLight: "#ffffff"
  });

  if (urlAlgilandi) {
    bilgi.innerText = "✔ URL algılandı ve düzenlendi";
  }

  indirBtn.disabled = false;
}

function qrIndir() {
  const img = document.querySelector("#qrBox img");
  if (!img) return;

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "qr-code.png";
  link.click();
}

function temaDegistir() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
}
