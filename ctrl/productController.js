import { findUserByUsernameAndPassword } from '../DAL/usersDAL.js';
import { getAllProducts } from '../DAL/productDal.js';

export async function getProducts(req, res) {
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await findUserByUsernameAndPassword(username, password);

  if (!user) {
    return res.status(401).send('Unauthorized');
  }

  const products = await getAllProducts();

  if (!products) {
    return res.status(500).send('Error fetching products');
  }

  res.json(products);
}
