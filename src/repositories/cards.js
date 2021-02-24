import config from '../config';

const URL_CARDS = `${config.URL_BASE}`;

function getAll() {
  return fetch(URL_CARDS).then(async (response) => {
    if (response.ok) {
      return await response.json();
    }

    throw new Error('Something went wrong :(');
  });
}

export default {
  getAll,
};
