export const registerUser = async (userData) => {
  const response = await fetch(
    "https://6824e1930f0188d7e72b3ad7.mockapi.io/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to register user");
  }
  return response.json();
};
