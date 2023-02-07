import React from 'react'

import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

Chart.defaults.font.size = 14;
Chart.defaults.font.family = 'Poppins';
Chart.defaults.color = 'black';

const DynamicChart = ({data, xLabels, titleLabel, xAxisLabel, yAxisLabel}) => {
  return (
    <div>
      <Line
          width={'280px'}
          height={'240px'}
          data = {
            {
            labels: xLabels,
            datasets: [{
              label: titleLabel,
              data: data,
              backgroundColor: '#fadb75',
              borderColor: '#4f4f4f'
            }],

            }
          }
          options = {{
            scales: {
              y: {
                title: {
                  display: true,
                  text: yAxisLabel,
                }
              },
              x: {
                title: {
                  display: true,
                  text: xAxisLabel
                }
              }

            }
          }

          }
          />

    </div>
  )
}


export default DynamicChart