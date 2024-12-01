import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartVoteProps {
  dataValues: number[];
}

const PieChartVote: React.FC = () => {
  const data = {
    labels: ['No', 'Yes', 'Abstain'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [1, 2, 3],
        backgroundColor: [
          '#A52019',
          '#317f43',
          '#E5BE01',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
      <Pie data={data} />
  );
};

export default PieChartVote;

