let input_text = document.getElementById('input__textarea');
let output_text = document.getElementById('output__textarea');
let encrypt_text = document.getElementById('encrypt__button');
let decrypt_text = document.getElementById('decrypt__button');
let copy_text = document.getElementById('copy_button');

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla == 8) {
        return true;
    }

    patron = /[a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function result(result){
    output_text.value = result;    
}

function encrypt(){
    let output = input_text.value;
    output_text.style.backgroundImage = "none";
    decrypt_text.disabled = false;
    encryptResult = output.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    result(encryptResult);
}

function decrypt(){
    let output = input_text.value;
    decryptResult = output.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    result(decryptResult);
}

function copy(){
    navigator.clipboard.writeText(output_text.value);
}
