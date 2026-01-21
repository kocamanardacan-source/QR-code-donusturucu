function generateQR() {
  const inputEl = document.getElementById("qrInput");
  const qrBox = document.getElementById("qrBox");
  const downloadBtn = document.getElementById("downloadBtn");

  const input = inputEl.value.trim();

  qrBox.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!input) {
    alert("Lütfen bir link veya metin gir");
    return;
  }

  let data = input;

  // 🌐 OTOMATİK URL ALGILAMA
  if (
    input.startsWith("www.") ||
    (!input.startsWith("http") && input.includes("."))
  ) {
    data = "https://" + input.replace(/^https?:\/\//, "");
  }

  if (typeof QRCode === "undefined") {
    alert("QR sistemi yüklenemedi, sayfayı yenile");
    return;
  }

  QRCode.toDataURL(data, { width: 220, margin: 2 })
    .then(url => {
      const img = document.createElement("img");
      img.src = url;
      qrBox.appendChild(img);

      downloadBtn.href = url;
      downloadBtn.style.display = "inline-block";
    })
    .catch(err => {
      console.error(err);
      alert("QR oluşturulurken hata oluştu");
    });
}
