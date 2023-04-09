function generateQRCode() {
    var text = document.getElementById("text").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(text);

    // Create a canvas element with the QR code image
    var canvas = document.getElementById("qrcode").getElementsByTagName("canvas")[0];

    // Set the canvas background color to transparent
    canvas.style.backgroundColor = "transparent";

    // Create a new image element with the QR code image as its source
    var img = new Image();
    img.src = canvas.toDataURL("image/png");

    // Show the download button and set its href attribute to the image source
    var downloadBtn = document.getElementById("download-btn");
    downloadBtn.style.display = "inline-block";
    downloadBtn.onclick = function () {
        // Create a new temporary link element and set its href and download attributes
        var link = document.createElement("a");
        link.href = img.src;
        link.download = "qrcode.png";

        // Append the link to the document and click it to download the image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}