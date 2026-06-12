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

  if (!res.ok) {
    throw new Error(data.message || "Login Failed");
  }

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

export const addUser = async ({
  firstName,
  lastName,
  userName,
  email,
  password,
}) => {
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      /* other user data */
    }),
  });

  const userData = await response.json();

  return userData;
};
