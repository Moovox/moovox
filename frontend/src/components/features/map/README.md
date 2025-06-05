# Animal Map - Sistema de Localização

Este módulo contém todos os componentes e configurações relacionados ao mapa de localização dos animais com cercas virtuais inteligentes.

## 📁 Estrutura

```
map/
├── AnimalMap.jsx                 # Componente principal (página completa)
├── AnimalMapDashboard.jsx        # Versão compacta para dashboard
├── config/
│   ├── leafletConfig.js          # Configurações gerais do Leaflet
│   ├── animalIcons.js           # Ícones e cores dos animais
│   └── virtualFencesConfig.js   # Configuração das cercas virtuais
├── components/                   # Componentes modulares
│   ├── index.js                 # Exports centralizados
│   ├── MapStyles.jsx            # Estilos customizados
│   ├── AnimalMapHeader.jsx      # Cabeçalho com título e legenda
│   ├── AnimalMapInfo.jsx        # Informações de contagem
│   ├── AnimalMapContainer.jsx   # Container principal do mapa
│   ├── AnimalMapStates.jsx      # Estados de loading/error
│   ├── SelectedAnimalCard.jsx   # Card do animal selecionado
│   ├── AnimalMapDebugInfo.jsx   # Informações de debug
│   ├── AnimalMarker.jsx         # Marcadores dos animais
│   ├── VirtualFences.jsx        # Cercas virtuais
│   └── MapControls.jsx          # Controles do mapa (zoom, legendas)
├── hooks/                       # Hooks customizados
│   ├── index.js                # Exports centralizados
│   ├── useAnimalData.js        # Hook para dados dos animais
│   ├── useAnimalMapState.js    # Hook para estado do mapa
│   └── useAnimalMapHandlers.js # Hook para handlers de eventos
├── utils/
│   ├── mapUtils.js              # Funções utilitárias (cálculos, coordenadas)
│   └── fenceUtils.js            # Utilitários das cercas virtuais
└── README.md                    # Esta documentação
```

## 🚀 Uso Básico

```jsx
import { AnimalMap, AnimalMapDashboard, CompactMapLegend } from "../features/map";

// Página completa com todos os recursos
<AnimalMap
  title="Localização dos Animais"
  showInternalLegend={true}
  height="500px"
/>

// Dashboard compacto
<AnimalMapDashboard
  height="220px"
  showVirtualFences={true}
  autoUpdate={true}
/>

// Legenda externa
<CompactMapLegend speciesConfig={speciesConfig} />
```

## 🎯 Cercas Virtuais Inteligentes

### Áreas por Espécie

- **🐄 Pasto dos Bovinos** (Verde) - Área principal de 1km
- **🐷 Área dos Suínos** (Vermelho) - 600m de raio
- **🐔 Aviário** (Amarelo) - 400m para aves
- **🐐 Pasto dos Caprinos** (Azul) - 700m de raio
- **🐑 Pasto dos Ovinos** (Roxo) - 650m de raio
- **🏢 Centro de Manejo** (Cinza) - Administração
- **⚠️ Área de Quarentena** (Vermelho tracejado) - Animais em tratamento

### Interação Simplificada

- **Hover nas cercas**: Mostra informações detalhadas da área
- **Clique nos animais**: Seleciona e centraliza no mapa
- **Card do animal**: Mostra detalhes com botão para limpar seleção

## ⚙️ Configurações

### Props do AnimalMap (Página Completa)

| Prop                 | Tipo    | Padrão             | Descrição               |
| -------------------- | ------- | ------------------ | ----------------------- |
| `title`              | string  | "Mapa dos Animais" | Título do mapa          |
| `speciesFilter`      | string  | ""                 | Filtrar por espécie     |
| `statusFilter`       | string  | ""                 | Filtrar por status      |
| `search`             | string  | ""                 | Busca por ID/nome       |
| `height`             | string  | "400px"            | Altura do mapa          |
| `showVirtualFences`  | boolean | true               | Mostrar cercas virtuais |
| `showInternalLegend` | boolean | false              | Mostrar legenda interna |
| `autoUpdate`         | boolean | true               | Atualização automática  |
| `className`          | string  | ""                 | Classes CSS adicionais  |

### Props do AnimalMapDashboard (Compacto)

| Prop                | Tipo    | Padrão  | Descrição                |
| ------------------- | ------- | ------- | ------------------------ |
| `height`            | string  | "220px" | Altura base              |
| `heightSm`          | string  | "260px" | Altura em telas pequenas |
| `heightMd`          | string  | "380px" | Altura em telas médias   |
| `showVirtualFences` | boolean | true    | Mostrar cercas virtuais  |
| `autoUpdate`        | boolean | true    | Atualização automática   |
| `className`         | string  | ""      | Classes CSS adicionais   |

## 🎨 Visual Aprimorado

### Página Completa (AnimalMap)

- **Card principal**: Bordas arredondadas, sombra suave
- **Seções definidas**: Header, mapa, footer com padding adequado
- **Loading overlay**: Spinner centralizado com backdrop
- **Card do animal**: Design melhorado com gradient e botão de fechar

### Dashboard (AnimalMapDashboard)

- **Visual compacto**: Sem padding, otimizado para cards
- **Badge de contagem**: Contador de animais no canto superior
- **Loading discreto**: Overlay sutil e compacto
- **Integração seamless**: Se adapta ao design do card pai

## 🔧 Hooks Customizados

### `useAnimalMapState`

Gerencia estado do mapa:

- Centro, zoom, animal selecionado
- Funções: `selectAnimal`, `clearSelection`, `updateMapView`

### `useAnimalMapHandlers`

Gerencia eventos:

- `handleAnimalClick`: Clique em marcador de animal

### `useAnimalData`

Gerencia dados:

- Carregamento, filtros, atualizações automáticas

## 🎯 Arquitetura Componentizada

### ✅ **Separação de Responsabilidades**

- Cada componente tem função específica
- Hooks isolam lógica de negócio

### ✅ **Reutilização**

- `AnimalMapDashboard` para cards compactos
- `AnimalMap` para páginas completas
- Componentes internos reutilizáveis

### ✅ **Manutenibilidade**

- Código modular e bem documentado
- Fácil adicionar novas funcionalidades

### ✅ **Performance**

- Lazy loading opcional
- Re-renderizações otimizadas
- Debounce em filtros

## 🌍 Localização

- **Centro**: Área rural em Goiás (-16.2880, -49.2640)
- **Escala**: Fazenda com múltiplas áreas de manejo
- **Realismo**: Coordenadas de área rural real

## 📱 Responsividade

- **Mobile**: Interface otimizada, tooltips adaptados
- **Tablet**: Layout intermediário
- **Desktop**: Experiência completa

## 🚦 Estados Visuais

- **Carregamento**: Overlay com spinner
- **Erro**: Mensagem de erro clara
- **Seleção**: Animal destacado com card informativo
- **Hover**: Tooltips das cercas com informações

## ⚡ Performance

- ✅ Componentes modulares
- ✅ Lazy loading disponível
- ✅ Hooks otimizados
- ✅ CSS-in-JS mínimo
- ✅ Memoização inteligente

## 🐛 Troubleshooting

### Dashboard não aparece no card

- Verifique se está usando `AnimalMapDashboard`
- Confirme o height adequado para o container

### Animais não aparecem

- Verifique a API de dados
- Confirme filtros aplicados

### Tooltips não funcionam

- Verifique `showVirtualFences={true}`
- Confirme dados das cercas

## 📦 Exports Disponíveis

```jsx
import {
  AnimalMap, // Componente principal
  AnimalMapDashboard, // Versão dashboard
  CompactMapLegend, // Legenda compacta
  speciesConfig, // Configuração de espécies
  virtualFencesData, // Dados das cercas
} from "../features/map";
```
