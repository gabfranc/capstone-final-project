<script setup>
const img = [
    'https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]
</script>
<template>

  <h2 class="text-center mb-12 mt-24 font-bold text-maroon text-2xl italic">Reviewed Recipes</h2>
  <main class="sm:grid sm:ml-12 md:ml-2 md:grid-cols-3 mt-20 gap-2">
    <section class="hover:animate-pulse cursor-pointer">
      <div class="flex">
        <div
          class="flex sm:ml-24 md:ml-auto pt-4 pl-16 ml-56 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
          <div>
            <div class="flex star-rating gap-3 mt-2">
              <div class="star">
                <img src="/Images/star.png" class="mt-2 h-6">
              </div>
              <div class="star">
                <img src="/Images/star.png" class="mt-2 h-6">
              </div>
              <div class="star">
                <img src="/Images/star.png" class="mt-2 h-6">
              </div>
              <div class="star">
                <img src="/Images/star.png" class="mt-2 h-6">
              </div>
              <div class="star">
                <img src="/Images/star.png" class="mt-2 h-6">
              </div>
            </div>
            <h2 class="text-left text-lg font-bold mt-2">Cleo Sertori</h2>
            <p class="mt-12 w-64 text-left">I LOVE LOVE LOVE!!!!! the Ma Po Tofu. I had my daughter to help me <br>
              out a little bit and she had fun cooking with me. I am always craving it afterwards.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-14 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mb-4 mt-4">Lewis McCartney</h2>
          <p class="mt-6 w-64 text-left">I'm always skeptical of trying new recipes, but the Stamppot exceeded all my
            expectations. The combination of ingredients was unique, and the end result was absolutely delicious. I'll
            definitely be making this again!</p>
        </div>
      </div>
    </section>
    <section class="hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Rikki Chadwick</h2>
          <p class="mt-8 w-64 text-left">As someone who loves to cook, I'm constantly searching for recipes that are
            both delicious and nutritious. Yaki Udon hit the mark on both fronts. It's definitely going into my regular
            rotation!</p>
        </div>
      </div>
    </section>
    <section class="pb-8 hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Emma Gilbert</h2>
          <p class="mt-4 w-64 text-left">I'm always on the hunt for recipes that make me feel like a professional chef,
            and the Shakshuka did just that. The techniques were sophisticated yet approachable, resulting in a dish
            that was
            restaurant-quality. I'm definitely bookmarking this one!</p>
        </div>
      </div>
    </section>
    <section class="pb-8 hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Bella Hartley</h2>
          <p class="mt-8 w-64 text-left">Wow, this recipe blew my mind! The flavors were so vibrant and the instructions
            were easy to follow. Definitely adding this to my list of favorites!</p>
        </div>
      </div>
    </section>
    <section class="pb-8 hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Will Benjamin</h2>
          <p class="mt-8 w-64 text-left">The Pad See Ew elevated my cooking game to a whole new level. The attention to
            detail and the use of fresh, quality ingredients made all the difference. Can't wait to make it again!</p>
        </div>
      </div>
    </section>
    <section class="pb-8 hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Ash Dove</h2>
          <p class="mt-8 w-64 text-left">I've tried countless recipes, but the Big Mac one truly stood out. The flavors
            were
            well-balanced, and the techniques used really brought out the best in each ingredient. A definite winner!
          </p>
        </div>
      </div>
    </section>
    <section class="pb-8 hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Charlotte Watsford</h2>
          <p class="mt-8 w-64 text-left">This Sugar Pie recipe is proof that simple ingredients can create extraordinary
            dishes.
            The flavors were rich and complex, yet the preparation was straightforward. I'm already planning to make it
            again for my next dinner party!
          </p>
        </div>
      </div>
    </section>
    <section class="pb-8 hover:animate-pulse cursor-pointer">
      <div
        class="flex sm:ml-24 md:ml-4 pt-4 pl-16 ml-64 mb-24 bg-white opacity-70 rounded-lg h-80 w-96 text-center relative">
        <div>
          <div class="flex star-rating gap-3 mt-2">
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
            <div class="star">
              <img src="/Images/star.png" class="mt-2 h-6">
            </div>
          </div>
          <h2 class="text-left text-lg font-bold mt-2">Zane Bennett</h2>
          <p class="mt-8 w-64 text-left">This Ribollita recipe is a game-changer! The flavors were so bold and
            unexpected, and the
            presentation was restaurant-quality. I can't believe I made something this impressive in my own kitchen!
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

