// call elements from html
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let deleteQrBtn = document.getElementById("delete");

// create function for generate qr codes
function generateQR() {
    // if input's value greater than 0, do this
    if(qrText.value.length > 0) {
        // change img's src to qr code generator API with input value
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img"); // show result of qr code
        deleteQrBtn.style.display = "block"; // change delete button's display to block
    } else { // or if doesn't work, then do this
        qrText.classList.add("error"); // add error to input
        setTimeout(() => { //set animation time to 1000
            qrText.classList.remove("error"); // remove error from input
        }, 1000);
    }
}

// create function for delete input value and qr code image
function deleteQr() {
    // make input value "" (empty)
    qrText.value = "";
    // change imgBox display style to none
    imgBox.style.display = "none";
}