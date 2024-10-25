import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { ChoroplethController, GeoFeature } from 'chartjs-chart-geo';

Chart.register(...registerables, ChoroplethController, GeoFeature);

const Heatmap = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Brazil'],
      datasets: [{
          label: 'Mapa do Brasil',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: '#FFFFFF',
        },{
        label: 'População',
        data: [
          { x: -46.6388, y: -23.5489, r: 20 }, // São Paulo
          { x: -43.2075, y: -22.9035, r: 15 }, // Rio de Janeiro
          { x: -48.0293, y: -15.7801, r: 10 }, // Brasília
          { x: -67.8483, y: -3.1190, r: 5 },   // Manaus
          { x: -34.9011, y: -8.0476, r: 7 },   // Recife
          // Adicione mais cidades conforme necessário
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }]
    };

    const config = {
      type: 'choropleth',
      data: mapData,
      options: {
        showOutline: true,
        showGraticule: false,
        scales: {
          xy: {
            projection: 'equalEarth' // ou outra projeção que você preferir
          }
        },
      },
    };

    const mapChart = new Chart(ctx, config);

    return () => {
      mapChart.destroy();
    };
  }, []);

  return (
    <div className="col-span-6 xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Heatmap do Brasil</h1>
        <canvas ref={canvasRef} width={600} height={400}></canvas>
      </div>
    </div>
  );
};

export default Heatmap;
