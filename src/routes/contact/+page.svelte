<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>Contact Us | Ambika Real Estate</title>
  <meta name="description" content="Contact Ambika Real Estate for premium commercial space in Chakan MIDC. Call +91-8408817093 or email amplchakan@gmail.com." />
</svelte:head>

<section class="lg:h-dvh pt-16 md:pt-20 lg:overflow-hidden bg-white">
  <div class="container-main lg:h-full lg:flex lg:flex-col">
    <ScrollReveal>
      <div class="py-2 md:py-3">
        <span class="text-brand-500 font-semibold text-xs uppercase tracking-wider">Contact</span>
        <h1 class="text-xl md:text-2xl font-bold text-gray-900 mt-0.5">Get in <span class="text-brand-500">Touch</span></h1>
      </div>
    </ScrollReveal>

    <div class="lg:flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 lg:overflow-hidden pb-2 md:pb-4">
      <div class="lg:col-span-3 lg:overflow-y-auto">
        <ScrollReveal>
          <div class="bg-white rounded-2xl p-4 md:p-5 shadow-lg shadow-gray-200/50 border border-gray-100">
            <h2 class="text-sm font-bold text-gray-900 mb-3">Send us an Enquiry</h2>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>

      <div class="lg:col-span-2 space-y-3 md:space-y-4 lg:overflow-y-auto">
        <ScrollReveal>
          <div class="bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-100">
            <h3 class="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Contact Information</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-2.5">
                <span class="text-lg flex-shrink-0">📞</span>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Phone</p>
                  <a href="tel:+918408817093" class="text-sm font-semibold text-gray-900 hover:text-brand-500 transition-colors block">+91-8408817093</a>
                  <a href="tel:+918788219469" class="text-sm font-semibold text-gray-900 hover:text-brand-500 transition-colors block">+91-8788219469</a>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-lg flex-shrink-0">✉️</span>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Email</p>
                  <a href="mailto:amplchakan@gmail.com" class="text-sm font-semibold text-gray-900 hover:text-brand-500 transition-colors">amplchakan@gmail.com</a>
                </div>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-lg flex-shrink-0">📍</span>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Address</p>
                  <p class="text-sm text-gray-700">
                    PAP -K31, Chakan Industrial Area, Plot No,<br />
                    Phase-2, Sawardari, Chakan,<br />
                    Maharashtra 410501
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="bg-brand-500 rounded-2xl p-4 md:p-5 text-white">
            <h3 class="font-semibold text-sm mb-1">Office Hours</h3>
            <div class="space-y-1 text-sm text-white/80">
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </div>
</section>
