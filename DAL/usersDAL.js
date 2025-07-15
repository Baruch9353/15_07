import supabase from "../DB/db.js";

export async function getAllUsersFromDB() {
  const { data, error } = await supabase
  .from("users")
  .select("*");
  if (error) throw error;
  return data;
}
