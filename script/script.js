    // Gerar string do Prompt para a IA Max
    function generatePrompt() {
      const mdf = document.getElementById('mdfThickness').value;
      const marble = document.getElementById('marbleOption').value;
      const hinge = document.getElementById('hingeType').value;
      const slide = document.getElementById('slideType').value;
      const handle = document.getElementById('handleType').value;
      const notes = document.getElementById('notes').value.trim();

      let promptText = `Olá, MAX. Utilize as especificações manuais abaixo para compor o orçamento e dimensionamento deste projeto no Calcme, combinando-as com as demais informações coletadas diretamente do projeto:\n\n`;
      promptText += `ESPECIFICAÇÕES TÉCNICAS (FIGUEIRA GRANDE):\n`;
      promptText += `- Espessura do MDF: ${mdf}\n`;
      promptText += `- Pedra de Mármore/Granito: ${marble}\n`;
      promptText += `- Tipo de Dobradiça: ${hinge}\n`;
      promptText += `- Tipo de Corrediça: ${slide}\n`;
      promptText += `- Tipo de Puxador: ${handle}\n`;

      if (notes) {
        promptText += `- Observações Técnicas: ${notes}\n`;
      }

      promptText += `\nPor favor, processe esses parâmetros no cálculo de insumos, ferragens e materiais do orçamento.`;
      
      return promptText;
    }

    // Copiar Prompt
    document.getElementById('copyBtn').addEventListener('click', () => {
      const textToCopy = generatePrompt();
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast();
      }).catch(err => {
        console.error('Erro ao copiar: ', err);
      });
    });

    // Resetar Formulário
    document.getElementById('resetBtn').addEventListener('click', () => {
      document.getElementById('specForm').reset();
    });

    // Exibir Toast
    function showToast() {
      const toast = document.getElementById('toast');
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }