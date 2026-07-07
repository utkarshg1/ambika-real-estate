<script lang="ts">
  import AmenitiesGrid from '$lib/components/AmenitiesGrid.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>Amenities | Ambika Real Estate</title>
  <meta name="description" content="Explore premium amenities at our commercial space: 1 ton lift, generator backup, 100kVA substation, Vastu compliant design and more." />
</svelte:head>

<section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Amenities</span>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Premium <span class="text-brand-500">Amenities</span>
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed">
          Imagine your team working here — professional environment, modern amenities, 
          and everything you need for long-term success.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <AmenitiesGrid />
    </ScrollReveal>
  </div>
</section>

<!-- Property Specifications -->
<section class="py-16 md:py-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Specifications</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Property <span class="text-brand-500">Details</span>
        </h2>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <ScrollReveal>
        <div class="bg-gray-50 rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 h-full">
          <span class="text-3xl block mb-4">📐</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Floor Area</h3>
          <p class="text-xl font-bold text-gray-900">2nd Floor — 3,400 Sq Ft Available on Rent</p>
          <p class="text-xs text-gray-400 mb-3">Total G+2 Floors, 10,500 Sq Ft</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>Ground Floor: 16 Ft Height</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>1st &amp; 2nd Floor: 12 Ft Height</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="bg-gray-50 rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 h-full">
          <span class="text-3xl block mb-4">🏗️</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Construction</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>Vastu Compliant Design</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>ACP &amp; Glass Glazing Elevation</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>Provision for Lift</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>Located at Corner of 2 Roads</li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="bg-gray-50 rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 h-full">
          <span class="text-3xl block mb-4">🛣️</span>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Road Access</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>North Road Width: 18 Metres</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>East Road Width: 12 Metres</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-1">▸</span>Excellent Connectivity</li>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Suitable For -->
<section class="py-16 md:py-24 bg-gray-50">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Ideal For</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Suitable <span class="text-brand-500">For</span>
        </h2>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="flex flex-wrap justify-center gap-3">
        {#each ['IT/Electronics', 'Engineering', 'Pharma', 'Industries', 'Warehouse', 'R&D/Repair Center', 'Showroom', 'Training Institute', 'Bank', 'Hospitals', 'Malls/Hotels', 'Shops/Offices'] as type (type)}
          <span class="px-5 py-2.5 bg-white text-gray-700 font-medium text-sm rounded-full border border-gray-200 shadow-sm hover:border-brand-300 hover:text-brand-600 transition-all duration-200">
            {type}
          </span>
        {/each}
      </div>
    </ScrollReveal>
  </div>
</section>

<!-- Connectivity & Location -->
<section class="py-16 md:py-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Location</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
          Connectivity &amp; <span class="text-brand-500">Advantages</span>
        </h2>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each [
        { icon: '✈️', title: 'Airports', details: ['Pune – 35 Km', 'Mumbai – 143.5 Km', 'Panvel (Navi Mumbai) – 103.6 Km'] },
        { icon: '🚢', title: 'Sea Port', details: ['JNPT – Nhava Sheva, Navi Mumbai – 120 Km'] },
        { icon: '🚇', title: 'Metro & Railway', details: ['Pimpri Metro Station – 23 Km', 'Akurdi Railway Station – 18 Km'] },
        { icon: '🛣️', title: 'Road Connectivity', details: ['Mumbai/Pune/Bangalore Expressway – 19 Km', 'Pune-Nashik Highway – 11 Km'] },
        { icon: '🏭', title: 'Automobile Hub', details: ['Chakan – Skoda Auto VW, Mercedes, Mahindra, Bajaj', 'Pimpri Chinchwad – Tata Motors, Bajaj Auto, Force Motors', 'Talegaon – Hyundai New Plant'] },
        { icon: '🌐', title: 'MNCs & IT Parks', details: ['Dell, Bridgestone, Hyundai Construction, Faurecia, Thyssenkrupp, Lear + Many More', 'IT Parks: Talawade & Hinjawadi (Pune)'] },
        { icon: '🔬', title: 'Research & Exhibition', details: ['ACDRI – Chinchwad MIDC', 'ARAI – Chakan MIDC', 'PIECC – Moshi (PCMC)'] },
        { icon: '🏭', title: 'Horizon Industrial Park', details: ['Blackstone Group’s 1.4 Mn sq. ft. IGBC Platinum Certified Park in Chakan MIDC', 'Key Tenants: BENTELER Automotive, Volkswagen Group, Mercedes-Benz, Mahindra, Bajaj Auto, JCB + Many More', '45 Parks across 10 Indian Cities | 58 Mn sq. ft. Portfolio | 100+ Customers | 57% Fortune 500'] }
      ] as item (item.title)}
        <ScrollReveal>
          <div class="bg-gray-50 rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full">
            <div class="flex items-start gap-4">
              <span class="text-2xl flex-shrink-0 w-11 h-11 flex items-center justify-center bg-brand-50 rounded-xl">{item.icon}</span>
              <div class="min-w-0">
                <h3 class="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <ul class="space-y-1">
                  {#each item.details as detail (detail)}
                    <li class="text-sm text-gray-600 leading-relaxed">{detail}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>
