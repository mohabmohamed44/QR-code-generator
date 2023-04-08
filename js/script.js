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
}