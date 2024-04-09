import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const { data } = await supabase.from("recipes").select("*");

  return data;
})