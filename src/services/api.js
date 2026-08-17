const API_URL = "https://expensetracker-2ab2.onrender.com";
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login/`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username,
    password,
  }),
});
    const data = await response.json();

    console.log("LOGIN STATUS:", response.status);
    console.log("LOGIN DATA:", data);

    if (!response.ok) {
      throw new Error(data.detail || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("LOGIN FETCH ERROR:", error);
    throw error;
  }
};

export const getExpenses = async () => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/expenses/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Failed to fetch expenses");
  }

  return data;
};

export const addExpense = async (expense) => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/expenses/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expense),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Failed to add expense");
  }

  return data;
};

export const deleteExpense = async (id) => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/expenses/${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.detail || "Failed to delete expense");
  }

  return true;
};