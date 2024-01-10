let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let deleteQrBtn = document.getElementById("delete");

function generateQR() {
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

function deleteQr() {
    qrText.value = "";
    imgBox.style.display = "none";
}