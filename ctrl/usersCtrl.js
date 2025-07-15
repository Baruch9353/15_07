import { findUserByUsernameAndPassword } from "../DAL/usersDAL.js";

export async function login(req, res) {
  const { username, password } = req.body;

  const user = await findUserByUsernameAndPassword(username, password);

  if (!user) {
    return res.status(401).send('Wrong username or password');
  }

  res.send('Login successful');
}




