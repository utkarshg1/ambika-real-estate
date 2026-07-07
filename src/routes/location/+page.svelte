<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>Location | Ambika Real Estate</title>
  <meta name="description" content="Our premium commercial space is located in Chakan MIDC near Horizon Industrial Park and Hyundai Construction Equipment." />
</svelte:head>

<section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Location</span>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Premium <span class="text-brand-500">Chakan MIDC</span>
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed">
          Strategically located in one of Maharashtra's most prominent industrial corridors.
        </p>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <ScrollReveal>
        <div class="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[16/10]">
          <iframe
            src="https://www.google.com/maps?q=18.759779,73.7744366&output=embed&z=16"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="FPT Technical Center"
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div class="space-y-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
            Strategic <span class="text-brand-500">Location</span>
          </h2>
          <p class="text-gray-500 leading-relaxed">
            Our property is situated in the Premium Chakan MIDC, offering excellent connectivity
            and proximity to major industrial players. Located near Horizon Industrial Park and
            Hyundai Construction Equipment Pvt. Ltd., your business will thrive in this ecosystem.
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span class="text-xl flex-shrink-0">📍</span>
              <div>
                <p class="font-semibold text-gray-900 text-sm">Address</p>
                <p class="text-sm text-gray-500">
                  PAP -K31, Chakan Industrial Area, Plot No,<br />
                  Phase-2, Sawardari, Chakan,<br />
                  Maharashtra 410501
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-brand-50 rounded-xl">
              <span class="text-xl flex-shrink-0">🏭</span>
              <div>
                <p class="font-semibold text-gray-900 text-sm">Area Highlights</p>
                <p class="text-sm text-gray-500">
                  Thriving industrial corridor with excellent infrastructure,<br />
                  major corporate presence, and growth potential.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
              <span class="text-xl flex-shrink-0">🚗</span>
              <div>
                <p class="font-semibold text-gray-900 text-sm">Accessibility</p>
                <p class="text-sm text-gray-500">
                  Well-connected by road, close to major highways and<br />
                  public transport for easy employee commute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <ScrollReveal>
      <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Nearby Landmarks</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {#each [
            { name: 'Horizon Industrial Park', dist: 'Adjacent' },
            { name: 'Hyundai Construction Equipment', dist: 'Nearby' },
            { name: 'Chakan MIDC', dist: 'Premium Zone' },
            { name: 'Major Highway Connectivity', dist: 'Easy Access' }
          ] as landmark}
            <div class="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-brand-200 transition-all duration-300">
              <p class="font-semibold text-gray-900 text-sm">{landmark.name}</p>
              <p class="text-xs text-brand-500 font-medium mt-1">{landmark.dist}</p>
            </div>
          {/each}
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 bg-gray-50">
      <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-gray-200/50 border border-gray-100 mb-16">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
        <div class="aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=PAP-K31+Chakan+Industrial+Area+Phase-2+Sawardari+Chakan+Maharashtra+410501&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Location map"
            class="w-full h-full min-h-[300px]"
          ></iframe>
        </div>
        <p class="text-xs text-gray-400 mt-3">
          PAP -K31, Chakan Industrial Area, Phase-2, Sawardari, Chakan, Maharashtra 410501
        </p>
      </div>

  <div class="container-main text-center">
    <ScrollReveal>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Want to See the Space?
      </h2>
      <p class="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
        Schedule a visit and experience the premium environment yourself.
      </p>
      <a
        href="/contact"
        class="inline-flex px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
      >
        Schedule a Visit
      </a>
    </ScrollReveal>
  </div>
</section>
