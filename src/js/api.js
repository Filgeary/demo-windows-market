const postDataJSON = async (url, data) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  return await result.json();
};

export { postDataJSON };
