import supabase from "../DB/db.js";

export function getAllUsers (req, res)
{
  res.json(supabase);
}


