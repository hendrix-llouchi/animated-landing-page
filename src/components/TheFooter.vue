<template>
  <footer class="bg-[#050810] pt-32 pb-10 px-6 border-t border-white/5 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <!-- Brand -->
        <div class="space-y-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
             <span class="text-white font-black text-xl">RB</span>
          </div>
          <h2 class="text-2xl font-bold text-white tracking-tight">Gives You Wings</h2>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-widest text-opacity-50">Products</h4>
          <ul class="space-y-4">
            <li v-for="item in ['Energy Drink', 'Sugarfree', 'Zero', 'Editions', 'Organics']" :key="item">
              <a href="#" class="text-white/40 hover:text-white transition-colors text-lg">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-widest text-opacity-50">World</h4>
          <ul class="space-y-4">
            <li v-for="item in ['TV', 'Athletes', 'Events', 'Music', 'Merchandise']" :key="item">
              <a href="#" class="text-white/40 hover:text-white transition-colors text-lg">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-widest text-opacity-50">Stay Tuned</h4>
          <div class="flex border-b border-white/20 pb-4">
            <input type="email" placeholder="Your email" class="bg-transparent text-white placeholder-white/20 outline-none w-full" />
            <button class="text-white/40 hover:text-white transition-colors">→</button>
          </div>
        </div>
      </div>

      <!-- Big Footer Text -->
      <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-end">
        <h1 class="text-[15vw] leading-none font-black text-white/5 uppercase select-none pointer-events-none">
          Red Bull
        </h1>
        <div class="flex gap-8 text-white/20 text-sm mb-4 md:mb-8">
           <a href="#" class="hover:text-white transition-colors">Imprint</a>
           <a href="#" class="hover:text-white transition-colors">Privacy</a>
           <a href="#" class="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
