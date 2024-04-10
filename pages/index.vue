<script setup>
const { data: recipes } = await useFetch("/pages/recipes", {
  headers: useRequestHeaders(["cookie"]),
})
</script>
<template>
  <main class="relative h-full bg-yellow">
   <Hero />
   
    <section>
      <div class="relative m-36 p-auto">
        <p class="text-center mt-36 p-12">
          At Quick Foods, our mission revolves around simplifying the culinary experience for everyone. We strive to empower individuals with the tools and resources necessary to create delicious meals swiftly and effortlessly. Whether you're a busy parent juggling multiple responsibilities or a novice cook exploring the joys of the kitchen, our aim is to make cooking enjoyable and accessible to all. Through our carefully curated collection of recipes, tips, and cooking techniques, we hope to inspire creativity and confidence in the kitchen.

          Moreover, at Quick Foods, we understand the importance of fostering connections through food. Gathering around the dining table with loved ones is a cherished tradition in many cultures, and we want to facilitate those moments of togetherness. Our recipes are designed not only to save time but also to enhance the joy of sharing meals with family and friends. We believe that food has the power to create lasting memories and strengthen bonds, and it is our privilege to be a part of that experience.
        </p>
      </div>
    </section>
    <ContactForm />
  </main>
</template>