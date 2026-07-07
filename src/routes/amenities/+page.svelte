<script lang="ts">
  import AmenitiesGrid from '$lib/components/AmenitiesGrid.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import generatorImage from '$lib/assets/Generator Backup.jpeg';
</script>

<svelte:head>
  <title>Amenities | Ambika Real Estate</title>
  <meta name="description" content="Explore premium amenities at our commercial space: 1 ton lift, generator backup, 100kVA substation and more." />
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

<section class="py-16 md:py-24 bg-gray-50">
  <div class="container-main">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <ScrollReveal>
        <div class="relative">
          <img
            src={generatorImage}
            alt="Generator backup system"
            class="w-full rounded-2xl shadow-xl aspect-[4/3] object-cover"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="space-y-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
            Built for <span class="text-brand-500">Business Excellence</span>
          </h2>
          <p class="text-gray-500 leading-relaxed">
            Every amenity at our property has been thoughtfully chosen to support your business operations
            seamlessly. From reliable power backup to efficient vertical transport, we've got you covered.
          </p>

          <div class="space-y-4">
            {#each [
              { label: 'Power Backup', value: 'Full Generator Backup' },
              { label: 'Electrical', value: '100 kVA Dedicated Substation' },
              { label: 'Vertical Transport', value: '1 Ton Capacity Lift' },
              { label: 'Floor Area', value: '3400 Sq Ft Premium Space' }
            ] as item}
              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                <span class="text-sm font-medium text-gray-500">{item.label}</span>
                <span class="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
            {/each}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>
