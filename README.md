# Logica-JS6

# <body>
  <h1>Resolução dos Desafios do Curso de Lógica de Programação 💡</h1>

  <p>Praticar a lógica de programação, incluindo conceitos como <strong>variáveis</strong>, <strong>condicionais (if-else)</strong>, <strong>loops (while)</strong> e <strong>interações com o usuário (alert, prompt)</strong>, é essencial para sua carreira de desenvolvimento de software.</p>
  <p>Esses fundamentos fornecem a base para <em>resolver problemas de forma estruturada</em>, <em>tomar decisões no código</em>, <em>criar iterações controladas</em> e <em>interagir eficazmente com os usuários</em>.</p>
  <p>Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a <strong>criar soluções inovadoras</strong>, <strong>depurar eficientemente</strong> e <strong>manter a qualidade</strong> ao longo do ciclo de vida do software.</p>
  <p>Portanto, investir tempo nesses princípios desde cedo é fundamental para <strong>construir uma base sólida e bem-sucedida</strong> no campo da programação.</p>

  <body>

  <h1>Desafios com Interações JavaScript</h1>

  <div class="desafio">
    <h2>Desafio 1 — IMC</h2>
    <div class="enunciado">Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas.</div>
    <pre>
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
    </pre>
    <div class="resposta">🟢 Exemplo: Para 70kg e 1.75m, o resultado será ~22.86.</div>
  </div>

  <div class="desafio">
    <h2>Desafio 2 — Fatorial</h2>
    <div class="enunciado">Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.</div>
    <pre>
function calcularFatorial(numero) {
  if (numero < 0) return undefined;
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}
    </pre>
    <div class="resposta">🟢 Exemplo: O fatorial de 5 é 120.</div>
  </div>

  <div class="desafio">
    <h2>Desafio 3 — Conversão de dólar</h2>
    <div class="enunciado">Crie uma função que converte um valor em dólar para reais. Use a cotação de R$4,80.</div>
    <pre>
function converterDolarParaReal(valorDolar) {
  const cotacao = 4.80;
  return valorDolar * cotacao;
}
    </pre>
    <div class="resposta">🟢 Exemplo: US$10 será convertido para R$48,00.</div>
  </div>

  <div class="desafio">
    <h2>Desafio 4 — Sala Retangular</h2>
    <div class="enunciado">Crie uma função que mostra na tela a área e o perímetro de uma sala retangular.</div>
    <pre>
function calcularSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  console.log("Área:", area);
  console.log("Perímetro:", perimetro);
}
    </pre>
    <div class="resposta">🟢 Exemplo: Com altura 3m e largura 5m, área será 15m² e perímetro 16m.</div>
  </div>

  <div class="desafio">
    <h2>Desafio 5 — Sala Circular</h2>
    <div class="enunciado">Crie uma função que mostra na tela a área e o perímetro de uma sala circular. Use Pi = 3.14.</div>
    <pre>
function calcularSalaCircular(raio) {
  const pi = 3.14;
  let area = pi * raio * raio;
  let perimetro = 2 * pi * raio;
  console.log("Área:", area);
  console.log("Perímetro:", perimetro);
}
    </pre>
    <div class="resposta">🟢 Exemplo: Para raio 2m, área será ~12.56m² e perímetro ~12.56m.</div>
  </div>

  <div class="desafio">
    <h2>Desafio 6 — Tabuada</h2>
    <div class="enunciado">Crie uma função que mostra na tela a tabuada de um número dado como parâmetro.</div>
    <pre>
function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
    </pre>
    <div class="resposta">🟢 Exemplo: Para número 7, será exibida a tabuada de 7 até 70.</div>
  </div>

</body>
