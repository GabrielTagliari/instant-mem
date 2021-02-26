// import config from '../config';
// const URL_CARDS = `${config.URL_BASE}`;
import Parse from 'parse';

function getAll() {
  return new Promise((resolve) => {
    var Card = Parse.Object.extend('Card');

    const query = new Parse.Query(Card);

    query.find().then((data) => {
      const cards = data.map((item) => {
        return {
          id: item.id,
          front: item.attributes.front,
          back: item.attributes.back,
        };
      });
      console.log(cards);
      resolve(cards);
    });
  });
}

export default {
  getAll,
};
