import supabase from "../DB/db.js";


export async function findUserByUsernameAndPassword(username, password) {
  const { data, error } = await supabase
    .from('Users')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .single();

  if (error) {
    return null;
  }

  return data;
}
