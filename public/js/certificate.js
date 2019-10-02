// document.addEventListener('DOMContentLoaded', function () {
// 	console.log("Generating QR")
// 	var qr = new QRious({
// 		element: document.querySelector('#qr'),
// 		value: window.location.href
// 	})

// 	qr.set({
// 		background: 'green',
// 		backgroundAlpha: 0.8,
// 		foreground: 'blue',
// 		foregroundAlpha: 0.8,
// 		level: 'H',
// 		padding: 25,
// 		size: 500,
// 	})
// 	// imagesLoaded('#certificate', function() {})
// })

$(document).ready(function() {
  $("#qr").qrcode({ width: 128, height: 128, text: window.location.href });
});

function printCertificate() {
  let opt = {
    margin: 1,
    filename: "certificate.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" }
  };
  html2pdf()
    .set(opt)
    .from(document.getElementById("certificate"))
    .save();
}
