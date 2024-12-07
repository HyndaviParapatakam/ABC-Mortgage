import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const loginUser = async (formData) => {
  const { customerId, password } = formData;
  const response = await axios.get(`${API_URL}/users`, {
    params: { customerId, password },
  });
  return response.data;
};
