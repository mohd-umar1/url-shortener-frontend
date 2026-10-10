import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const graph = ({graphdata = [{}]})=>{

  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#007595',
      },
    },
    title: {
      display: true,
      text: 'URL Analytics',
    },
  },
};

const sortedData = [...graphdata].sort(
  (a, b) => new Date(a.clickdate) - new Date(b.clickdate)
);

const labels = sortedData.map((url) => url.clickdate);
const userperday = sortedData.map((url) => url.count);

const data = {
  labels:
  graphdata.length > 0  
                       ?labels 
                       :["","","","","","","","",""] ,
  datasets: [{
    label: "no. of clicks",
    data: graphdata.length > 0
                            ?userperday
                            :['1','2','3','4','5','4','3','2','1'],
    backgroundColor: "#20DFD9F",
    borderColor: "#007595",
    borderWidth: 1,
    barThickness: 40,       
    maxBarThickness: 40,
    
  }
  ],
};

  return <Bar options={options} data={data} />;
}

export default graph
