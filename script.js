document.addEventListener('DOMContentLoaded', () => {
    const text = '🚢 Proposta Secreta para o Projeto "C.a.r.a.v.e.l.(a)" 🛶';
    let index = 0;
    const speed = 100;

    function typeWriter() {
        if (index < text.length) {
            document.querySelector('header h2').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    // Limpa o texto e inicia o efeito
    document.querySelector('header h2').innerHTML = '';
    typeWriter();
});