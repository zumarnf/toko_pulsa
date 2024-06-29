import axios from 'axios';

export const fetchCustomers = async () => {
  try {
    const response = await axios.get('/db.json');
    return response.data.customers;
  } catch (error) {
    console.error('Error fetching customers:', error);
    return [];
  }
};
