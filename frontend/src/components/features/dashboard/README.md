# Dashboard Components

Esta pasta contém todos os componentes organizados para o dashboard do Moovox.

## Estrutura de Componentes

### 📊 DashboardStats.jsx

- **Função**: Exibe os cards principais de estatísticas (usuários, animais, doses pendentes, alertas)
- **Reutiliza**: Componente `Card` existente com variantes `terra`, `verde`, `palha`, `alerta`
- **Props**: `stats` (objeto com as estatísticas)

### 👥 RecentUsers.jsx

- **Função**: Lista os últimos usuários cadastrados
- **Reutiliza**: Componente `Card` existente com variante `rural`
- **Props**: `ultimosUsuarios` (array de usuários)

### 💉 VaccineStatus.jsx

- **Função**: Mostra o status das vacinas pendentes com indicadores visuais
- **Reutiliza**: Componente `Card` existente, ícones Lucide React
- **Props**: `dosesMensagem` (string com a mensagem das doses)

### 📍 AnimalLocation.jsx

- **Função**: Exibe informações de localização dos animais monitorados
- **Reutiliza**: Componente `Card` existente com layout melhorado
- **Props**: `telemetria` (objeto com dados de localização)

### 🗺️ DashboardMap.jsx

- **Função**: Wrapper para o mapa de localização dos animais
- **Reutiliza**: Componente `SafeAnimalMap` existente de `../animals/`
- **Props**: Nenhuma (usa configurações pré-definidas)

### ⏳ LoadingState.jsx

- **Função**: Gerencia estados de carregamento e erro
- **Reutiliza**: Animações existentes do Framer Motion
- **Props**: `loading` (boolean), `error` (string)

## Componentes Reutilizados

Todos os componentes reutilizam elementos já existentes no projeto:

- ✅ `Card` - Componente UI base
- ✅ `SafeAnimalMap` - Mapa de animais existente
- ✅ Ícones `lucide-react` - Ícones já utilizados
- ✅ `framer-motion` - Animações já implementadas
- ✅ Estilos CSS existentes - Classes e variantes já definidas

## Como Usar

```jsx
import {
  DashboardStats,
  RecentUsers,
  VaccineStatus,
  AnimalLocation,
  DashboardMap,
  LoadingState,
} from "../components/features/dashboard";

// Usar no componente principal
<DashboardStats stats={stats} />
<RecentUsers ultimosUsuarios={ultimosUsuarios} />
<VaccineStatus dosesMensagem={dosesMensagem} />
<AnimalLocation telemetria={telemetria} />
<DashboardMap />
<LoadingState loading={loading} error={error} />
```

## Benefícios da Organização

1. **Reutilização Máxima**: Todos os componentes reutilizam elementos existentes
2. **Modularidade**: Cada seção do dashboard é um componente independente
3. **Manutenibilidade**: Fácil de manter e atualizar cada seção
4. **Testabilidade**: Cada componente pode ser testado individualmente
5. **Legibilidade**: Dashboard principal muito mais limpo e organizado
