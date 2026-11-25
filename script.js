const magSlider = document.getElementById('magnitude');
const aSlider = document.getElementById('param-a');
const hSlider = document.getElementById('param-h');
const kSlider = document.getElementById('param-k');
const resetBtn = document.getElementById('reset-btn');

const magVal = document.getElementById('mag-val');
const aVal = document.getElementById('a-val');
const hVal = document.getElementById('h-val');
const kVal = document.getElementById('k-val');

const formulaDisplay = document.getElementById('formula-display');
const ampVal = document.getElementById('amp-val');
const energyVal = document.getElementById('energy-val');
const impactDesc = document.getElementById('impact-desc');

const svgScenes = {
  micro: `
    <svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="115" fill="#0f172a"/>
      <rect y="115" width="280" height="50" fill="#1e293b"/>
      <rect x="45" y="45" width="42" height="70" fill="#334155" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="53" y="55" width="8" height="10" fill="#38bdf8" opacity="0.6"/>
      <rect x="70" y="55" width="8" height="10" fill="#38bdf8" opacity="0.6"/>
      <rect x="53" y="75" width="8" height="10" fill="#38bdf8" opacity="0.6"/>
      <rect x="70" y="75" width="8" height="10" fill="#38bdf8" opacity="0.6"/>
      <rect x="115" y="30" width="50" height="85" fill="#334155" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="125" y="42" width="10" height="12" fill="#38bdf8" opacity="0.6"/>
      <rect x="145" y="42" width="10" height="12" fill="#38bdf8" opacity="0.6"/>
      <rect x="125" y="65" width="10" height="12" fill="#38bdf8" opacity="0.6"/>
      <rect x="145" y="65" width="10" height="12" fill="#38bdf8" opacity="0.6"/>
      <rect x="190" y="60" width="45" height="55" fill="#334155" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="140" cy="142" r="5" fill="#38bdf8"/>
      <circle cx="140" cy="142" r="12" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,2"/>
    </svg>`,
  light: `
    <svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="115" fill="#0f172a"/>
      <rect y="115" width="280" height="50" fill="#1e293b"/>
      <rect x="45" y="45" width="42" height="70" fill="#334155" stroke="#38bdf8" stroke-width="1.5"/>
      <path d="M 38 55 Q 34 65 38 75" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="115" y="30" width="50" height="85" fill="#334155" stroke="#facc15" stroke-width="1.5"/>
      <polyline points="130,115 135,102 128,92" fill="none" stroke="#facc15" stroke-width="1.5"/>
      <rect x="190" y="60" width="45" height="55" fill="#334155" stroke="#38bdf8" stroke-width="1.5"/>
      <path d="M 242 68 Q 246 78 242 88" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="140" cy="142" r="6" fill="#facc15"/>
      <circle cx="140" cy="142" r="16" fill="none" stroke="#facc15" stroke-width="1.2"/>
      <circle cx="140" cy="142" r="26" fill="none" stroke="#facc15" stroke-width="0.8" opacity="0.6"/>
    </svg>`,
  moderate: `
    <svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="115" fill="#0f172a"/>
      <rect y="115" width="280" height="50" fill="#1e293b"/>
      <rect x="45" y="48" width="42" height="67" fill="#334155" stroke="#fb923c" stroke-width="1.5"/>
      <polyline points="55,115 62,95 52,80 65,65" fill="none" stroke="#fb923c" stroke-width="2"/>
      <rect x="115" y="32" width="50" height="83" fill="#334155" stroke="#fb923c" stroke-width="1.5" transform="rotate(-1.5 140 115)"/>
      <polyline points="145,115 138,90 150,70 140,48" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <polygon points="95,115 103,108 108,115" fill="#64748b"/>
      <rect x="190" y="60" width="45" height="55" fill="#334155" stroke="#fb923c" stroke-width="1.5"/>
      <line x1="120" y1="165" x2="155" y2="115" stroke="#fb923c" stroke-width="2" stroke-dasharray="4,2"/>
      <circle cx="140" cy="138" r="7" fill="#fb923c"/>
      <circle cx="140" cy="138" r="20" fill="none" stroke="#fb923c" stroke-width="1.5"/>
    </svg>`,
  strong: `
    <svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="115" fill="#170f1e"/>
      <rect y="115" width="280" height="50" fill="#271a24"/>
      <polygon points="40,115 48,72 85,78 88,115" fill="#334155" stroke="#f43f5e" stroke-width="1.8"/>
      <polyline points="55,115 65,92 58,76" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <polygon points="112,115 115,65 138,75 162,60 168,115" fill="#334155" stroke="#f43f5e" stroke-width="2"/>
      <polygon points="102,115 118,98 135,115" fill="#64748b"/>
      <polygon points="155,115 172,100 185,115" fill="#64748b"/>
      <rect x="195" y="65" width="42" height="50" fill="#334155" stroke="#fb923c" stroke-width="1.8" transform="rotate(6 215 115)"/>
      <polyline points="135,115 128,135 145,150 138,165" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
      <circle cx="136" cy="138" r="8" fill="#f43f5e"/>
      <circle cx="136" cy="138" r="24" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
    </svg>`,
  major: `
    <svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="115" fill="#1f0a12"/>
      <polygon points="0,115 135,115 125,165 0,165" fill="#2d161e"/>
      <polygon points="145,123 280,123 280,165 135,165" fill="#241118"/>
      <polygon points="30,115 48,88 72,96 88,115" fill="#475569" stroke="#f43f5e" stroke-width="1.8"/>
      <polygon points="95,115 115,82 132,115" fill="#334155" stroke="#f43f5e" stroke-width="2"/>
      <polygon points="155,123 175,92 198,104 212,123" fill="#475569" stroke="#f43f5e" stroke-width="1.8"/>
      <polygon points="218,123 236,102 258,123" fill="#334155" stroke="#f43f5e" stroke-width="1.8"/>
      <polygon points="135,115 145,123 135,165 125,165" fill="#f43f5e" opacity="0.8"/>
      <circle cx="138" cy="136" r="10" fill="#f43f5e"/>
      <circle cx="138" cy="136" r="28" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <circle cx="138" cy="136" r="42" fill="none" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,3"/>
    </svg>`
};

const impactData = {
  micro: {
    title: "Microsismo (M < 3.9)",
    desc: "Imperceptible para la población general. Detectado únicamente por sismógrafos de alta sensibilidad.",
    bullets: [
      "Infraestructura: Sin daños estructurales ni no estructurales.",
      "Población: Cero riesgo; usualmente no se siente."
    ],
    scene: svgScenes.micro,
    caption: "Estructura estable · Sin deformación"
  },
  light: {
    title: "Sismo Menor / Ligero (4.0 - 4.9)",
    desc: "Sensible en interiores como el paso de un camión pesado. Objetos colgantes oscilan.",
    bullets: [
      "Infraestructura: Posibles grietas superficiales en mampostería precaria o sin refuerzo.",
      "Población: Alarma leve, sin evacuaciones necesarias."
    ],
    scene: svgScenes.light,
    caption: "Oscilación leve · Fisuras superficiales"
  },
  moderate: {
    title: "Sismo Moderado (5.0 - 5.9)",
    desc: "Daños considerables en estructuras vulnerables de adobe o mampostería sin refuerzo antisísmico.",
    bullets: [
      "Infraestructura: Grietas en muros, caída de revestimientos y daños en redes de servicios.",
      "Población: Riesgo moderado en zonas densas con edificaciones antiguas."
    ],
    scene: svgScenes.moderate,
    caption: "Grietas estructurales · Caída de mampostería"
  },
  strong: {
    title: "Sismo Fuerte / Severo (6.0 - 6.9)",
    desc: "Destrucción severa en áreas pobladas hasta 160 km a la redonda del foco.",
    bullets: [
      "Infraestructura: Colapso parcial de edificios mal diseñados, deslizamientos en laderas inestables.",
      "Población: Alto riesgo de fatalidades si no se respetan códigos antisísmicos."
    ],
    scene: svgScenes.strong,
    caption: "Colapso parcial · Inestabilidad de laderas"
  },
  major: {
    title: "Gran Terremoto / Catastrófico (M ≥ 7.0)",
    desc: "Devastación total cerca del epicentro. Modificación geomorfológica visible del relieve y fallas.",
    bullets: [
      "Infraestructura: Destrucción masiva de puentes, rutas y edificios. Licuefacción de suelos blandos.",
      "Población: Crisis humanitaria, pérdidas humanas elevadas y colapso de servicios."
    ],
    scene: svgScenes.major,
    caption: "Ruptura de falla · Destrucción masiva"
  }
};

const ctx = document.getElementById('richterChart').getContext('2d');
const richterChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Función Logarítmica M(A)',
        data: [],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        borderWidth: 2.5,
        pointRadius: 0,
        fill: true,
        tension: 0.2
      },
      {
        label: 'Límite Físico Escala Richter (M = 10)',
        data: [],
        borderColor: 'rgba(244, 63, 94, 0.65)',
        borderWidth: 1.5,
        borderDash: [6, 6],
        pointRadius: 0,
        fill: false
      },
      {
        label: 'Sismo Seleccionado',
        data: [],
        borderColor: '#f43f5e',
        backgroundColor: '#f43f5e',
        pointRadius: 7,
        pointHoverRadius: 9,
        showLine: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Amplitud Relativa (A / A₀) [escala lineal]',
          color: '#94a3b8'
        },
        ticks: { color: '#94a3b8' },
        grid: { color: '#334155' }
      },
      y: {
        title: {
          display: true,
          text: 'Magnitud / Valor Transformado M(A)',
          color: '#94a3b8'
        },
        min: -2,
        max: 10,
        ticks: { color: '#94a3b8' },
        grid: { color: '#334155' }
      }
    },
    plugins: {
      legend: { labels: { color: '#f8fafc' } },
      tooltip: {
        callbacks: {
          label: (context) => {
            if (context.datasetIndex === 1) return 'Límite físico real: M ≈ 10';
            const x = context.parsed.x.toLocaleString('es-AR', { maximumFractionDigits: 1 });
            const y = context.parsed.y.toFixed(2);
            return `Amplitud: ${x}x | M(A): ${y}`;
          }
        }
      }
    }
  }
});

function updateUrbanImpact(m) {
  let category = 'micro';
  if (m >= 4.0 && m < 5.0) category = 'light';
  else if (m >= 5.0 && m < 6.0) category = 'moderate';
  else if (m >= 6.0 && m < 7.0) category = 'strong';
  else if (m >= 7.0) category = 'major';

  const data = impactData[category];
  document.getElementById('damage-level').textContent = data.title.split('(')[0];
  document.getElementById('urban-description').textContent = data.desc;
  
  const bulletsList = document.getElementById('urban-bullets-list');
  bulletsList.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join('');
  
  document.getElementById('svg-scene').innerHTML = data.scene;
  document.getElementById('img-caption').textContent = data.caption;
  impactDesc.textContent = data.desc;
}

function updateSimulation() {
  const M = parseFloat(magSlider.value);
  const a = parseFloat(aSlider.value);
  const h = parseFloat(hSlider.value);
  const k = parseFloat(kSlider.value);

  magVal.textContent = M.toFixed(1);
  aVal.textContent = a.toFixed(1);
  hVal.textContent = h.toFixed(1);
  kVal.textContent = k.toFixed(1);

  const signH = h >= 0 ? `- ${h}` : `+ ${Math.abs(h)}`;
  const signK = k >= 0 ? `+ ${k.toFixed(1)}` : `- ${Math.abs(k).toFixed(1)}`;
  formulaDisplay.textContent = `M(A) = ${a.toFixed(1)} · log₁₀(A ${signH}) ${signK}`;

  const amplitude = Math.pow(10, M);
  const energyJoules = Math.pow(10, 4.8 + 1.5 * M);

  ampVal.textContent = amplitude >= 1e6 
    ? `${amplitude.toExponential(2)}x` 
    : `${Math.round(amplitude).toLocaleString('es-AR')}x`;

  energyVal.textContent = `${energyJoules.toExponential(2)} J`;
  
  updateUrbanImpact(M);

  const maxX = Math.max(100, amplitude * 1.4);
  const points = [];
  const steps = 150;
  let maxCurveY = 10;
  let minCurveY = 0;

  for (let i = 1; i <= steps; i++) {
    const x = (maxX / steps) * i;
    if (x - h > 0) {
      const y = a * Math.log10(x - h) + k;
      points.push({ x, y });
      if (y > maxCurveY) maxCurveY = y;
      if (y < minCurveY) minCurveY = y;
    }
  }

  const currentY = (amplitude - h > 0) ? (a * Math.log10(amplitude - h) + k) : M;
  if (currentY > maxCurveY) maxCurveY = currentY;
  if (currentY < minCurveY) minCurveY = currentY;

  const dynamicMaxY = maxCurveY > 10 ? Math.ceil(maxCurveY + 1) : 10;
  const dynamicMinY = minCurveY < 0 ? Math.floor(minCurveY - 0.5) : 0;

  richterChart.data.datasets[0].data = points;
  richterChart.data.datasets[1].data = [
    { x: 0, y: 10 },
    { x: maxX, y: 10 }
  ];
  richterChart.data.datasets[2].data = [{ x: amplitude, y: currentY }];

  richterChart.options.scales.x.max = maxX;
  richterChart.options.scales.y.max = dynamicMaxY;
  richterChart.options.scales.y.min = dynamicMinY;
  richterChart.update();
}

const waveCanvas = document.getElementById('waveCanvas');
const wCtx = waveCanvas.getContext('2d');
let phase = 0;

function drawSeismograph() {
  const M = parseFloat(magSlider.value);
  wCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);

  wCtx.strokeStyle = '#334155';
  wCtx.beginPath();
  wCtx.moveTo(0, waveCanvas.height / 2);
  wCtx.lineTo(waveCanvas.width, waveCanvas.height / 2);
  wCtx.stroke();

  wCtx.strokeStyle = M >= 6.0 ? '#f43f5e' : '#38bdf8';
  wCtx.lineWidth = 2;
  wCtx.beginPath();

  const visualAmp = Math.min(40, Math.pow(M / 9.5, 2.5) * 42);
  const freq = 0.04 + (M * 0.012);

  for (let x = 0; x < waveCanvas.width; x++) {
    const envelope = Math.sin((x / waveCanvas.width) * Math.PI);
    const noise = Math.sin(x * freq + phase) * Math.cos(x * 0.03 - phase * 0.5);
    const y = (waveCanvas.height / 2) + noise * visualAmp * envelope;
    if (x === 0) wCtx.moveTo(x, y);
    else wCtx.lineTo(x, y);
  }

  wCtx.stroke();
  phase += 0.15;
  requestAnimationFrame(drawSeismograph);
}

[magSlider, aSlider, hSlider, kSlider].forEach(el => {
  el.addEventListener('input', updateSimulation);
});

resetBtn.addEventListener('click', () => {
  aSlider.value = 1.0;
  hSlider.value = 0;
  kSlider.value = 0.0;
  updateSimulation();
});

updateSimulation();
drawSeismograph();