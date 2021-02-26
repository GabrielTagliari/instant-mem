/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import CardCarousel from '../../components/CardCarousel/CardCarousel';
import cardsRepository from '../../repositories/cards';
import Loading from '../../components/Loading/Loading';

function Home() {
  const [initialData, setInitialData] = useState([]);
  const [isLoading, switchLoading] = useState(true);

  useEffect(() => {
    cardsRepository.getAll().then((cards) => {
      setInitialData(cards);
      switchLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <CardCarousel cards={initialData} />}
    </>
  );
}

export default Home;
