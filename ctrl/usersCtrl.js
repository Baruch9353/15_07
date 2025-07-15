import { getAllUsersFromDB } from "../DAL/usersDAL.js";

export async function getAllUsers(req, res) {
    const users = await getAllUsersFromDB();
    res.json(users);
}




