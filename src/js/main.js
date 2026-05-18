document.addEventListener('DOMContentLoaded', () => {
    const ObjetoCronometro = document.querySelectorAll(".cronometro");
    const anoAtual = new Date().getFullYear();
    const dataAlvo = new Date(anoAtual, 8, 16, 22, 0, 0);

    function atualizarCronometro() {
        const dataAtual = new Date();
        const diferenca = dataAlvo - dataAtual;

        if (diferenca <= 0) {
            ObjetoCronometro.innerHTML = "É HOJE! 🎂🎵";
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        ObjetoCronometro.forEach(cronometro => {
            cronometro.innerHTML = `
            ${dias}d : 
            ${horas.toString().padStart(2, '0')}h : 
            ${minutos.toString().padStart(2, '0')}m : 
            ${segundos.toString().padStart(2, '0')}s`
        });
        ;
    }

    // 5. Executa a função imediatamente (para não começar zerado) e atualiza a cada 1 segundo
    atualizarCronometro();
    const intervalo = setInterval(atualizarCronometro, 1000);
});
