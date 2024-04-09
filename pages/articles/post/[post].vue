<script>
const route = useRoute();
const supabaseUrl = process.env.SUPABASE_URL; 
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY; 

const error = defineAsyncError(async (error) => {
  console.error('Error fetching post:', error);
  return {
    post: null,
    errorMessage: 'An error occurred while fetching the post.' 
  };
});

async function getPostData() {
  const { createClient } = await import('@supabase/supabase-js'); 

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data, error: queryError } = await supabase
    .from('recipes')
    .select('*')
    .eq('slug', route.params.post)
    .single();

  if (queryError) {
    throw error(queryError);
  }

  return data;
}

const post = useAsyncData('post', getPostData, {
  loading: () => ({ post: null }),
});

console.log(post); 
</script>
<template>
  <main>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>Blog Last Update: {{ post.date_updated }}</p>
  </main>
</template>
<style>
main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
