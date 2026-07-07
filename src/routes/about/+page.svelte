<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import premiumPhoto from '$lib/assets/Premium Building Photo.jpeg';
  import frontageBuilding from '$lib/assets/Frontage Building.jpeg';
  import ambikaLogo from '$lib/assets/ambika_logo.png';
</script>

<svelte:head>
  <title>About Us | Ambika Real Estate</title>
  <meta name="description" content="Learn about Ambika Real Estate and our premium commercial space in Chakan MIDC." />
</svelte:head>

<section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Ambika <span class="text-brand-500">Real Estate</span>
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed">
          Your trusted partner for premium commercial real estate in Chakan MIDC, 
          providing modern infrastructure and strategic locations for business growth.
        </p>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <ScrollReveal>
        <div class="relative">
          <img
            src={premiumPhoto}
            alt="Premium commercial building"
            class="w-full rounded-2xl shadow-xl aspect-[16/10] object-cover"
          />
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg hidden md:flex">
            Est. 2024
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="space-y-5">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
            Building Spaces for <span class="text-brand-500">Success</span>
          </h2>
          <p class="text-gray-500 leading-relaxed">
            At Ambika Real Estate, we understand that the right workspace can transform your business.
            Our premium 3400 sq ft commercial space on the 2nd floor is designed to provide everything
            your team needs for long-term success.
          </p>
          <p class="text-gray-500 leading-relaxed">
            Located in the prestigious Chakan MIDC, our property offers unparalleled access to one of
            India's fastest-growing industrial corridors. We take pride in offering spaces that combine
            modern amenities with professional environments.
          </p>
          <div class="flex items-center gap-4 pt-4">
            <img
              src={ambikaLogo}
              alt="Ambika Real Estate"
              class="h-14 w-14 rounded-xl object-contain bg-gray-50 p-1"
            />
            <div>
              <p class="font-semibold text-gray-900">Ambika Real Estate</p>
              <p class="text-sm text-gray-500">Premium Commercial Spaces</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each [
        { number: '3400', label: 'Sq Ft Space', desc: 'Premium commercial area on 2nd floor' },
        { number: '100', label: 'kVA Substation', desc: 'Dedicated power infrastructure' },
        { number: '1', label: 'Ton Lift', desc: 'Cargo lift for easy access' }
      ] as stat}
        <ScrollReveal>
          <div class="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-brand-200 transition-all duration-300 hover:shadow-lg">
            <p class="text-4xl md:text-5xl font-bold text-brand-500">{stat.number}</p>
            <p class="text-lg font-semibold text-gray-900 mt-2">{stat.label}</p>
            <p class="text-sm text-gray-500 mt-1">{stat.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 bg-gray-50">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Lease With Us?
        </h2>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each [
        { icon: '📍', title: 'Prime Location', desc: 'Heart of Chakan MIDC near major industrial landmarks' },
        { icon: '🏗️', title: 'Modern Infrastructure', desc: 'Purpose-built commercial space with premium finishes' },
        { icon: '🔌', title: 'Uninterrupted Power', desc: 'Generator backup + 100kVA substation' },
        { icon: '📈', title: 'Growth Potential', desc: 'Scale your business in a thriving industrial corridor' }
      ] as item}
        <ScrollReveal>
          <div class="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <span class="text-3xl mb-3 block">{item.icon}</span>
            <h3 class="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p class="text-sm text-gray-500">{item.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>
