export const login = async (currUserName, currPassword) => {
  const res = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: currUserName,
      password: currPassword,
    }),
  });

  const data = await res.json();

  return data.accessToken;
};

export const user = async (accessToken) => {
  const curruser = await fetch("https://dummyjson.com/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const user = await curruser.json();

  return user;
};
