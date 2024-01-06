import axios from "axios";

const obtenerProductosApi = async () => {
  const products = await axios.get("https://fakerapi.it/api/v1/products");
  return products.data.data;
};

export { obtenerProductosApi };
