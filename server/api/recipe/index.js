import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  try {
    const supabase = await serverSupabaseClient(event);

    const { data, error } = await supabase.from("recipes").select("*");

    if (error) {
      throw error; 
    }

    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      status: 500,
      error: "Failed to retrieve recipes",
    };
  }
});