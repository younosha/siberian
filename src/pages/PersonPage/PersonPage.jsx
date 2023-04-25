import { useLocation } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Styles from './PersonPage.module.css';

export const PersonPage = () => {
  const location = useLocation();
  const { person } = location.state;

  const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );

  const options = {
    title: {
      text: person.name
    },
    series: [
      {
        data: [Number(person.mass), Number(person.height)]
      },
      {
        data: generateArray(10, 100)
      },
      {
        data: generateArray(10, 100)
      },
      {
        data: generateArray(10, 100)
      },
    ]
  }

  return <div className={Styles.container}>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    <p className={Styles.personInfo}><b>Name:</b> {person.name}</p>
    <p className={Styles.personInfo}><b>Eye color:</b> {person.eye_color}</p>
    <p className={Styles.personInfo}><b>Height:</b> {person.height}</p>
  </div>
}