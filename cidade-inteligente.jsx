import { useState } from 'react';

const PALETA = {
  paper: '#EFE5CE',
  paperDark: '#DDD0B0',
  ink: '#1A1611',
  brick: '#A8412A',
  mustard: '#C89339',
  blue: '#577387',
  olive: '#5B6B3F',
  bone: '#F7EFD9',
};

const VINHETAS = [
  {
    id: 1,
    titulo: 'CENTRO DE OPERAÇÕES INTELIGENTES',
    subtitulo: '4ª madrugada · turno B',
    cor: 'blue',
    cena: 'Dona Lúcia entra às 3h47.',
    paragrafos: [
      'Os monitores estão sempre ligados. As máquinas estão sempre quentes — Lúcia aprendeu, no primeiro dia, a não encostar muito tempo na lateral dos servidores. Ela limpa o pó que ninguém vê e os vidros que ninguém olha.',
      'O sistema processa, em tempo real, 1.247.000 imagens por minuto. Lúcia processa, em tempo real, 14 banheiros, 6 corredores, 2 cozinhas e o saguão.',
      'Quando o turno acaba, ela pega o ônibus de volta. O ônibus passa por debaixo do prédio. O prédio sabe que ela passou.',
    ],
    rodape: '↳ Trabalho invisível e infraestrutura.',
  },
  {
    id: 2,
    titulo: 'CÂMERA Nº 0834-B',
    subtitulo: 'Largo histórico · 14h22',
    cor: 'brick',
    cena: 'Marcus, 16, atravessa a praça.',
    paragrafos: [
      'A câmera reconheceu Marcus 3 vezes este mês. Marcus tem 16 anos. Marcus nunca foi preso.',
      'O modelo foi treinado com fotos de quem JÁ foi preso. As fotos são, em sua maioria, de pessoas que se parecem com Marcus.',
      'O sistema chama isso de "predição". O delegado chama de "abordagem preventiva". Marcus chama de quarta-feira.',
    ],
    rodape: '↳ Viés algorítmico, necropolítica.',
    asterisco: '* O fabricante anuncia "97% de acurácia". O laudo não especifica em quais rostos.',
  },
  {
    id: 3,
    titulo: 'MAQUININHA · MODELO S-21',
    subtitulo: 'Feira de São Joaquim · 11h00',
    cor: 'mustard',
    cena: 'Dona Edna vende acarajé há 31 anos.',
    paragrafos: [
      'A maquininha sabe quanto ela vendeu hoje. Sabe quanto vendeu ontem. Sabe quem comprou no PIX e quem fugiu pro débito.',
      'Um algoritmo, em São Paulo, classifica Dona Edna como "risco médio". Ela não sabe o que é risco médio. Ela sabe que o limite do crédito caiu de R$3.000 para R$1.200 sem aviso.',
      'O atendente disse que "o sistema é automático". O sistema, automaticamente, não explica.',
    ],
    rodape: '↳ Scoring opaco, automação de decisões.',
  },
  {
    id: 4,
    titulo: 'CABO SUBMARINO · ROTA SSA-MIA',
    subtitulo: 'Bandeira do servidor: 🇺🇸',
    cor: 'olive',
    cena: 'Seu CPF está viajando.',
    paragrafos: [
      'Seu CPF, sua localização, sua cara, sua voz, seu padrão de sono captado pelo aplicativo de saúde da prefeitura.',
      'Latência até o servidor na Virgínia: 89 milissegundos. Soberania de dados: zero milissegundos.',
      'A Lei Geral de Proteção de Dados é uma lei brasileira. O cabo não é. A nuvem não é. O processador não é.',
    ],
    rodape: '↳ Soberania digital, extrativismo de dados.',
    asterisco: '* "Sua privacidade é importante para nós." — Termos de uso, parágrafo 47, fonte 8pt.',
  },
  {
    id: 5,
    titulo: 'SALA DE REUNIÃO 3 · SECRETARIA',
    subtitulo: 'Apresentação trimestral',
    cor: 'brick',
    cena: 'O slide nº 12 anuncia: REDUÇÃO DE 23%.',
    paragrafos: [
      '"Senhores e senhoras, o sistema Olho-Vivo reduziu a criminalidade em 23% no semestre."',
      'Ninguém pergunta como se mede. O asterisco, em letra 6pt no canto inferior, esclarece: medido como número de abordagens policiais, não como número de crimes.',
      'A consultoria que vendeu o sistema é a mesma que produziu o relatório. O secretário aplaude. O contrato é renovado por mais 24 meses.',
    ],
    rodape: '↳ Opacidade técnica, métricas auto-validadas.',
    asterisco: '* Solicitação de acesso ao código-fonte: negada por "segredo industrial".',
  },
  {
    id: 6,
    titulo: 'APP · GUIA TURÍSTICO INTELIGENTE',
    subtitulo: 'Avaliação 4.8 ★ · 2M downloads',
    cor: 'mustard',
    cena: 'Heinrich, da Baviera, abre o mapa.',
    paragrafos: [
      'O algoritmo destaca em verde: pontos seguros, restaurantes premiados, miradouros instagramáveis.',
      'Em vermelho: "evite esta região após o pôr-do-sol". A região vermelha é, coincidentemente, onde mora 78% da população negra da cidade.',
      'Heinrich não percebe o redlining. O algoritmo, treinado com avaliações de turistas anteriores, também não. O algoritmo é, segundo a fabricante, "neutro".',
    ],
    rodape: '↳ Redlining algorítmico, racismo automatizado.',
  },
];

function Hotspot({ x, y, num, visitada, aberta, onClick, cor }) {
  return (
    <g
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className="transition-transform"
    >
      {/* pulso */}
      {!visitada && (
        <circle
          cx={x}
          cy={y}
          r="22"
          fill="none"
          stroke={PALETA[cor]}
          strokeWidth="1.5"
          opacity="0.4"
        >
          <animate
            attributeName="r"
            values="18;28;18"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0;0.5"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
      )}
      {/* círculo principal */}
      <circle
        cx={x}
        cy={y}
        r="14"
        fill={visitada ? PALETA.paper : PALETA[cor]}
        stroke={PALETA.ink}
        strokeWidth="1.5"
      />
      <text
        x={x}
        y={y + 4.5}
        textAnchor="middle"
        fontSize="13"
        fontFamily="'Archivo Black', sans-serif"
        fill={visitada ? PALETA.ink : PALETA.bone}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {num}
      </text>
      {/* linha guia */}
      {aberta && (
        <line
          x1={x}
          y1={y}
          x2={x}
          y2={y - 50}
          stroke={PALETA.ink}
          strokeWidth="1"
          strokeDasharray="3 2"
        />
      )}
    </g>
  );
}

function Cidade({ aberta, visitadas, onHotspot }) {
  const hatching = (id, color, angle = 45) => (
    <pattern
      id={id}
      patternUnits="userSpaceOnUse"
      width="6"
      height="6"
      patternTransform={`rotate(${angle})`}
    >
      <line x1="0" y1="0" x2="0" y2="6" stroke={color} strokeWidth="1" />
    </pattern>
  );

  return (
    <svg
      viewBox="0 0 1000 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {hatching('hatch-brick', PALETA.brick, 45)}
        {hatching('hatch-blue', PALETA.blue, -45)}
        {hatching('hatch-olive', PALETA.olive, 30)}
        {hatching('hatch-mustard', PALETA.mustard, 75)}
        <pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="2" cy="2" r="0.8" fill={PALETA.ink} opacity="0.35" />
        </pattern>
        <pattern
          id="grid-paper"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke={PALETA.ink}
            strokeWidth="0.3"
            opacity="0.12"
          />
        </pattern>
      </defs>

      {/* CÉU / FUNDO COM GRID */}
      <rect width="1000" height="600" fill={PALETA.paper} />
      <rect width="1000" height="600" fill="url(#grid-paper)" />

      {/* SOL/CÍRCULO DECORATIVO */}
      <circle
        cx="850"
        cy="80"
        r="38"
        fill="none"
        stroke={PALETA.ink}
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />
      <circle cx="850" cy="80" r="22" fill={PALETA.mustard} opacity="0.7" />

      {/* SATÉLITE */}
      <g transform="translate(120, 70)">
        <rect
          x="-4"
          y="-3"
          width="8"
          height="6"
          fill={PALETA.ink}
        />
        <rect x="-14" y="-2" width="9" height="4" fill={PALETA.blue} />
        <rect x="5" y="-2" width="9" height="4" fill={PALETA.blue} />
        <line
          x1="0"
          y1="3"
          x2="0"
          y2="35"
          stroke={PALETA.ink}
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <text
          x="0"
          y="-10"
          textAnchor="middle"
          fontSize="7"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="1"
        >
          SAT · UPLINK
        </text>
      </g>

      {/* MAR (esquerda inferior) */}
      <rect x="0" y="430" width="200" height="170" fill={PALETA.blue} opacity="0.35" />
      {[0, 1, 2, 3, 4, 5].map(i => (
        <path
          key={i}
          d={`M 0 ${445 + i * 25} Q 25 ${440 + i * 25} 50 ${445 + i * 25} T 100 ${445 + i * 25} T 150 ${445 + i * 25} T 200 ${445 + i * 25}`}
          fill="none"
          stroke={PALETA.blue}
          strokeWidth="0.8"
          opacity="0.6"
        />
      ))}
      {/* navio */}
      <g transform="translate(140, 455)">
        <rect x="-15" y="0" width="30" height="6" fill={PALETA.ink} />
        <polygon points="-15,0 -22,6 15,6" fill={PALETA.ink} />
        <rect x="-3" y="-10" width="6" height="10" fill={PALETA.brick} />
      </g>

      {/* SOLO / LINHA DE BASE */}
      <line
        x1="0"
        y1="430"
        x2="200"
        y2="430"
        stroke={PALETA.ink}
        strokeWidth="1"
      />
      <line
        x1="200"
        y1="430"
        x2="200"
        y2="380"
        stroke={PALETA.ink}
        strokeWidth="1"
      />
      <line
        x1="200"
        y1="380"
        x2="1000"
        y2="380"
        stroke={PALETA.ink}
        strokeWidth="1"
      />

      {/* SUBSOLO COM CABOS */}
      <rect
        x="0"
        y="430"
        width="1000"
        height="170"
        fill="url(#dots)"
        opacity="0.4"
      />
      <rect x="200" y="380" width="800" height="50" fill={PALETA.paperDark} opacity="0.6" />

      {/* DUTOS / CABOS SUBTERRÂNEOS */}
      <g stroke={PALETA.ink} strokeWidth="1" fill="none">
        <path d="M 220 395 L 980 395" strokeDasharray="0" />
        <path d="M 220 405 L 980 405" strokeDasharray="4 2" />
        <path d="M 220 415 L 980 415" />
      </g>
      <text
        x="600"
        y="425"
        fontSize="7"
        fontFamily="'Archivo', sans-serif"
        fill={PALETA.ink}
        letterSpacing="1.5"
        opacity="0.6"
      >
        ── INFRAESTRUTURA · FIBRA ÓPTICA · 100GB/s ──
      </text>

      {/* CIDADE BAIXA / FEIRA (esquerda) */}
      <g transform="translate(50, 360)">
        {/* barracas */}
        <rect x="0" y="0" width="35" height="20" fill={PALETA.brick} />
        <polygon points="-3,0 38,0 32,-8 3,-8" fill={PALETA.mustard} />
        <line x1="3" y1="-8" x2="3" y2="20" stroke={PALETA.ink} strokeWidth="0.5" />
        <line x1="32" y1="-8" x2="32" y2="20" stroke={PALETA.ink} strokeWidth="0.5" />

        <rect x="50" y="0" width="35" height="20" fill={PALETA.olive} />
        <polygon points="47,0 88,0 82,-8 53,-8" fill={PALETA.brick} />

        {/* dona edna - figura simbólica */}
        <g transform="translate(110, -5)">
          <circle cx="6" cy="3" r="4" fill={PALETA.ink} />
          <rect x="2" y="7" width="8" height="14" fill={PALETA.brick} />
          <rect x="0" y="22" width="12" height="3" fill={PALETA.ink} />
          {/* tabuleiro */}
          <rect x="-4" y="14" width="20" height="3" fill={PALETA.mustard} />
        </g>

        <text
          x="42"
          y="35"
          textAnchor="middle"
          fontSize="6"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="1.5"
          opacity="0.7"
        >
          FEIRA · MERCADO POPULAR
        </text>
      </g>

      {/* PENHASCO / ELEVADOR / DIVISÃO CIDADE ALTA-BAIXA */}
      <line
        x1="200"
        y1="100"
        x2="200"
        y2="380"
        stroke={PALETA.ink}
        strokeWidth="1.5"
      />
      <rect
        x="190"
        y="100"
        width="20"
        height="280"
        fill="url(#hatch-brick)"
        opacity="0.3"
      />
      {/* elevador */}
      <rect
        x="195"
        y="180"
        width="10"
        height="30"
        fill={PALETA.bone}
        stroke={PALETA.ink}
        strokeWidth="0.8"
      />
      <line
        x1="200"
        y1="100"
        x2="200"
        y2="180"
        stroke={PALETA.ink}
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
      <text
        x="180"
        y="95"
        textAnchor="end"
        fontSize="7"
        fontFamily="'Archivo', sans-serif"
        fill={PALETA.ink}
        letterSpacing="1"
      >
        — CIDADE ALTA →
      </text>
      <text
        x="100"
        y="350"
        textAnchor="middle"
        fontSize="7"
        fontFamily="'Archivo', sans-serif"
        fill={PALETA.ink}
        letterSpacing="1"
      >
        ← CIDADE BAIXA —
      </text>

      {/* MORRO / PERIFERIA SUBINDO (atrás) */}
      <g>
        <polygon points="200,380 200,200 350,150 500,170 500,380" fill={PALETA.olive} opacity="0.4" />
        <polygon points="200,380 200,200 350,150 500,170 500,380" fill="url(#hatch-olive)" opacity="0.3" />
        {/* casinhas */}
        {[
          [220, 240], [260, 220], [300, 200], [340, 175], [380, 165], [420, 175], [460, 185], [240, 280],
          [290, 250], [340, 230], [400, 220], [450, 230], [220, 320], [270, 310], [320, 290], [380, 280],
          [430, 285], [480, 290], [240, 350], [320, 340], [400, 335], [470, 340],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <rect x={cx} y={cy} width="14" height="12" fill={PALETA.bone} stroke={PALETA.ink} strokeWidth="0.4" />
            <polygon points={`${cx-1},${cy} ${cx+15},${cy} ${cx+7},${cy-5}`} fill={PALETA.brick} stroke={PALETA.ink} strokeWidth="0.4" />
            <rect x={cx + 5} y={cy + 6} width="3" height="6" fill={PALETA.ink} />
          </g>
        ))}
        <text
          x="350"
          y="140"
          textAnchor="middle"
          fontSize="6"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="2"
          opacity="0.7"
        >
          AUTO-CONSTRUÇÃO · ZONA INFORMAL
        </text>
      </g>

      {/* CIDADE ALTA / PRÉDIOS MODERNOS (direita) */}
      {/* prédio do Centro de Operações */}
      <g>
        <rect x="540" y="120" width="80" height="260" fill={PALETA.blue} stroke={PALETA.ink} strokeWidth="1" />
        <rect x="540" y="120" width="80" height="260" fill="url(#hatch-blue)" opacity="0.25" />
        {/* janelas em grid */}
        {Array.from({ length: 11 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={548 + col * 14}
              y={130 + row * 22}
              width="9"
              height="14"
              fill={row === 1 && col === 2 ? PALETA.mustard : PALETA.bone}
              stroke={PALETA.ink}
              strokeWidth="0.3"
              opacity={row === 1 && col === 2 ? 1 : 0.85}
            />
          ))
        )}
        {/* topo */}
        <rect x="555" y="100" width="50" height="20" fill={PALETA.ink} />
        <line x1="580" y1="100" x2="580" y2="78" stroke={PALETA.ink} strokeWidth="1.5" />
        <circle cx="580" cy="76" r="3" fill={PALETA.brick} />
        <text
          x="580"
          y="395"
          textAnchor="middle"
          fontSize="7"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="1.5"
        >
          CENTRO DE OPERAÇÕES
        </text>
      </g>

      {/* prédio prefeitura */}
      <g>
        <rect x="660" y="200" width="100" height="180" fill={PALETA.paperDark} stroke={PALETA.ink} strokeWidth="1" />
        {/* colunas */}
        {[0, 1, 2, 3, 4].map(i => (
          <rect
            key={i}
            x={672 + i * 18}
            y={220}
            width="6"
            height="100"
            fill={PALETA.bone}
            stroke={PALETA.ink}
            strokeWidth="0.4"
          />
        ))}
        {/* frontão */}
        <polygon points="660,200 760,200 710,175" fill={PALETA.bone} stroke={PALETA.ink} strokeWidth="1" />
        {/* sala iluminada */}
        <rect x="690" y="335" width="40" height="25" fill={PALETA.mustard} stroke={PALETA.ink} strokeWidth="0.5" />
        {/* figurinhas na reunião */}
        {[695, 705, 715, 725].map(x => (
          <circle key={x} cx={x} cy={345} r="1.5" fill={PALETA.ink} />
        ))}
        <text
          x="710"
          y="395"
          textAnchor="middle"
          fontSize="7"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="1.5"
        >
          PREFEITURA · ALA TÉCNICA
        </text>
      </g>

      {/* Prédio extra residencial */}
      <g>
        <rect x="800" y="180" width="60" height="200" fill={PALETA.bone} stroke={PALETA.ink} strokeWidth="1" />
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={808 + col * 13}
              y={190 + row * 20}
              width="8"
              height="12"
              fill={PALETA.blue}
              opacity="0.5"
              stroke={PALETA.ink}
              strokeWidth="0.3"
            />
          ))
        )}
      </g>

      {/* Prédio direita extrema */}
      <g>
        <rect x="880" y="220" width="80" height="160" fill={PALETA.brick} stroke={PALETA.ink} strokeWidth="1" />
        <rect x="880" y="220" width="80" height="160" fill="url(#hatch-brick)" opacity="0.25" />
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={886 + col * 14}
              y={230 + row * 20}
              width="8"
              height="12"
              fill={PALETA.bone}
              stroke={PALETA.ink}
              strokeWidth="0.3"
              opacity="0.85"
            />
          ))
        )}
      </g>

      {/* CÂMERA DE VIGILÂNCIA NA PRAÇA (cidade baixa) */}
      <g transform="translate(155, 360)">
        <line x1="0" y1="0" x2="0" y2="-50" stroke={PALETA.ink} strokeWidth="1.5" />
        <rect x="-7" y="-58" width="14" height="8" fill={PALETA.ink} />
        <circle cx="-3" cy="-54" r="1.5" fill={PALETA.brick} />
        {/* cone de visão */}
        <polygon
          points="-7,-54 -45,-30 -45,-50"
          fill={PALETA.brick}
          opacity="0.18"
          stroke={PALETA.brick}
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </g>

      {/* TURISTA NO MIRANTE */}
      <g transform="translate(495, 145)">
        <circle cx="0" cy="0" r="3" fill={PALETA.ink} />
        <rect x="-3" y="3" width="6" height="11" fill={PALETA.mustard} />
        {/* celular */}
        <rect x="-6" y="2" width="3" height="5" fill={PALETA.ink} />
        {/* balão */}
        <g transform="translate(15, -25)">
          <rect x="0" y="0" width="55" height="22" fill={PALETA.bone} stroke={PALETA.ink} strokeWidth="0.7" />
          <polygon points="0,18 -5,25 5,18" fill={PALETA.bone} stroke={PALETA.ink} strokeWidth="0.7" />
          <text
            x="27"
            y="9"
            textAnchor="middle"
            fontSize="5"
            fontFamily="'Archivo', sans-serif"
            fill={PALETA.ink}
            letterSpacing="0.5"
          >
            evite esta região
          </text>
          <text
            x="27"
            y="16"
            textAnchor="middle"
            fontSize="5"
            fontFamily="'Archivo', sans-serif"
            fill={PALETA.brick}
            letterSpacing="0.5"
          >
            ★★★★★
          </text>
        </g>
      </g>

      {/* CABO INDO PARA SERVIDOR DISTANTE (direita extrema) */}
      <g>
        <path
          d="M 960 405 L 980 405 L 985 415 L 985 470"
          fill="none"
          stroke={PALETA.ink}
          strokeWidth="2"
        />
        <g transform="translate(965, 480)">
          <rect x="-12" y="0" width="40" height="50" fill={PALETA.olive} stroke={PALETA.ink} strokeWidth="1" />
          <rect x="-12" y="0" width="40" height="50" fill="url(#hatch-olive)" opacity="0.3" />
          {/* racks */}
          {[5, 15, 25, 35].map(y => (
            <line key={y} x1="-10" y1={y} x2="26" y2={y} stroke={PALETA.bone} strokeWidth="0.6" />
          ))}
          {/* bandeira */}
          <rect x="-12" y="-12" width="14" height="9" fill={PALETA.bone} stroke={PALETA.ink} strokeWidth="0.5" />
          <text
            x="-5"
            y="-5"
            textAnchor="middle"
            fontSize="6"
            fontFamily="'Archivo Black', sans-serif"
            fill={PALETA.blue}
          >
            US
          </text>
          <text
            x="8"
            y="68"
            textAnchor="middle"
            fontSize="6"
            fontFamily="'Archivo', sans-serif"
            fill={PALETA.ink}
            letterSpacing="1"
          >
            DATACENTER · VA
          </text>
        </g>
        <text
          x="900"
          y="397"
          fontSize="6"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="1.5"
        >
          → DADOS · 89ms
        </text>
      </g>

      {/* HOTSPOTS */}
      <Hotspot x={580} y={170} num={1} cor="blue" visitada={visitadas.has(1)} aberta={aberta === 1} onClick={() => onHotspot(1)} />
      <Hotspot x={155} y={310} num={2} cor="brick" visitada={visitadas.has(2)} aberta={aberta === 2} onClick={() => onHotspot(2)} />
      <Hotspot x={158} y={365} num={3} cor="mustard" visitada={visitadas.has(3)} aberta={aberta === 3} onClick={() => onHotspot(3)} />
      <Hotspot x={970} y={460} num={4} cor="olive" visitada={visitadas.has(4)} aberta={aberta === 4} onClick={() => onHotspot(4)} />
      <Hotspot x={710} y={345} num={5} cor="brick" visitada={visitadas.has(5)} aberta={aberta === 5} onClick={() => onHotspot(5)} />
      <Hotspot x={495} y={130} num={6} cor="mustard" visitada={visitadas.has(6)} aberta={aberta === 6} onClick={() => onHotspot(6)} />

      {/* TÍTULO TÉCNICO em canto */}
      <g transform="translate(20, 30)">
        <text
          x="0"
          y="0"
          fontSize="11"
          fontFamily="'Archivo Black', sans-serif"
          fill={PALETA.ink}
          letterSpacing="3"
        >
          PRANCHA Nº 01 · CORTE TRANSVERSAL
        </text>
        <text
          x="0"
          y="13"
          fontSize="7"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="2"
          opacity="0.7"
        >
          A CIDADE INTELIGENTE · ESCALA: VARIÁVEL · DESENHO TÉCNICO
        </text>
      </g>

      <g transform="translate(980, 30)">
        <text
          x="0"
          y="0"
          textAnchor="end"
          fontSize="7"
          fontFamily="'Archivo', sans-serif"
          fill={PALETA.ink}
          letterSpacing="2"
          opacity="0.7"
        >
          ⌖ CLIQUE NOS NÚMEROS
        </text>
      </g>
    </svg>
  );
}

function Vinheta({ data, onClose }) {
  const cor = PALETA[data.cor];
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-8 z-50"
      style={{ backgroundColor: 'rgba(26, 22, 17, 0.55)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl"
        style={{
          backgroundColor: PALETA.bone,
          border: `2px solid ${PALETA.ink}`,
          boxShadow: `12px 12px 0 ${PALETA.ink}`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* faixa superior */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ backgroundColor: cor, borderBottom: `2px solid ${PALETA.ink}` }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 flex items-center justify-center"
              style={{
                backgroundColor: PALETA.bone,
                border: `1.5px solid ${PALETA.ink}`,
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '15px',
                color: PALETA.ink,
              }}
            >
              {data.id}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '2px',
                  color: PALETA.bone,
                  lineHeight: 1.1,
                }}
              >
                {data.titulo}
              </div>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '1.5px',
                  color: PALETA.bone,
                  opacity: 0.85,
                  marginTop: '2px',
                }}
              >
                {data.subtitulo}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center hover:rotate-90 transition-transform"
            style={{
              backgroundColor: PALETA.bone,
              border: `1.5px solid ${PALETA.ink}`,
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: '14px',
              color: PALETA.ink,
              cursor: 'pointer',
            }}
            aria-label="fechar"
          >
            ×
          </button>
        </div>

        {/* corpo */}
        <div className="px-6 py-5 sm:px-8 sm:py-6">
          {/* cena */}
          <div
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontStyle: 'italic',
              fontSize: '20px',
              color: cor,
              lineHeight: 1.3,
              marginBottom: '16px',
              borderLeft: `3px solid ${cor}`,
              paddingLeft: '14px',
            }}
          >
            {data.cena}
          </div>

          {/* parágrafos */}
          <div className="space-y-3">
            {data.paragrafos.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: '14px',
                  color: PALETA.ink,
                  lineHeight: 1.55,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {data.asterisco && (
            <p
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: '11px',
                color: PALETA.ink,
                opacity: 0.65,
                marginTop: '14px',
                lineHeight: 1.4,
                fontStyle: 'italic',
              }}
            >
              {data.asterisco}
            </p>
          )}

          {/* rodapé conceitual */}
          <div
            className="mt-5 pt-3"
            style={{
              borderTop: `1px solid ${PALETA.ink}`,
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              color: cor,
            }}
          >
            {data.rodape}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarraInferior({ visitadas, onAbrir }) {
  return (
    <div
      className="border-t-2 px-6 py-3 flex flex-wrap items-center gap-x-5 gap-y-2"
      style={{ borderColor: PALETA.ink, backgroundColor: PALETA.paperDark }}
    >
      <div
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: '10px',
          letterSpacing: '2.5px',
          color: PALETA.ink,
        }}
      >
        ÍNDICE DE VINHETAS
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {VINHETAS.map(v => (
          <button
            key={v.id}
            onClick={() => onAbrir(v.id)}
            className="flex items-center gap-1.5 px-2 py-1 transition-opacity hover:opacity-100"
            style={{
              backgroundColor: visitadas.has(v.id) ? PALETA[v.cor] : 'transparent',
              border: `1.5px solid ${PALETA.ink}`,
              opacity: visitadas.has(v.id) ? 1 : 0.65,
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '10px',
                color: visitadas.has(v.id) ? PALETA.bone : PALETA.ink,
              }}
            >
              {v.id}
            </span>
            <span
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: '9px',
                letterSpacing: '1px',
                color: visitadas.has(v.id) ? PALETA.bone : PALETA.ink,
              }}
            >
              {v.titulo}
            </span>
          </button>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2">
        <div
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: '10px',
            letterSpacing: '1.5px',
            color: PALETA.ink,
            opacity: 0.7,
          }}
        >
          VISITADAS
        </div>
        <div
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: '14px',
            color: PALETA.ink,
          }}
        >
          {visitadas.size}/{VINHETAS.length}
        </div>
      </div>
    </div>
  );
}

export default function CidadeInteligente() {
  const [aberta, setAberta] = useState(null);
  const [visitadas, setVisitadas] = useState(new Set());

  function abrir(id) {
    setAberta(id);
    setVisitadas(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  const todasVisitadas = visitadas.size === VINHETAS.length;

  return (
    <div
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: PALETA.paper }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Black&family=DM+Serif+Display:ital@1&display=swap');
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      {/* CABEÇALHO */}
      <header
        className="border-b-2 px-6 py-3 flex items-center justify-between flex-wrap gap-3"
        style={{ borderColor: PALETA.ink, backgroundColor: PALETA.bone }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 flex items-center justify-center"
            style={{
              backgroundColor: PALETA.brick,
              border: `2px solid ${PALETA.ink}`,
            }}
          >
            <span
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '22px',
                color: PALETA.bone,
              }}
            >
              ▣
            </span>
          </div>
          <div>
            <h1
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '18px',
                letterSpacing: '4px',
                color: PALETA.ink,
                lineHeight: 1.05,
              }}
            >
              A CIDADE INTELIGENTE
            </h1>
            <p
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: '10px',
                letterSpacing: '2px',
                color: PALETA.ink,
                opacity: 0.7,
                marginTop: '2px',
              }}
            >
              SEIS VINHETAS · UMA PRANCHA · ESC. INDETERMINADA
            </p>
          </div>
        </div>
        <div
          className="hidden sm:block text-right"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: 'italic',
            fontSize: '13px',
            color: PALETA.ink,
            opacity: 0.85,
            maxWidth: '340px',
            lineHeight: 1.3,
          }}
        >
          “toda cidade é uma ficção que decide quem cabe nela.”
        </div>
      </header>

      {/* MAPA */}
      <main className="flex-1 relative">
        <div className="w-full" style={{ aspectRatio: '1000 / 600' }}>
          <Cidade aberta={aberta} visitadas={visitadas} onHotspot={abrir} />
        </div>

        {todasVisitadas && !aberta && (
          <div
            className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none"
            style={{ backgroundColor: 'rgba(239, 229, 206, 0.92)' }}
          >
            <div
              className="max-w-xl text-center px-8 py-7 pointer-events-auto"
              style={{
                backgroundColor: PALETA.bone,
                border: `2px solid ${PALETA.ink}`,
                boxShadow: `10px 10px 0 ${PALETA.ink}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '3px',
                  color: PALETA.brick,
                  marginBottom: '14px',
                }}
              >
                FIM DA PRANCHA
              </div>
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: 'italic',
                  fontSize: '20px',
                  color: PALETA.ink,
                  lineHeight: 1.35,
                  marginBottom: '14px',
                }}
              >
                Não existe cidade inteligente. Existem cidades que decidem, com tecnologia,
                quem é legível e quem é descartável.
              </p>
              <p
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: '12px',
                  color: PALETA.ink,
                  opacity: 0.75,
                  letterSpacing: '0.5px',
                }}
              >
                A pesquisa em ciências humanas, mais do que nunca, é um trabalho de
                tradução: tornar visível o que o sistema apaga.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* RODAPÉ ÍNDICE */}
      <BarraInferior visitadas={visitadas} onAbrir={abrir} />

      {/* MODAL */}
      {aberta && (
        <Vinheta
          data={VINHETAS.find(v => v.id === aberta)}
          onClose={() => setAberta(null)}
        />
      )}
    </div>
  );
}
