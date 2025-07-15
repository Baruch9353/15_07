import { getAllUsersFromDB } from "../DAL/usersDAL.js";

export async function getAllUsers(req, res) {
  try {
    const users = await getAllUsersFromDB();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
}



