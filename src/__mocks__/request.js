export const getScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PO3xRC8bxrtbhRxaL7yU/scores',
    {
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  const elements = await result;
  elements.result.sort((a, b) => (b.score - a.score));
  return elements;
};

export const setScore = async (user, score) => {
  const data = {
    user,
    score,
  };
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PO3xRC8bxrtbhRxaL7yU/scores',
    {
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    },
  );
  const result = await response.json();
  return result;
};
