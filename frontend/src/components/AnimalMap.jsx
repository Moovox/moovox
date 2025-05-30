import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle, Tooltip, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { animaisService } from '../services/animaisService';

// Corrige o problema de ícones no Leaflet
try {
  if (L && L.Icon && L.Icon.Default) {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }
} catch (e) {
  console.error("Erro ao configurar ícones do Leaflet:", e);
}

// Cores personalizadas para diferentes tipos de animais
const animalIcons = {
  bovino: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  suíno: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  ave: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  caprino: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  ovino: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }),
  default: new L.Icon.Default()
};

// Componente para ajustar automaticamente o zoom do mapa
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

// Estilo personalizado para Tooltips das cercas virtuais
const customTooltipStyle = {
  background: 'white',
  border: '1px solid #666',
  padding: '2px 6px',
  borderRadius: '3px',
  boxShadow: '0 1px 5px rgba(0,0,0,0.4)',
  fontSize: '12px',
  fontWeight: 'bold',
  opacity: '0.9'
};

function AnimalMap({
  filtroEspecie = '',
  filtroStatus = '',
  busca = '',
  exibirFiltros = true,
  altura = '500px',
  mapCenter = [-15.7801, -47.9292], 
  mapZoom = 5,
  atualizacaoAutomatica = true,
  intervaloAtualizacao = 30000,
  titulo = 'Localização dos Animais',
  exibirCercasVirtuais = true,
  exibirLegendaInterna = false
}) {
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState(mapCenter);
  const [zoom, setZoom] = useState(mapZoom);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [filtroEspecieInterno, setFiltroEspecieInterno] = useState(filtroEspecie);
  const [filtroStatusInterno, setFiltroStatusInterno] = useState(filtroStatus);
  const [buscaInterna, setBuscaInterna] = useState(busca);
  const [cercasVirtuais, setCercasVirtuais] = useState([
    {
      id: 1,
      nome: "Fazenda Principal",
      centro: [-15.8001, -47.9492],
      raio: 5000, // metros
      cor: "#3388ff",
      descricao: "Área principal da fazenda"
    },
    {
      id: 2,
      nome: "Área de Pastagem",
      centro: [-15.7701, -47.9092],
      raio: 3000, // metros
      cor: "#33cc33",
      descricao: "Área de pastagem controlada"
    },
    {
      id: 3,
      nome: "Zona Restrita",
      centro: [-15.7601, -47.9692],
      raio: 2000, // metros
      cor: "#ff3333",
      descricao: "Área restrita - manter animais afastados"
    }
  ]);

  // Simulação de dados de localização para demonstração
  // Em um ambiente real, isso viria da API
  const gerarLocalizacaoAleatoria = (base, variacao = 0.1) => {
    return base + (Math.random() - 0.5) * variacao;
  };

  useEffect(() => {
    const carregarAnimais = async () => {
      try {
        const data = await animaisService.listarAnimais();
        
        // Adicionar coordenadas simuladas
        const animaisComLocalizacao = data.map(animal => ({
          ...animal,
          // Coordenadas aleatórias baseadas no centro do mapa
          latitude: gerarLocalizacaoAleatoria(center[0], 1),
          longitude: gerarLocalizacaoAleatoria(center[1], 1),
          ultimaAtualizacao: new Date().toLocaleString('pt-BR')
        }));
        
        setAnimais(animaisComLocalizacao);
        
        // Se tiver animais, centralizar no primeiro
        if (animaisComLocalizacao.length > 0) {
          setCenter([
            animaisComLocalizacao[0].latitude,
            animaisComLocalizacao[0].longitude
          ]);
          setZoom(10);
        }
      } catch (error) {
        console.error('Erro ao carregar animais:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarAnimais();

    // Simular atualizações periódicas de localização
    let interval;
    if (atualizacaoAutomatica) {
      interval = setInterval(() => {
        setAnimais(prev => prev.map(animal => ({
          ...animal,
          latitude: gerarLocalizacaoAleatoria(animal.latitude, 0.01),
          longitude: gerarLocalizacaoAleatoria(animal.longitude, 0.01),
          ultimaAtualizacao: new Date().toLocaleString('pt-BR')
        })));
      }, intervaloAtualizacao);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [mapCenter, atualizacaoAutomatica, intervaloAtualizacao]);

  useEffect(() => {
    setFiltroEspecieInterno(filtroEspecie);
  }, [filtroEspecie]);

  useEffect(() => {
    setFiltroStatusInterno(filtroStatus);
  }, [filtroStatus]);

  useEffect(() => {
    setBuscaInterna(busca);
  }, [busca]);

  // Filtra os animais com base nos critérios
  const animaisFiltrados = animais.filter(animal => {
    const matchEspecie = !filtroEspecieInterno || 
      animal.especie?.toLowerCase() === filtroEspecieInterno.toLowerCase();
    
    const matchStatus = !filtroStatusInterno || 
      animal.status?.toLowerCase() === filtroStatusInterno.toLowerCase();
    
    const matchBusca = !buscaInterna || 
      (animal.identificacao?.toLowerCase().includes(buscaInterna.toLowerCase()) || 
       animal.nome?.toLowerCase().includes(buscaInterna.toLowerCase()));
    
    return matchEspecie && matchStatus && matchBusca;
  });

  // Selecionar o ícone correto para o tipo de animal
  const getAnimalIcon = (especie) => {
    const especieLower = especie?.toLowerCase();
    return animalIcons[especieLower] || animalIcons.default;
  };

  // Mostrar detalhes ao clicar no animal
  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
    setCenter([animal.latitude, animal.longitude]);
    setZoom(13);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-700"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
      {titulo && <h2 className="text-lg font-semibold text-amber-900 mb-4">{titulo}</h2>}
      
      {exibirFiltros && (
        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar animal..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={buscaInterna}
                onChange={(e) => setBuscaInterna(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto">
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filtroEspecieInterno}
                onChange={(e) => setFiltroEspecieInterno(e.target.value)}
              >
                <option value="">Todas as espécies</option>
                <option value="bovino">Bovinos</option>
                <option value="suíno">Suínos</option>
                <option value="ave">Aves</option>
                <option value="caprino">Caprinos</option>
                <option value="ovino">Ovinos</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={filtroStatusInterno}
                onChange={(e) => setFiltroStatusInterno(e.target.value)}
              >
                <option value="">Todos os status</option>
                <option value="Ativo">Ativos</option>
                <option value="Inativo">Inativos</option>
                <option value="Em tratamento">Em tratamento</option>
                <option value="Em quarentena">Em quarentena</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-amber-700">
            {animaisFiltrados.length} animais exibidos no mapa
          </div>
        </div>
      )}
      
      <div className={`h-[${altura}] w-full rounded-lg overflow-hidden`} style={{ height: altura }}>
        <MapContainer 
          center={center} 
          zoom={zoom} 
          style={{ height: '100%', width: '100%' }}
          preferCanvas={true}
        >
          <ChangeView center={center} zoom={zoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Grupo de camadas para cercas virtuais */}
          {exibirCercasVirtuais && (
            <LayerGroup>
              {cercasVirtuais.map((cerca, index) => {
                // Alternar as direções dos tooltips para evitar sobreposição
                const directions = ['top', 'right', 'bottom', 'left'];
                const direction = directions[index % directions.length];
                
                // Ajustar offset com base na direção
                let offset = [0, 0];
                switch(direction) {
                  case 'top': offset = [0, -20]; break;
                  case 'right': offset = [20, 0]; break;
                  case 'bottom': offset = [0, 20]; break;
                  case 'left': offset = [-20, 0]; break;
                  default: offset = [0, 0];
                }
                
                return (
                  <Circle
                    key={`cerca-${cerca.id}`}
                    center={cerca.centro}
                    radius={cerca.raio}
                    pathOptions={{
                      color: cerca.cor,
                      fillColor: cerca.cor,
                      fillOpacity: 0.1
                    }}
                  >
                    <Tooltip 
                      direction={direction}
                      offset={offset}
                      opacity={0.9}
                      permanent
                      className="custom-tooltip"
                    >
                      <div style={{...customTooltipStyle, backgroundColor: cerca.cor, color: 'white'}}>
                        {cerca.nome}
                      </div>
                    </Tooltip>
                  </Circle>
                );
              })}
            </LayerGroup>
          )}
          
          {/* Grupo de camadas para animais */}
          <LayerGroup>
            {animaisFiltrados.map(animal => (
              <Marker 
                key={animal.id}
                position={[animal.latitude, animal.longitude]}
                icon={getAnimalIcon(animal.especie)}
                eventHandlers={{
                  click: () => handleAnimalClick(animal),
                }}
                zIndexOffset={1000} // Garante que os marcadores fiquem acima das cercas
              >
                <Popup className="custom-popup">
                  <div className="p-1">
                    <h3 className="font-bold">{animal.identificacao}</h3>
                    {animal.nome && <p><span className="font-semibold">Nome:</span> {animal.nome}</p>}
                    <p><span className="font-semibold">Espécie:</span> {animal.especie}</p>
                    <p><span className="font-semibold">Peso:</span> {animal.peso} kg</p>
                    <p><span className="font-semibold">Status:</span> {animal.status}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Última atualização: {animal.ultimaAtualizacao}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </LayerGroup>
        </MapContainer>
      </div>

      {selectedAnimal && (
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-amber-900">
              {selectedAnimal.identificacao} {selectedAnimal.nome ? `(${selectedAnimal.nome})` : ''}
            </h3>
            <button 
              onClick={() => setSelectedAnimal(null)}
              className="text-amber-700 hover:text-amber-900"
            >
              &times;
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="font-semibold">Espécie:</span> {selectedAnimal.especie}</div>
            <div><span className="font-semibold">Raça:</span> {selectedAnimal.raca}</div>
            <div><span className="font-semibold">Peso:</span> {selectedAnimal.peso} kg</div>
            <div><span className="font-semibold">Status:</span> {selectedAnimal.status}</div>
            <div className="col-span-2">
              <span className="font-semibold">Coordenadas:</span> {selectedAnimal.latitude.toFixed(6)}, {selectedAnimal.longitude.toFixed(6)}
            </div>
            <div className="col-span-2 text-xs text-gray-500">
              Última atualização: {selectedAnimal.ultimaAtualizacao}
            </div>
          </div>
        </div>
      )}

      {/* Legenda de cercas virtuais - só será exibida se exibirLegendaInterna for true */}
      {exibirCercasVirtuais && exibirLegendaInterna && (
        <div className="mt-4 border-t border-amber-100 pt-4">
          <h3 className="text-sm font-semibold text-amber-900 mb-2">Cercas Virtuais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {cercasVirtuais.map(cerca => (
              <div key={`legenda-${cerca.id}`} className="flex items-center space-x-2">
                <div style={{ backgroundColor: cerca.cor }} className="w-3 h-3 rounded-full"></div>
                <span className="text-xs">{cerca.nome}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimalMap; 