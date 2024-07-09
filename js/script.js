document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const placeholderImg = document.getElementById('placeholderImg');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

        function updateOutputSection() {
        if (inputText.value.trim() === '') {
            outputText.innerHTML = '';
            placeholderImg.style.display = 'block';
        } else {
            outputText.innerHTML = `<strong>${inputText.value}</strong>`;
            placeholderImg.style.display = 'none';
        }
    }

        inputText.addEventListener('input', updateOutputSection);
    updateOutputSection();

        function criptografar(texto) {
        const chaves = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.replace(/[eioua]/g, match => chaves[match]);
    }

    
    function descriptografar(texto) {
        const chaves = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/enter|imes|ai|ober|ufat/g, match => chaves[match]);
    }

        encryptBtn.addEventListener('click', function() {
        const textoOriginal = inputText.value;
        const textoCriptografado = criptografar(textoOriginal);
        outputText.innerHTML = `<strong>${textoCriptografado}</strong>`;
        placeholderImg.style.display = 'none';
    });

        decryptBtn.addEventListener('click', function() {
        const textoCriptografado = inputText.value;
        const textoDescriptografado = descriptografar(textoCriptografado);
        outputText.innerHTML = `<strong>${textoDescriptografado}</strong>`;
        placeholderImg.style.display = 'none';
    });

        function copyToClipboard() {
        const textToCopy = outputText.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado com sucesso!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    }

        copyBtn.addEventListener('click', copyToClipboard);
});
