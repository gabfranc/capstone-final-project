<template>
  <section class="bg-yellow">
    <header class="bg-yellow">
      <div class="head-image">
        <div class="header sm:mr-96 sm:pr-64 md:mr-0 md:pr-2">
          <h1 class="text-4xl text-center pt-24 text-maroon opacity-90 font-bold">ABOUT</h1>
        </div>
      </div>
    </header>
    <div class="relative m-40 p-auto">
      <h2 class="opacity-80 font-bold italic text-2xl text-center text-maroon">Our Mission</h2>
      <p class="text-center mt-14 p-12">
        At Quick Foods, our mission revolves around simplifying the culinary experience for everyone. We strive to
        empower individuals with the tools and resources necessary to create delicious meals swiftly and effortlessly.
        Whether you're a busy parent juggling multiple responsibilities or a novice cook exploring the joys of the
        kitchen, our aim is to make cooking enjoyable and accessible to all. Through our carefully curated collection
        of recipes, tips, and cooking techniques, we hope to inspire creativity and confidence in the kitchen.

        Moreover, at Quick Foods, we understand the importance of fostering connections through food. Gathering around
        the dining table with loved ones is a cherished tradition in many cultures, and we want to facilitate those
        moments of togetherness. Our recipes are designed not only to save time but also to enhance the joy of sharing
        meals with family and friends. We believe that food has the power to create lasting memories and strengthen
        bonds, and it is our privilege to be a part of that experience.
      </p>
    </div>
    <div>
      <ServiceCards />
    </div>
    <div>
      <ReviewBox />
    </div>
  </section>
</template>
<style scoped>
.head-image {
  background-image: url('https://images.pexels.com/photos/266896/pexels-photo-266896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  width: 1257px;
  height: 250px;
}
</style>