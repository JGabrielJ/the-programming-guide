let html = document.getElementById("html");
let javascript = document.getElementById("javascript");
let python = document.getElementById("python");
let cpp = document.getElementById("cpp");
let kotlin = document.getElementById("kotlin");
let markdown = document.getElementById("markdown");

html.addEventListener("click", () => {
    const content = document.getElementById("languages");
    content.innerHTML = `
        <h1> HTML/CSS </h1>
    `;
});

javascript.addEventListener("click", () => {
    const content = document.getElementById("languages");
    content.innerHTML = `
        <h1> JavaScript </h1>
    `;
});

python.addEventListener("click", () => {
    const content = document.getElementById("languages");
    content.innerHTML = `
        <h1> Python </h1>
        <p> Python é uma linguagem de programação bastante poderosa e rápida, funciona e pode ser executada muito bem em qualquer plataforma, pois possui diversos frameworks para qualquer tipo de aplicação (seja ela desktop, web ou mobile), é super fácil de aprender e possui grande suporte por ser uma linguagem atual e por estar em constantes atualizações promovidas por meio da comunidade ativa, além de ser uma linguagem de código aberto. Estas, dentre muitas outras, são algumas das razões pelas quais as pessoas se interessam em aprender Python, uma linguagem de programação que cresce cada vez mais a cada dia que se passa. </p>

        <div class="note">
            <h2> Nota: </h2>
            <p> Inclusive existem aplicativos (disponíveis gratuitamente na Google Play Store) que lhe permitem programar na linguagem Python através de seus dispositivos móveis. </p>
        </div><br>

        <p> Em seus primeiros passos, Python pode ser uma linguagem muito fácil de aprender se você é um programador iniciante ou se já possuir experiência com outras linguagens. Mesmo que você possua alguma dificuldade com a linguagem, a comunidade ativa que trabalha dia a dia para melhorá-la está sempre organizando conferências e encontros, colaborando com códigos, dentre outros. A documentação da linguagem vai te ajudar bastante ao longo de sua jornada e as listas de discussão vão te manter sempre ligado nas informações mais recentes sobre atualizações e melhorias que a linguagem estiver recebendo. </p>

        <p> Python ainda conta com diversos módulos (internos e externos) e frameworks disponibilizados pelo Python Package Index (PyPI), um serviço que hospeda milhares desses módulos que são criados por outros usuários a fim de adicionarem mais funcionalidades à linguagem. Tanto a biblioteca padrão do Python quanto os módulos fornecidos pela comunidade permitem infinitas possibilidades. Python é desenvolvido sob uma licença de código aberto aprovada pela OSI (Open Systems Interconnection), tornando-o livremente utilizável e distribuível, mesmo para uso comercial. A licença do Python é administrada pela Python Software Foundation (PSF). </p>

        <p> A missão da Python Software Foundation (PSF) é promover, proteger e melhorar a linguagem de programação Python, e apoiar e facilitar o crescimento de uma comunidade diversificada e internacional de programadores Python. A fundação apoia a comunidade Python através de concessões, inúmeros serviços e a PyCon EUA, uma conferência que ocorre anualmente a fim de promover ações para a comunidade Python. Você pode apoiar a PSF tornando-se membro da mesma, fazendo doações ou de outras formas, as quais estão todas melhor detalhadas no <a href="https://www.python.org/psf/" target="_blank">site oficial da fundação</a>.</p><br>

        <h2> Vantagens </h2>
        <ul>
            <li><strong>Facilidade:</strong> Uma das maiores vantagens da programação em Python é a facilidade com a qual você pode aprender a linguagem. Você pode aplicar a lógica de programação diretamente ao código e esta é uma das principais razões pelas quais as principais universidades americanas estão investindo no ensino de programação na linguagem Python. </li>
            <li><strong>Pouca concorrência:</strong> Não há muitos desenvolvedores que trabalham com a linguagem Python por aí mundo afora, o que facilita bastante para programadores iniciantes que estão começando a ingressar no mercado de trabalho, pois logo serão vistos como destaques por saberem utilizar uma linguagem que está se tornando cada vez mais popular entre a comunidade. </li>
            <li><strong>Menos código, mais eficiência:</strong> Python requer menos código para tarefas simples quando comparado a outras linguagens de programação, que pode se tornar de 3 a 5 vezes menor do que Java ou 5 a 10 vezes menor do C/C++. Portanto, quanto menos código, menor a chance de obter erros, especialmente para aqueles que são apenas iniciantes, e menor o espaço de armazenamento que o programa irá ocupar. </li>
            <li><strong>Multiplataforma:</strong> Existem vários sistemas que executam Python, alguns de forma nativa e outros que necessitam de instalação. Windows, macOS, Linux (e suas inúmeras distribuições) e até mesmo Unix são alguns dos sistemas que conseguem rodar programas desenvolvidos na linguagem Python. </li>
            <li><strong>Ciência de Dados:</strong> Python possui uma grande comunidade ativa que pode lhe ajudar com quaisquer tipos de problemas que você venha a ter. Além disso, é uma linguagem de código aberto (open source), o que significa ter um total de exatamente zero gastos com o que quer que você desenvolva em Python. E por fim, possui um número incrivelmente extenso de bibliotecas disponíveis, seja para análise de dados (Pandas e NumPy são as mais utilizadas para isso) ou para automação de processos ou ainda para criação de modelos de IA (Inteligência Artificial) através do conhecido <strong>machine learning</strong>, o que torna a linguagem extremamente multifuncional. </li>
        </ul><br>

        <h2> Desvantagens </h2>
        <ul>
            <li><strong>Não possui tanta rapidez:</strong> Em geral, aplicações criadas em Python não são tão rápidas quanto em outras linguagens, como C/C++ ou Java, o que faz com que, mesmo que a linguagem seja bastante simples e lhe auxilie na hora de fazer seus programas, essas aplicações possam não ter muita eficiência em suas execuções nos computadores. </li>
            <li><strong>Sintaxe muito rígida:</strong> Mesmo que possua uma sintaxe simples e exclusiva, o que a torna diferente de qualquer outra, a linguagem acaba por não deixar espaço para atalhos ou outros tipos de ações que outras linguagens permitem para facilitar o processo de programação, por consequência tornando Python uma linguagem não muito recomendada para programadores que estejam procurando opções dinâmicas e flexíveis em relação a esses critérios. </li>
            <li><strong>Limitações na hora de programar:</strong> Python traz uma experiência completamente diferente do que é adotado por outras linguagens: ela não utiliza compiladores, mas sim <strong>interpretadores</strong>. Isso acaba gerando uma nova curva de aprendizado no processo de ter que migrar para outras linguagens, tudo por conta dessas pequenas, mas diferenciais, particularidades. </li>
            <li><strong>Dificuldades para desenvolver aplicações mobile:</strong> A linguagem Python não é muito recomendada para esse tipo de desenvolvimento, uma vez que ele não possui bibliotecas nativas para o iOS e Android, resultando em um trabalho maior para adaptar programas para ambas as plataformas. </li>
        </ul>

        <p> O contêiner abaixo mostra um exemplo de código feito na linguagem <a href="https://www.python.org/" target="_blank">Python</a>. </p>
        <div class="example">
            <p class="code">
                <span class="var">numbers</span> = [<span class="num">2</span>, <span class="num">4</span>, <span class="num">6</span>, <span class="num">8</span>]<br>
                <span class="var">product</span> = <span class="num">1</span><br>
                <span class="command">for</span> <span class="var">num</span> <span class="comp">in</span> <span class="var">numbers</span>:<br>
                <span class="indent"><span class="var">product</span> = <span class="var">product</span> * <span class="var">num</span></span><br><br>
                <span class="func">print</span>(<span class="comp">f</span><span class="str">'The product is <span class="command">{<span class="var">product</span>}</span>.'</span>)
            </p>
        </div>
    `;
});

cpp.addEventListener("click", () => {
    const content = document.getElementById("languages");
    content.innerHTML = `
        <h1> C++ </h1>
    `;
});

kotlin.addEventListener("click", () => {
    const content = document.getElementById("languages");
    content.innerHTML = `
        <h1> Kotlin </h1>
    `;
});

markdown.addEventListener("click", () => {
    const content = document.getElementById("languages");
    content.innerHTML = `
        <h1> Markdown </h1>
    `;
});
