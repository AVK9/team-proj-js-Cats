import axios from "axios";
axios.defaults.baseURL = 'https://books-backend.p.goit.global';

export default async function listCategory() {
  try {
    const listCategories = await axios.get('/books/category-list');
    return listCategories.data
  }
  catch (error) {
    console.error(error);
  }
};

