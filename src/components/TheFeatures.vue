<template>
  <section class="py-32 px-6 bg-[#0a0f1a] relative z-10">
    <div class="max-w-7xl mx-auto">
      <div 
        class="mb-20 text-center"
        v-motion-visible
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        :initial="{ opacity: 0, y: 50 }"
      >
        <h2 class="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          Vitalizes Body and Mind.
        </h2>
        <p class="text-white/60 text-lg max-w-2xl mx-auto font-light">
          Red Bull Energy Drink is appreciated worldwide by top athletes, students, and in highly demanding professions as well as during long drives.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        <!-- Card 1: Caffeine -->
        <div 
          class="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#111827] border border-white/5 hover:border-red-600/50 transition-colors duration-500"
          v-motion-visible
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          :initial="{ opacity: 0, y: 50 }"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="p-10 relative z-10 h-full flex flex-col justify-end">
            <h3 class="text-3xl font-bold text-white mb-2">Caffeine</h3>
            <p class="text-white/60 mb-6 max-w-md">
              Caffeine has supposedly been known for its stimulating effects on the human body by ancient civilizations. One 250ml can contains 80mg of caffeine.
            </p>
            <span class="text-red-500 font-bold uppercase tracking-widest text-sm">Learn More -></span>
          </div>
          <!-- Abstract Graphic -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-600/20 transition-colors duration-500"></div>
        </div>

        <!-- Card 2: B-Group Vitamins -->
        <div 
          class="relative group overflow-hidden rounded-3xl bg-[#111827] border border-white/5 hover:border-blue-500/50 transition-colors duration-500"
          v-motion-visible
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          :initial="{ opacity: 0, y: 50 }"
        >
          <div class="p-10 relative z-10 h-full flex flex-col justify-end">
            <h3 class="text-3xl font-bold text-white mb-2">B-Group Vitamins</h3>
            <p class="text-white/60 mb-6">
              Essential micronutrients that pay a role in normal body and energy-yielding functions.
            </p>
          </div>
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
        </div>

        <!-- Card 3: Sugars (Simple) -->
        <div 
          class="relative group overflow-hidden rounded-3xl bg-[#111827] border border-white/5 hover:border-yellow-500/50 transition-colors duration-500"
          v-motion-visible
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          :initial="{ opacity: 0, y: 50 }"
        >
          <div class="p-10 relative z-10 h-full flex flex-col justify-end">
            <h3 class="text-3xl font-bold text-white mb-2">Sugars</h3>
            <p class="text-white/60 mb-6">
              Sourced from sugar beet. 11g per 100ml, comparable to apple juice.
            </p>
          </div>
        </div>

         <!-- Card 4: Alpine Water -->
         <div 
          class="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#111827] border border-white/5 hover:border-blue-300/50 transition-colors duration-500"
          v-motion-visible
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          :initial="{ opacity: 0, y: 50 }"
        >
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 hover:scale-105 transform"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent"></div>
          
          <div class="p-10 relative z-10 h-full flex flex-col justify-end">
            <h3 class="text-3xl font-bold text-white mb-2">Alpine Water</h3>
            <p class="text-white/60 mb-6 max-w-md">
              Water is a main ingredient of Red Bull. The water used for Red Bull is fresh Alpine water of highest quality, which comes from springs nearby the production and filling sites in Austria and Switzerland.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
