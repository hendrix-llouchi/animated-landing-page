<template>
  <div class="bg-[#0a0f1a] min-h-screen text-white pt-24">
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20 px-6">
      <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
            alt="World of Red Bull" 
            class="w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent"></div>
      </div>
      
      <div class="relative z-10 text-center max-w-4xl mx-auto" v-motion-fade-visible>
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6">
          THE <span class="text-red-600">WORLD</span> OF<br />RED BULL
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
          Experience the extraordinary. From extreme sports to groundbreaking culture, dive into our universe.
        </p>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="max-w-7xl mx-auto px-6 mb-32">
        <h2 class="text-3xl font-bold mb-12 flex items-center gap-4" v-motion-slide-visible-once-left>
            <span class="w-12 h-1 bg-red-600"></span>
            EXPLORE
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
                v-for="(cat, index) in categories" 
                :key="index"
                class="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                v-motion-slide-visible-once-bottom
                :delay="index * 100"
            >
                <img :src="cat.image" :alt="cat.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                
                <div class="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span class="text-red-500 font-bold tracking-wider text-sm mb-2 block">{{ cat.subtitle }}</span>
                    <h3 class="text-3xl font-black uppercase italic">{{ cat.title }}</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest Events -->
    <section class="max-w-7xl mx-auto px-6 mb-32">
         <h2 class="text-3xl font-bold mb-12 flex items-center gap-4" v-motion-slide-visible-once-left>
            <span class="w-12 h-1 bg-red-600"></span>
            UPCOMING EVENTS
        </h2>

        <div class="space-y-4">
            <div 
                v-for="(event, index) in events" 
                :key="index"
                class="group flex flex-col md:flex-row items-center border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-4 rounded-xl cursor-pointer"
                 v-motion-slide-visible-once-bottom
                 :delay="index * 100"
            >
                <div class="md:w-1/4 mb-4 md:mb-0">
                    <span class="text-4xl font-black text-white/20 group-hover:text-red-600 transition-colors duration-300">
                        {{ event.date }}
                    </span>
                    <p class="text-sm text-gray-400 mt-1 uppercase tracking-widest">{{ event.month }}</p>
                </div>
                <div class="md:w-1/2 mb-4 md:mb-0">
                    <h3 class="text-2xl font-bold group-hover:translate-x-4 transition-transform duration-300">{{ event.name }}</h3>
                    <p class="text-gray-400 mt-2">{{ event.location }}</p>
                </div>
                 <div class="md:w-1/4 flex justify-end">
                    <button class="px-6 py-2 border border-white/30 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all">
                        GET TICKETS
                    </button>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
import skateImg from '../assets/skate.png'
import musicImg from '../assets/music.png'
import bikeImg from '../assets/bike.png'
import surfImg from '../assets/surf.png'

const categories = [
    {
        title: 'Motorsports',
        subtitle: 'Adrenaline',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Bike',
        subtitle: 'Gravity',
        image: bikeImg
    },
    {
        title: 'Surf',
        subtitle: 'Waves',
        image: surfImg
    },
     {
        title: 'Skate',
        subtitle: 'Street',
        image: skateImg
    },
    {
        title: 'Gaming',
        subtitle: 'Esports',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Music',
        subtitle: 'Culture',
        image: musicImg
    }
]

const events = [
    {
        date: '12',
        month: 'FEB 2026',
        name: 'Red Bull Cliff Diving World Series',
        location: 'Athens, Greece'
    },
     {
        date: '24',
        month: 'MAR 2026',
        name: 'Formula 1 Rolex Australian Grand Prix',
        location: 'Melbourne, Australia'
    },
     {
        date: '08',
        month: 'APR 2026',
        name: 'Red Bull Paper Wings World Final',
        location: 'Salzburg, Austria'
    },
     {
        date: '15',
        month: 'MAY 2026',
        name: 'Red Bull Rampage',
        location: 'Virgin, Utah, USA'
    }
]
</script>
