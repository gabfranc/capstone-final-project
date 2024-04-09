import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  const supabase = await serverSupabaseClient(event);
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("slug", slug)
    .single();

    if (error) {
      console.error(error);
    }
    return data;
});