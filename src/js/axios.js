import axios from "axios";

const BASEURL = 'https://books-backend.p.goit.global';
const CATLIST = '/books/category-list';


export default async function listCategory() {
  try {
    const listCategories = await axios.get(`${BASEURL}${CATLIST}`);
    return listCategories.data
  }
  catch (error) {
    console.error(error);
  }
};



