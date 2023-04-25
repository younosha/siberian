import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import { getPerson } from "../../services/starWarsService";
import { Card } from "../../components/Card/Card";
import Styles from "./MainPage.module.css";
import { Loader } from "../../components/Loader/Loader";

export const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [all, setAll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (error) setError(false);
    getPerson(currentPage).then(res => {
      if (all === 0) setAll(res.count);
      setData(res.results);
    }).catch(() => {
      setError(true);
      setData([]);
    }).finally(() => setLoading(false));
  }, [currentPage]);

  return <div className={Styles.container}>
    <div className={Styles.personsBlock}>
      {!loading ? data.map(person => <Card key={person.name} person={person}/>) : <Loader/>}
    </div>
    {error && <p className={Styles.error}>Ошибка загрузки данных :(</p>}
    {!loading && !error && <div className={Styles.pagination}>
      <Pagination
        variant="outlined"
        color="primary"
        count={Math.ceil(all / 10)}
        page={currentPage}
        onChange={(_, pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>}
  </div>
}