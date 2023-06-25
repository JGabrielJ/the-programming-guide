let vscode = document.getElementById("vscode");
let webstorm = document.getElementById("webstorm");
let pycharm = document.getElementById("pycharm");
let android = document.getElementById("android");
let online = document.getElementById("online");

vscode.addEventListener("click", () => {
    const content = document.getElementById("tools");
    content.innerHTML = `
        <h1> Visual Studio Code (VSCode) </h1>
        <p> É um editor de código leve (possui menos de 100MB) que pode ser executado em qualquer sistema operacional, seja ele Windows, macOS ou Linux. Fornece um suporte já integrado para desenvolvimento de programas em HTML/CSS, JavaScript, TypeScript, Node.js, Markdown, Powershell e JSON, por exemplo. Você também pode fazer a depuração do seu código diretamente do editor, executando e analisando o código linha a linha e apontando qual é e onde está cada falha. </p>

        <div class="note">
            <h2> Nota: </h2>
            <p> O processo de depuração de um código nada mais é do que examiná-lo, em busca de identificar e consertar quaisquer falhas ou erros presentes nele. Lembrando que todo erro é uma falha, mas nem toda falha é um erro. Falhas podem ser problemas que não afetam a execução do programa, mas afetam a forma como ele é executado e visualizado, como um parâmetro que foi passado de forma errada ou uma referenciação indevida, por exemplo. </p>
        </div><br>

        <p> Ele também facilita bastante a escrita de seus códigos justamente por possuir um recurso chamado IntelliSense, que fornece complementos inteligentes com base em tipos de variáveis, definições de função e módulos importados. Além disso, também possui um controle de versionamento Git já integrado, o que significa que você pode salvar as alterações do seu reposiório local e enviá-las para o seu repositório remoto completamente através do próprio editor. </p>

        <p> O editor ainda conta com diversos outros recursos, como as tão utilizadas extensões. Elas permitem ao programador poder adicionar suporte a outras linguagens (como Python e C#, por exemplo), temas de customização do ambiente, depuradores e conexões a serviços adicionais, como o Go Live, que lhe permite iniciar um mini-servidor local e visualizar as alterações feitas no seu código em tempo real. Entretanto, ao contrário do que se pode pensar, essas extensões não tornam o editor lento, pois são executadas em processos separados ao do software em si. </p>

        <p> Por fim, existe mais um recurso: o Microsoft Azure, onde você pode implantar e hospedar seus sites React, Angular, Vue, Node.js, Python (dentre muitos outros), armazenar e consultar dados relacionais baseados em documentos e dimensionar com computação sem servidor. Tudo isso com muita facilidade e tudo a partir deste software chamado de Visual Studio Code. </p><br>

        <h2> Vantagens </h2>
        <ul>
            <li><strong>Fácil de usar:</strong> Possui uma facilidade muito grande para utilização, o que ajuda bastante para quem está começando sua carreira na área de programação agora. </li>
            <li><strong>Inúmeras funcionalidades:</strong> Como já dito anteriormente, o software possui diversos recursos que facilitam muito o trabalho do programador (depuração de código integrada, suporte a várias linguagens etc.) e variadas opções de customização do ambiente de trabalho. </li>
            <li><strong>Leveza:</strong> Uma das razões para a popularização do VSCode é o fato de ele ser bastante leve (possui menos de 100MB). Isso o torna bastante acessível para qualquer um, pois funciona em qualquer tipo de computador sem exigir muito do hardware, ou seja, não é necessário possuir muita memória RAM ou um processador potente. </li>
            <li><strong>Open source:</strong> Ser um editor de código aberto (open source), faz com que ele possa ser aprimorado constantemente pela comunidade ativa. Isso aumenta as chances de apresentar sempre boas melhorias, além de você mesmo poder fazer suas próprias alterações que julgar necessárias. </li>
            <li><strong>Gratuidade:</strong> Sem dúvidas, uma ferramenta ser gratuita é uma vantagem enorme para um profissional de TI. Isso porque os custos para se ter um bom editor de texto podem ser bem dispendiosos e pesar no bolso do especialista. Com o VSCode, contudo, é possível desfrutar de uma alta tecnologia e recursos completos, sem ter que desembolsar qualquer valor para a realização de seu trabalho. </li>
            <li><strong>Agilidade:</strong> Com todas as funcionalidades que o editor apresenta (como depuração de código integrada e o IntelliSense), o serviço do programador se torna muito mais rápido. Além da agilidade, esses recursos também reduzem significativamente as chances de o profissional cometer algum erro durante a escrita e o gerenciamento do código. </li>
        </ul><br>

        <h2> Desvantagens </h2>
        <ul>
            <li><strong>Adaptação:</strong> Por possuir apenas algumas poucas linguagens já suportadas de forma integrada, o uso de extensões pode acabar não funcionando nos programas que você estiver desenvolvendo, justamente por estarem funcionando de uma forma adaptada. </li>
            <li><strong>Personalização à mão:</strong> Algumas vezes, torna-se necessário instalar e personalizar suas próprias extensões e pode ser que isso lhe deixe um pouco confuso. </li>
        </ul>

        <p> A imagem abaixo ilustra como é a interface do software <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>. </p>
        <img src="./images/tool-icons/print-vscode.png" alt="VSCode Interface">
    `;
});

webstorm.addEventListener("click", () => {
    const content = document.getElementById("tools");
    content.innerHTML = `
        <h1> WebStorm </h1>
    `;
});

pycharm.addEventListener("click", () => {
    const content = document.getElementById("tools");
    content.innerHTML = `
        <h1> PyCharm </h1>
    `;
});

android.addEventListener("click", () => {
    const content = document.getElementById("tools");
    content.innerHTML = `
        <h1> Android Studio </h1>
    `;
});

online.addEventListener("click", () => {
    const content = document.getElementById("tools");
    content.innerHTML = `
        <h1> Editores de Código Online </h1>
        <p> Existem vários outros sites que também cumprem a função de editar códigos, alguns com uma função mais didática e educativa, com funcionalidades reduzidas, claro, utilizando até mesmo programação em blocos, e outros que funcionam como simuladores virtuais. </p>
        <p> Alguns editores didáticos conhecidos são <a href="https://code.org/" target="_blank">Code.org</a>, <a href="https://developers.google.com/blockly?hl=pt-br" target="_blank">Blockly</a>, <a href="https://www.w3schools.com/tryit/" target="_blank">W3Schools</a> e <a href="https://www.tinkercad.com/dashboard" target="_blank">Tinkercad</a> (ao criar projetos com Arduíno, é necessário programá-lo para que funcione corretamente). Os simuladores virtuais mais populares são <a href="https://codepen.io/" target="_blank">Codepen</a>, <a href="https://replit.com/" target="_blank">Replit</a>, <a href="https://vscode.dev/" target="_blank">VSCode Dev</a> e <a href="https://www.gitpod.io/" target="_blank">Gitpod</a>.</p>

        <br>
        <p> A imagem abaixo ilustra como é a interface do software <a href="https://replit.com/" target="_blank">Replit</a>. </p>
        <img src="./images/tool-icons/print-replit.svg" alt="Replit Interface" width="700px" height="421px">
    `;
});
