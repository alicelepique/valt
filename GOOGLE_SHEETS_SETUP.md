# Como Configurar Integração com Google Sheets

Este guia mostra como conectar o formulário da landing page com o Google Sheets.

## Passo 1: Criar Google Sheet

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Nomeie como "Valt - Leads"
4. Na primeira linha, adicione os cabeçalhos:
   - A1: `Nome`
   - B1: `Email`
   - C1: `Telefone`
   - D1: `LinkedIn`
   - E1: `Data/Hora`

## Passo 2: Criar Google Apps Script

1. Na planilha, clique em **Extensões** > **Apps Script**
2. Delete o código padrão e cole o código abaixo:

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

## Passo 3: Implantar o Apps Script

1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ > **Web app**
3. Configure:
   - **Descrição**: "Valt Lead Form"
   - **Executar como**: "Eu (seu email)"
   - **Quem tem acesso**: "Qualquer pessoa"
4. Clique em **Implantar**
5. Autorize o aplicativo (pode aparecer aviso de segurança - clique em "Avançado" e autorize)
6. **COPIE A URL** fornecida (algo como: `https://script.google.com/macros/s/ABC.../exec`)

## Passo 4: Configurar o JavaScript

1. Abra o arquivo `js/script.js`
2. Na linha 38, substitua:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```

   Por:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SUA_URL_AQUI/exec';
   ```

## Passo 5: Testar

1. Abra o arquivo `index.html` no navegador
2. Clique em "Quero conhecer a plataforma"
3. Preencha o formulário
4. Clique em "Enviar mensagem"
5. Verifique se os dados apareceram na planilha do Google Sheets

## Estrutura dos Dados Salvos

Cada envio do formulário adiciona uma nova linha com:
- **Nome**: Nome completo do lead
- **Email**: Endereço de email
- **Telefone**: Telefone formatado (00) 00000-0000
- **LinkedIn**: URL do perfil do LinkedIn
- **Data/Hora**: Timestamp do envio (formato: DD/MM/AAAA HH:MM:SS)

## Troubleshooting

### Erro: "Failed to fetch"
- Verifique se a URL do Apps Script está correta
- Confirme que autorizou o script no Google

### Dados não aparecem na planilha
- Abra o Console do navegador (F12)
- Verifique se há erros no console
- Teste o script diretamente no Apps Script usando "Executar"

### Erro de autorização
- No Apps Script, vá em **Implantar** > **Gerenciar implantações**
- Edite a implantação e re-autorize

## Segurança

⚠️ **IMPORTANTE**: Este método expõe a URL do Apps Script no frontend. Para produção, considere:

1. **Adicionar validação no Apps Script**:
   ```javascript
   // Verificar origem
   if (e.parameter.origin !== 'https://seudomain.com') {
     return ContentService.createTextOutput('Unauthorized');
   }
   ```

2. **Usar reCAPTCHA** para prevenir spam

3. **Limitar taxa de requisições** no Apps Script

4. **Criar backend próprio** que se comunica com Google Sheets API de forma segura

## Notificações por Email (Opcional)

Para receber email quando um lead preencher o formulário, adicione ao Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.linkedin,
      data.timestamp
    ]);

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

    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Recursos Adicionais

- [Documentação Google Apps Script](https://developers.google.com/apps-script)
- [SpreadsheetApp Reference](https://developers.google.com/apps-script/reference/spreadsheet)
- [Web Apps Tutorial](https://developers.google.com/apps-script/guides/web)

---

**Desenvolvido para Valt** ⚡
