import { supabase } from "../supabase.js";

export async function fetchProducts() {
  const { data, error } = await supabase
    .from("first_party_products")
    .select("slug, name, cta_url, description, tech_stack, logo_url")
    .order("priority", { ascending: true })
    .eq("active", true);

  // Null on failure
  if (error) {
    console.error(error);
    return null;
  }

  return data;
}