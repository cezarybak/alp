const { REACT_APP_API_KEY, REACT_APP_ENDPOINT_URL } = process.env;

export const getData = async (search: string) =>
  await fetch(
    `${REACT_APP_ENDPOINT_URL}/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${REACT_APP_API_KEY}`,
  )
    .then((e) => e.json())
    .then((e) => e.bestMatches);
