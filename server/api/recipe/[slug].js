import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  try {
    const supabase = await serverSupabaseClient(event);
    const { data } = await supabase
    .from("recipes")
    .select("*")
    .eq("slug", slug)
    .single();

    return {
      status: 200,
      data: {
        recipe: data,
      }
    };
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return {
      status: 500,
      error: "Error fetching recipe. Please try again later."
    };
  }
})