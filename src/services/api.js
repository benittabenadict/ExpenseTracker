const API_URL = "https://expensetracker-2ab2.onrender.com";

// LOGIN
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/login/`, {
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

// GET EXPENSES
export const getExpenses = async () => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/api/expenses/`, {
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

// ADD EXPENSE
export const addExpense = async (expense) => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/api/expenses/`, {
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

// DELETE EXPENSE
export const deleteExpense = async (id) => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_URL}/api/expenses/${id}/`, {
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