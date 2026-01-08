<template>
  <div class="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0a0f1a]">
    <!-- Background Gradient/Noise -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/20 to-[#0a0f1a] z-0"></div>
    <div class="absolute inset-0 opacity-20 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    
    <!-- Hero Content -->
    <div class="relative z-10 text-center px-6">
      <div 
        class="overflow-hidden mb-2"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, type: 'spring' } }"
      >
        <span class="inline-block text-red-500 font-bold tracking-[0.4em] uppercase text-sm md:text-base mb-4">
          Premium Energy
        </span>
      </div>

      <h1 class="text-[12vw] leading-[0.85] font-black text-white tracking-tighter uppercase font-display mix-blend-overlay opacity-90">
        <span 
          class="block"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200, type: 'spring' } }"
        >
          Gives You
        </span>
        <span 
          class="block text-transparent bg-clip-text bg-gradient-to-t from-white to-white/50"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400, type: 'spring' } }"
        >
          Wings
        </span>
      </h1>

      <div 
        class="mt-12 flex items-center justify-center gap-6"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 1000, delay: 800 } }"
      >
        <div class="h-[1px] w-24 bg-white/20"></div>
        <p class="text-white/60 font-light tracking-widest text-sm uppercase">Scroll to Explore</p>
        <div class="h-[1px] w-24 bg-white/20"></div>
      </div>
    </div>

    <!-- Floating Current Can Element (Parallax) -->
    <div class="absolute inset-0 z-0 pointer-events-none">
       <!-- We could put a floating can element here if we had a separate cutout, 
            for now the typography is the hero -->
    </div>
  </div>
</template>

<script setup>
// Hero component logic
</script>

<style scoped>
.font-display {
  font-family: 'Inter', sans-serif; /* Could be changed to Anton if added */
}
</style>
