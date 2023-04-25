import { Link } from 'react-router-dom';
import Styles from './Card.module.css';

export const Card = ({person}) => {
  return <Link 
    to={`/person/${person.mass}`} 
    state={{person: person}}
    className={Styles.container}
  >
    <p><b>Name:</b> {person.name}</p>
    <p><b>Eye color:</b> {person.eye_color}</p>
    <p><b>Height:</b> {person.height}</p>
  </Link>
}