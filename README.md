# Scale Advisory - Plataforma para Consultores Financeiros

Website moderno e responsivo desenvolvido para consultores financeiros que desejam escalar suas operações.

## 🎯 Proposta de Valor

**Torne sua consultoria mais escalável** - Mais clientes e mais diversidade de produtos sem precisar aumentar seu time. Acesso a produtos diferenciados e especialistas para aconselhar clientes da sua carteira.

## ✨ Funcionalidades Destacadas

### Automação & Operações
- ⚡ **Cálculo automático de cotas**
- 📊 **Consolidação de carteiras**
- 💼 **Contabilidade integrada**
- 🔄 **Reconciliação de pagamentos e fluxos**
- 📈 **Reportes automatizados**

### Inteligência Artificial
- 🤖 **CRM com IA** - Anota reuniões e sugere próximos passos
- 🎯 **Recomendação de alocação de ativos**
- ⚠️ **Alertas de desbalanceamento de carteira**
- 📰 **Notícias relevantes personalizadas** (tipo Factiva)

### Gestão & Compliance
- 📄 **Guarda e organiza documentos**
- 🔍 **Pesquisa de covenants, garantias, titulares**
- 📋 **Pesquisa de regulação tributária**
- 🏢 **Busca por emissores**
- ✅ **Onboarding automático de documentos**

### Produtos & Serviços
- 💰 **Contas que rendem 100% CDI** com open finance
- 🎁 **Acesso a produtos financeiros diferenciados**
- 👥 **Rede de especialistas** em sucessão, tributário e seguros

## 🎨 Design & UX

O website foi inspirado no design moderno do [Carta.com](https://carta.com), com:

- **Design Limpo e Profissional**: Layout minimalista com foco em conteúdo
- **Gradientes Modernos**: Uso sofisticado de cores e gradientes
- **Animações Suaves**: Efeitos de scroll, hover e transições elegantes
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance**: Carregamento rápido e animações otimizadas

## 🚀 Como Usar

### Visualização Local

1. **Abrir o arquivo HTML**
   ```bash
   # Navegue até a pasta
   cd financial-advisor-platform

   # Abra o index.html no navegador
   open index.html
   # Ou no Windows
   start index.html
   # Ou no Linux
   xdg-open index.html
   ```

2. **Usar um servidor local** (recomendado)
   ```bash
   # Se você tem Python instalado
   python -m http.server 8000
   # Então acesse: http://localhost:8000

   # Ou se você tem Node.js
   npx serve
   ```

3. **Usar a extensão Live Server do VS Code**
   - Instale a extensão "Live Server"
   - Clique direito no index.html
   - Selecione "Open with Live Server"

## 📁 Estrutura de Arquivos

```
financial-advisor-platform/
│
├── index.html          # Página principal
├── README.md          # Este arquivo
│
├── css/
│   └── styles.css     # Estilos modernos e responsivos
│
├── js/
│   └── script.js      # Interatividade e animações
│
└── images/            # Pasta para imagens (vazia por padrão)
```

## 🎯 Seções do Website

1. **Hero Section** - Apresentação principal com proposta de valor
2. **Features Overview** - Grid com funcionalidades principais
3. **Detailed Features** - Detalhamento de recursos com visuais
4. **Benefits** - Benefícios para consultores financeiros
5. **Specialists** - Rede de especialistas disponíveis
6. **CTA** - Call-to-action para agendamento de demo
7. **Footer** - Links e informações da empresa

## 🎨 Personalização

### Cores
Edite as variáveis CSS no arquivo `css/styles.css`:

```css
:root {
    --primary: #6366f1;      /* Cor primária */
    --primary-dark: #4f46e5; /* Variação escura */
    --accent: #8b5cf6;       /* Cor de destaque */
    --secondary: #0ea5e9;    /* Cor secundária */
}
```

### Conteúdo
Todo o conteúdo está em português no arquivo `index.html`. Edite conforme necessário:

- Textos e títulos
- Funcionalidades listadas
- Informações de contato
- Links do footer

### Imagens
Adicione suas imagens na pasta `images/` e atualize as referências no HTML:

```html
<img src="images/sua-imagem.png" alt="Descrição">
```

## 🌐 Deploy

### GitHub Pages
```bash
# Criar repositório no GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/scale-advisory.git
git push -u origin main

# Ir em Settings > Pages > Source: main branch
```

### Netlify
1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte seu repositório GitHub

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos, Flexbox, Grid, Animações
- **JavaScript** - Interatividade e efeitos
- **Google Fonts** - Tipografia Inter
- **Vanilla JS** - Sem dependências externas

## 📱 Responsividade

O website é totalmente responsivo com breakpoints para:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## ⚡ Performance

- Carregamento otimizado
- Lazy loading para imagens
- Animações com GPU acceleration
- Debounced scroll handlers
- CSS minimalista e eficiente

## 🎯 Funcionalidades JavaScript

- ✅ Smooth scroll para navegação
- ✅ Navbar com efeito de scroll
- ✅ Animações on-scroll (Intersection Observer)
- ✅ Contadores animados nas estatísticas
- ✅ Efeito parallax nos orbs do hero
- ✅ Tilt effect nos cards
- ✅ Ripple effect nos botões
- ✅ Menu mobile responsivo
- ✅ Progress bars animados

## 📞 Próximos Passos

Para tornar o website funcional, você pode adicionar:

1. **Formulário de Contato** - Integração com EmailJS, Formspree ou backend próprio
2. **Sistema de Agendamento** - Calendly, Acuity Scheduling
3. **Chat ao Vivo** - Intercom, Drift, Zendesk
4. **Analytics** - Google Analytics, Mixpanel
5. **CRM Integration** - Conexão com seu sistema de CRM
6. **Blog** - Seção de conteúdo educativo
7. **Área de Login** - Portal do cliente

## 📝 Licença

Este projeto foi desenvolvido para uso comercial. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou suporte:
- Email: contato@scaleadvisory.com
- Website: www.scaleadvisory.com

---

**Desenvolvido com ⚡ para consultores financeiros que querem escalar**
