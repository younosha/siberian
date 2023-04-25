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

  useEffect(() => {
    setLoading(true);
    getPerson(currentPage).then(res => {
      if (all === 0) setAll(res.count);
      setData(res.results);
    }).finally(() => setLoading(false));
  }, [currentPage]);

  return <div className={Styles.container}>
    <div className={Styles.personsBlock}>
      {!loading ? data.map(person => <Card key={person.name} person={person}/>) : <Loader/>}
    </div>
    {!loading && <div className={Styles.pagination}>
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