<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>Contact Us | Ambika Real Estate</title>
  <meta name="description" content="Contact Ambika Real Estate for premium commercial space in Chakan MIDC. Call +91-8408817093 or email amplchakan@gmail.com." />
</svelte:head>

<section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Contact</span>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Get in <span class="text-brand-500">Touch</span>
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed">
          Ready to lease your premium commercial space? Reach out to us and we'll get back to you promptly.
        </p>
      </div>
    </ScrollReveal>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div class="lg:col-span-3">
        <ScrollReveal>
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Send us an Enquiry</h2>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <ScrollReveal>
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-xl flex-shrink-0">📞</span>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Phone</p>
                  <a href="tel:+918408817093" class="text-sm font-semibold text-gray-900 hover:text-brand-500 transition-colors block">+91-8408817093</a>
                  <a href="tel:+918788219469" class="text-sm font-semibold text-gray-900 hover:text-brand-500 transition-colors block">+91-8788219469</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-xl flex-shrink-0">✉️</span>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Email</p>
                  <a href="mailto:amplchakan@gmail.com" class="text-sm font-semibold text-gray-900 hover:text-brand-500 transition-colors">amplchakan@gmail.com</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-xl flex-shrink-0">📍</span>
                <div>
                  <p class="text-xs text-gray-500 uppercase tracking-wider font-medium">Address</p>
                  <p class="text-sm text-gray-700">
                    Premium Chakan MIDC,<br />
                    Near Horizon Industrial Park,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="bg-brand-500 rounded-2xl p-6 text-white">
            <h3 class="font-semibold mb-2">Office Hours</h3>
            <div class="space-y-2 text-sm text-white/80">
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
            <div class="mt-4 pt-4 border-t border-white/20">
              <p class="text-sm text-white/90">
                Prefer to visit? Schedule an appointment and we'll be happy to show you around.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-gray-50">
  <div class="container-main">
    <ScrollReveal>
      <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Find Us</h2>
        <div class="aspect-[21/9] bg-gray-100 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.8!3d18.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMThiwqAzNScwMC4wIk4gNzPCsDQ4JzAwLjAiRQ!5e0!3m2!1sen!2sin!4v1"
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
          Premium Chakan MIDC, Near Horizon Industrial Park, Maharashtra
        </p>
      </div>
    </ScrollReveal>
  </div>
</section>
