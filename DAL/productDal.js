import supabase from "../DB/db.js";
export async function getAllProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');
    
  if (error) {
    return null;
  }
  return data;
}
