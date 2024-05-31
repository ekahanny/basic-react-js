import axios from "axios";

async function getProducts() {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  return response.data;
}

export default getProducts;
