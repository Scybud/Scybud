import { supabase } from "../supabase.js";

export async function fetchProducts() {

 const { data, error } = await supabase
    .from("first_party_products")
    .select("slug, name, cta_url, description, tech_stack")
    .order("priority", { ascending: false })
    .eq("active", true);
    
  if (error) {
    console.error(error);
    return error;
  }

  return data;
}
