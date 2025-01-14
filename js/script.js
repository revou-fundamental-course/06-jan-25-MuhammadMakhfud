function setSenderUI(nama, lahir, kelamin, pesan) {
    document.getElementById("sender-nama").innerHTML = nama;
    document.getElementById("sender-lahir").innerHTML = lahir;
    document.getElementById("sender-kelamin").innerHTML = kelamin;
    document.getElementById("sender-pesan").innerHTML = pesan;

}

function validateForm() {
    const nama = document.forms["form-pesan"]["nama"].value;
    const lahir = document.forms["form-pesan"]["lahir"].value;
    const kelamin = document.forms["form-pesan"]["kelamin"].value;
    const pesan = document.forms["form-pesan"]["pesan"].value;

    if (nama == "" || lahir == "" || kelamin == "" || pesan == "") {
        alert("Silakan isi semua form");
        return false;
    }

    setSenderUI(nama, lahir, kelamin, pesan);

    return false;
}

