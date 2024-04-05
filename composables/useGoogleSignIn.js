export default async function () {
  const supabase = useSupabaseClient();
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error(error);
  }
}