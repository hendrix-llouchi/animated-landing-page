<template>
  <section class="py-40 bg-[#0a0f1a] relative overflow-hidden">
    <!-- Marquee Text -->
    <div class="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
      <div class="whitespace-nowrap animate-marquee text-[20vw] font-black text-white uppercase leading-none">
        World of Red Bull World of Red Bull World of Red Bull
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-end justify-between mb-20">
        <div>
          <h2 class="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-4">
            Beyond <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Ordinary</span>
          </h2>
        </div>
        <p class="text-white/60 max-w-sm text-right mt-8 md:mt-0 font-light">
          From Formula 1 tracks to cliff diving, we fuel the passion that pushes limits.
        </p>
      </div>

      <!-- Lifestyle Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-8">
          <div class="aspect-[4/5] rounded-lg overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1541348263662-e068662d82af?w=1920&q=80&auto=format&fit=crop" alt="Oracle Red Bull Racing" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <span class="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">Motorsports</span>
              <h3 class="text-3xl font-bold text-white">Oracle Red Bull Racing</h3>
            </div>
          </div>
          
          <div class="aspect-square rounded-lg overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80&auto=format&fit=crop" alt="Skiing" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <span class="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Winter Sports</span>
              <h3 class="text-3xl font-bold text-white">The Hahnenkamm</h3>
            </div>
          </div>
        </div>

        <div class="space-y-8 md:mt-20">
          <div class="aspect-square rounded-lg overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1920&q=80&auto=format&fit=crop" alt="Breakdance" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <span class="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">Culture</span>
              <h3 class="text-3xl font-bold text-white">Red Bull Dance Your Style</h3>
            </div>
          </div>

          <div class="aspect-[4/5] rounded-lg overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&q=80&auto=format&fit=crop" alt="Cliff Diving" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <span class="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">Water</span>
              <h3 class="text-3xl font-bold text-white">Cliff Diving Series</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
