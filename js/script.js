document.addEventListener('DOMContentLoaded', function() {
  const inputText = document.getElementById('inputText');
  const outputText = document.getElementById('outputText');
  const placeholderImg = document.getElementById('placeholderImg');

  // Função para atualizar o conteúdo da output section
  function updateOutputSection() {
      if (inputText.value.trim() === '') {
          // Mostrar imagem de placeholder e ocultar texto
          outputText.innerHTML = '';
          placeholderImg.style.display = 'block';
      } else {
          // Mostrar texto e ocultar imagem de placeholder
          outputText.innerHTML = `<strong>${inputText.value}</strong>`;
          placeholderImg.style.display = 'none';
      }
  }

  // Verificar sempre que o conteúdo da caixa de input mudar
  inputText.addEventListener('input', updateOutputSection);

  // Chamar a função inicialmente para configurar o estado inicial
  updateOutputSection();
});
