function displayMenu() {
    var mostraProdutos = '';
    mostraProdutos += '     <ol>'
    mostraProdutos += '      <li>Overview</li>'
    mostraProdutos += '      <li>Pricing</li>'
    mostraProdutos += '      <li>Marketplace</li>'
    mostraProdutos += '      <li>Features</li>'
    mostraProdutos += '      <li>Integrations</li>'
    mostraProdutos += '     </ol>'


    if (pCampo.checked) {
        document.getElementById("mostraProdutos").innerHTML = displayMenu;
    }
    else {
        document.getElementById("mostraProdutos").innerHTML = '';
    }
}