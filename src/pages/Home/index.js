/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import cardsRepository from '../../repositories/cards';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    cardsRepository
      .getAll()
      .then((response) => {
        setInitialData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <CardCarousel cards={initialData} />
    </>
  );
}

export default Home;
