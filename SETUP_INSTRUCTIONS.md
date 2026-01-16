# Configuração Final - Valt Landing Page

## ✅ Concluído

- Landing page com design elegante (beige overlay, tipografia Cormorant Garamond)
- Formulário modal com 4 campos (nome, email, telefone, LinkedIn)
- 6 ícones de features com descrições
- Cores pretas para texto e ícones
- Logo Valt personalizado

## 🔧 Próximo Passo: Conectar ao Google Sheets

Sua planilha: https://docs.google.com/spreadsheets/d/12BH46-onTgMgreoykKRWWrQ259c9B_loRl3DlQmN2is/edit?usp=sharing

### Passo 1: Preparar a Planilha

1. Abra sua planilha do Google Sheets
2. Na primeira linha, adicione os seguintes cabeçalhos (se ainda não existirem):
   - **A1**: Nome
   - **B1**: Email
   - **C1**: Telefone
   - **D1**: LinkedIn
   - **E1**: Data/Hora

### Passo 2: Criar o Google Apps Script

1. Na planilha, clique em **Extensões** > **Apps Script**
2. Delete qualquer código existente
3. Cole o seguinte código:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Add row with data
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.linkedin,
      data.timestamp
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Web App is running');
}
```

4. Clique em **Salvar** (ícone de disquete)

### Passo 3: Implantar como Web App

1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de "Selecione o tipo"
3. Escolha **Web app**
4. Configure:
   - **Descrição**: "Valt Lead Form"
   - **Executar como**: "Eu (seu-email@gmail.com)"
   - **Quem tem acesso**: "Qualquer pessoa"
5. Clique em **Implantar**
6. Autorize o aplicativo quando solicitado
   - Se aparecer "Google não verificou este app", clique em **Avançado**
   - Depois clique em **Ir para [nome do projeto] (não seguro)**
   - Clique em **Permitir**
7. **COPIE A URL FORNECIDA** - algo como:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

### Passo 4: Configurar o JavaScript

1. Abra o arquivo: `js/script.js`
2. Encontre a linha 38:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Substitua pela URL que você copiou:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SUA_URL_AQUI/exec';
   ```
4. Salve o arquivo

### Passo 5: Testar

1. Abra o arquivo `index.html` no navegador
2. Clique em "Quero conhecer a plataforma"
3. Preencha o formulário:
   - Nome: Seu nome completo
   - Email: seu@email.com
   - Telefone: (11) 99999-9999
   - LinkedIn: https://linkedin.com/in/seu-perfil
4. Clique em "Enviar mensagem"
5. Verifique se apareceu "Obrigado! Entraremos em contato em breve."
6. Abra sua planilha do Google Sheets e veja se os dados apareceram

## 🚀 Deploy (Opcional)

### Opção 1: GitHub Pages (Grátis)
```bash
git init
git add .
git commit -m "Initial commit - Valt landing page"
git branch -M main
git remote add origin https://github.com/seu-usuario/valt-landing.git
git push -u origin main
```
Depois vá em Settings > Pages > Source: main branch

### Opção 2: Netlify (Grátis)
1. Vá em https://app.netlify.com/drop
2. Arraste a pasta do projeto

### Opção 3: Vercel (Grátis)
```bash
npm i -g vercel
vercel
```

## 📧 Notificações por Email (Opcional)

Para receber email quando alguém preencher o formulário, adicione ao Apps Script (antes do return):

```javascript
// Send email notification
MailApp.sendEmail({
  to: 'seu@email.com',
  subject: 'Novo Lead - Valt',
  body: `
    Novo lead cadastrado:

    Nome: ${data.name}
    Email: ${data.email}
    Telefone: ${data.phone}
    LinkedIn: ${data.linkedin}
    Data: ${data.timestamp}
  `
});
```

## 🔍 Troubleshooting

### Erro: "Failed to fetch"
- Verifique se a URL do Apps Script está correta no `js/script.js`
- Confirme que você autorizou o script no Google

### Dados não aparecem
- Abra o Console do navegador (F12) e veja se há erros
- Teste o Apps Script diretamente clicando em "Executar" no editor

### Formulário não abre
- Verifique se os arquivos estão na estrutura correta:
  ```
  financial-advisor-platform/
  ├── index.html
  ├── css/styles.css
  └── js/script.js
  ```

## ✨ Arquivos do Projeto

- **index.html** - Página principal com formulário
- **css/styles.css** - Estilos visuais
- **js/script.js** - Lógica do formulário e máscaras
- **GOOGLE_SHEETS_SETUP.md** - Guia detalhado de integração
- **README.md** - Documentação original

---

**Desenvolvido para Valt** ⚡
