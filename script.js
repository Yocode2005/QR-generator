let imgBox = document.getElementById("imgBox"); // for getting inbox
let qrImage = document.getElementById("qrImage"); // for getting qrImage
let qrText = document.getElementById("qrText"); // for qr text

function generatorQR(){ // function for creating qr
    if(qrText.value.length > 0){// text na hone pr bhi default image de rha tha usse problem ko solve ken ke liye  if ka us ekiya hai
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{ // settimeout function
            qrText.classList.remove("error"); // for removinf error
        },1000); // for one sec.
    }
    
}


