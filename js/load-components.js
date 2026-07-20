document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar componentes
    function loadComponent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            });
    }

    // Carregar header e footer (ajuste o caminho se necessário)
    loadComponent('../componentes/header.html', 'header-container');
    loadComponent('../componentes/footer.html', 'footer-container');
});
