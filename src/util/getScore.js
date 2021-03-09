export const getScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PO3xRC8bxrtbhRxaL7yU/scores',
    {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  const elements = await result;
  elements.result.sort((a, b) => (a.score < b.score ? 1 : -1));
  return elements;
};

export const setScore = async (user, score) => {
  const data = {
    user,
    score,
  };
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PO3xRC8bxrtbhRxaL7yU/scores',
    {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    },
  );
};
