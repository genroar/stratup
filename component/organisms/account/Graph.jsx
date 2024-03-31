import React, {useEffect} from 'react'
import Chart from 'chart.js/auto';


function Graph() {

     
    useEffect(() => {
        const data = [
          { year: 2010, count: 20 },
          { year: 2012, count: 50 },
          { year: 2016, count: 28 },
          { year: 2015, count: 30 },
          { year: 2015, count: 30 },

        ];

        const colors = [
            'rgba(94, 96, 98, 0.2)',
            'rgba(94, 96, 98, 1)',
            'rgba(94, 96, 98, 0.1)',
            'rgba(94, 96, 98, 0.4)',

  
          ];
    
        new Chart(
          document.getElementById('acquisitions'),
          {
            type: 'doughnut',
            data: {
              labels: data.map(row => row.year),
              datasets: [
                {
                  label: 'Acquisitions by year',
                  data: data.map(row => row.count),
                  backgroundColor: colors
                }
              ]
            }
          }
        );
      }, []); 


  return (
    <div style={{ width: "294px", height: '294px', }}><canvas id="acquisitions"></canvas></div>

  )
}

export default Graph