# 🐄 Moovox

**Moovox** é uma plataforma de **gestão inteligente de animais de pasto**, desenvolvida para **pequenos produtores rurais**, unindo **tecnologia de telemetria e geolocalização** com um sistema web intuitivo.

---

## 📌 Visão Geral

O Moovox facilita o controle e o monitoramento do rebanho, otimizando tarefas como:
- Localização em tempo real dos animais
- Acompanhamento da saúde
- Controle automatizado de vacinação
- Visualização de dados centralizados em um painel simples e eficiente

Inspirado no conceito de pulseiras inteligentes, o projeto aplica esses princípios ao ambiente rural, promovendo **produtividade, economia e tomada de decisão baseada em dados**.

---

## 🎯 Objetivos

- 📍 Localizar os animais em tempo real via geolocalização
- 💉 Monitorar a saúde e vacinação do rebanho com alertas automatizados
- 📊 Centralizar dados para facilitar a gestão e o manejo
- 💻 Disponibilizar um sistema acessível e de baixo custo para pequenos produtores

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React (Vite)
- **Backend:** Node.js
- **Banco de Dados:** MariaDB
- **Arquitetura:** MVC (Model-View-Controller)
- **Deploy:** Vercel (Frontend)

---

## 📁 Estrutura do Projeto

```text
/moovox
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── public/
│   ├── .github/
│   │   └── workflows/
│   │       └── vercel-deploy.yml
│   ├── package.json
│   └── README.md
├── backend/
│   └── ...
├── README.md
└── ...
```

---

## 🚀 Como Rodar o Frontend Localmente

1. **Acesse a pasta do frontend:**
   ```bash
   cd frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O sistema estará disponível em `http://localhost:5173` (ou porta informada pelo Vite).

---

## 🚀 Deploy Automático com Vercel

O frontend está configurado para deploy automático na Vercel via GitHub Actions.  
O arquivo de workflow está em `.github/workflows/vercel-deploy.yml` e realiza o deploy a cada push na branch `main`.

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na pasta `frontend` para configurar variáveis de ambiente, se necessário.  
Exemplo:
```
VITE_API_URL=http://localhost:3001
```

---

## 🧪 Status do Projeto

- [x] Sistema de cadastro de animais
- [x] Painel com visualização de localização e informações
- [x] Controle de vacinação com notificações automatizadas
- [ ] Testes em campo (em andamento)

---

## 👥 Autores

- Victor Hugo Anizau Barros
- Daniel Queiroz Luz
- André dos Santos Holanda
- Ricardo Augusto de Jesus Costa

**Orientador:** Adriano Doimo

---

## 📄 Licença

Este projeto é apenas para fins educacionais, desenvolvido na ETEC Bento Quirino – Campinas/SP.

> "Tecnologia acessível para transformar o campo." 🌱