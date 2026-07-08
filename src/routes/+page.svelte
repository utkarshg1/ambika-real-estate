<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import StatsBar from '$lib/components/StatsBar.svelte';
  import AmenitiesGrid from '$lib/components/AmenitiesGrid.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import YouTubePlayer from '$lib/components/YouTubePlayer.svelte';
  import frontageBuilding from '$lib/assets/Frontage Building.jpeg';
  import eveningPhoto from '$lib/assets/Evening Photo.jpeg';
  import premiumBuilding from '$lib/assets/Premium Building Photo.jpeg';
</script>

<svelte:head>
  <title>Ambika Real Estate | Premium Commercial Space in Chakan MIDC</title>
</svelte:head>

<Hero>
  <StatsBar />
</Hero>

<section class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-8">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Video Tour</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
          See the <span class="text-brand-500">Space</span> in Action
        </h2>
        <p class="text-gray-500 text-lg leading-relaxed">
          Take a quick visual walkthrough of our premium commercial space and experience the professional environment firsthand.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="max-w-4xl mx-auto">
        <YouTubePlayer
          videoId="WPxrUGJySt8"
          title="Ambika Real Estate - Premium Commercial Space Tour"
          vertical
          thumbnailSrc={premiumBuilding}
          class="shadow-2xl shadow-brand-500/10"
        />
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="text-center mt-6">
        <a
          href="/gallery"
          class="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
        >
          View All Photos & Videos
          <span class="text-lg">→</span>
        </a>
      </div>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
          Premium Commercial Space for Your Business
        </h2>
        <p class="text-gray-500 text-lg leading-relaxed">
          Located in the heart of Chakan MIDC — India's largest industrial hub — our property offers the perfect environment for your business to thrive.
          Modern amenities, strategic location, and professional infrastructure.
        </p>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <ScrollReveal class="order-2 lg:order-1">
        <div class="space-y-6">
          <div class="flex items-start gap-4 p-5 bg-brand-50 rounded-2xl">
            <div class="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">Strategic Location</h3>
              <p class="text-gray-500 text-sm mt-1">Situated in Premium Chakan MIDC near Horizon Industrial Park and Hyundai Construction Equipment Pvt. Ltd.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-5 bg-primary-50 rounded-2xl">
            <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">Modern Infrastructure</h3>
              <p class="text-gray-500 text-sm mt-1">1 ton capacity lift, generator power backup, and dedicated 100kVA substation for uninterrupted operations.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-5 bg-accent-50 rounded-2xl">
            <div class="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">Professional Environment</h3>
              <p class="text-gray-500 text-sm mt-1">A workspace designed for long-term success with modern amenities and a professional atmosphere.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal class="order-1 lg:order-2">
        <div class="relative">
          <img
            src={frontageBuilding}
            alt="Building frontage"
            class="w-full rounded-2xl shadow-xl aspect-[4/3] object-cover"
          />
          <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
            <p class="text-sm font-semibold text-gray-900">3400 sq ft</p>
            <p class="text-xs text-gray-500">Premium Space</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 bg-gray-50">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Amenities</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
          Everything You Need
        </h2>
        <p class="text-gray-500 text-lg leading-relaxed">
          Imagine your team working here — professional environment,
          modern amenities, and everything you need for long-term success.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <AmenitiesGrid limit={3} />
    </ScrollReveal>

    <ScrollReveal>
      <div class="text-center mt-10">
        <a
          href="/amenities"
          class="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
        >
          View All Amenities
          <span class="text-lg">→</span>
        </a>
      </div>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 bg-white">
  <div class="container-main">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <ScrollReveal>
        <div class="relative">
          <img
            src={eveningPhoto}
            alt="Building in evening"
            class="w-full rounded-2xl shadow-xl aspect-[4/3] object-cover"
          />
          <div class="absolute -top-4 -right-4 bg-brand-500 text-white p-4 rounded-2xl shadow-lg hidden md:block">
            <p class="text-sm font-bold">Available Now</p>
            <p class="text-xs text-white/80">For Lease</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div>
          <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Location</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Premium Chakan MIDC
          </h2>
          <p class="text-gray-500 leading-relaxed mb-6">
            Our property is strategically located in the Premium Chakan MIDC, one of Maharashtra's
            most sought-after industrial areas. Close to Horizon Industrial Park and Hyundai Construction
            Equipment Pvt. Ltd., your business will be in excellent company.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-700">Chakan MIDC</span>
            <span class="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-700">Near Horizon Park</span>
            <span class="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-700">Hyundai Proximity</span>
            <span class="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium text-gray-700">Industrial Hub</span>
          </div>
          <a
            href="/location"
            class="mt-6 inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors"
          >
            Explore Location
            <span class="text-lg">→</span>
          </a>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 bg-gray-50">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-2xl mx-auto">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
          Ready to Take the Next Step?
        </h2>
        <p class="text-gray-500 text-lg leading-relaxed mb-8">
          Schedule a visit or enquiry about leasing this premium commercial space.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            class="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
          >
            Enquire Now
          </a>
          <a
            href="tel:+918408817093"
            class="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all duration-200 border border-gray-200 hover:shadow-lg"
          >
            Call +91-8408817093
          </a>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
