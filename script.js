function generateQR() {
  const input = document.getElementById("qrInput").value.trim();
  const qrBox = document.getElementById("qrBox");
  const downloadBtn = document.getElementById("downloadBtn");

  qrBox.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!input) {
    alert("Lütfen bir metin veya link gir");
    return;
  }

  // 🔍 OTOMATİK URL ALGILAMA
  let data = input;
  if (
    input.startsWith("www.") ||
    (!input.startsWith("http") && input.includes("."))
  ) {
    data = "https://" + input.replace(/^https?:\/\//, "");
  }

  QRCode.toDataURL(
    data,
    { width: 220, margin: 2 },
    function (err, url) {
      if (err) return console.error(err);

      const img = document.createElement("img");
      img.src = url;
      qrBox.appendChild(img);

      downloadBtn.href = url;
      downloadBtn.style.display = "inline-block";
    }
  );
}
