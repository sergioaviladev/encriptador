(() => {
    setMessage(`
            <div class="aside-message" >
                <img id="img-not-found" src="assets/not-found.png">
                <h2>Ningún mensaje fue encontrado</h2>
                <p>Ingresa el texto que deseas encriptar o desencriptar</p>
            </div>
        `);
})();

function eliminarCaracteresEspeciales(palabra) {
    let _palabra = palabra;

    // remueve diacriticos (acentos) de la palabra
    _palabra = _palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // remueve caracteres especiales y numeros de la palabra
    _palabra = _palabra.replace(/[^a-zA-Z ]+/g, '').trimStart().trimEnd();

    return _palabra
}


function encriptarPalabra(palabra) {
    let _palabra = palabra.toLowerCase(); // minusculas

    if (_palabra.includes('e')) {
        _palabra = _palabra.replace(/e+/g, 'enter')
    }
    if (_palabra.includes('i')) {
        _palabra = _palabra.replace(/i+/g, 'imes')
    }
    if (_palabra.includes('a')) {
        _palabra = _palabra.replace(/a+/g, 'ai')
    }
    if (_palabra.includes('o')) {
        _palabra = _palabra.replace(/o+/g, 'ober')
    }
    if (_palabra.includes('u')) {
        _palabra = _palabra.replace(/u+/g, 'ufat')
    }

    return _palabra
}

function desencriptarPalabra(palabra) {
    let _palabra = palabra.toLowerCase(); // minusculas

    if (_palabra.includes('enter')) {
        _palabra = _palabra.replace(/enter/g, 'e')
    }
    if (_palabra.includes('imes')) {
        _palabra = _palabra.replace(/imes/g, 'i')
    }
    if (_palabra.includes('ai')) {
        _palabra = _palabra.replace(/ai/g, 'a')
    }
    if (_palabra.includes('ober')) {
        _palabra = _palabra.replace(/ober/g, 'o')
    }
    if (_palabra.includes('ufat')) {
        _palabra = _palabra.replace(/ufat/g, 'u')
    }

    return _palabra
}


function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function onClickBtnApp(tipo) {
    const texto = document.getElementById('texto').value;

    if (texto == '' || texto == undefined || texto == null) {
        setMessage(`
            <div class="aside-message" >
                <img id="img-not-found" src="assets/not-found.png">
                <h2>Ningún mensaje fue encontrado</h2>
                <p>Ingresa el texto que deseas encriptar o desencriptar</p>
            </div>
        `);
    } else {
        const palabraTemporal = eliminarCaracteresEspeciales(texto)
        
        if (tipo === 'encriptar') {
            let palabraEnriptada = encriptarPalabra(palabraTemporal);
            setMessage(`
                <div class="aside-message" >
                    <h1>${palabraEnriptada}</h1>
                    <button class="btn-blue-outlined ripple" onclick="copiar('${palabraEnriptada}')">
                    Copiar
                </button>
                </div>
            `);
        }
        if (tipo === 'desencriptar') {
        let palabraDesencriptada = desencriptarPalabra(palabraTemporal);

            setMessage(`
            <div class="aside-message" >
                <h1>${palabraDesencriptada}</h1>
                <button class="btn-blue-outlined ripple" onclick="copiar('${palabraDesencriptada}')">
                    Copiar
                </button>
            </div>
        `);
        }
    }

}


function onChangeTextArea() {
    const texto = document.getElementById('texto').value;

    if (texto == '' || texto == undefined || texto == null) {
        setMessage(`
            <div class="aside-message" >
                <img id="img-not-found" src="assets/not-found.png">
                <h2>Ningún mensaje fue encontrado</h2>
                <p>Ingresa el texto que deseas encriptar o desencriptar</p>
            </div>
        `);
    }
}


function copiar(texto) {
    navigator.clipboard.writeText(texto).then(function () {
        alert('¡Texto copiado! ' + texto);
    }, function (err) {
        alert('No fue posible copiar el texto');
    });
}

