<script lang="ts">
  import ambikaLogo from '$lib/assets/ambika_logo.png';
</script>

<footer class="bg-gray-900 text-gray-300">
  <div class="container-main py-12 md:py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
      <div class="space-y-4">
        <a href="/" class="flex items-center gap-3">
          <img
            src={ambikaLogo}
            alt="Ambika Real Estate"
            class="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain"
          />
          <div>
            <span class="text-lg md:text-xl font-bold text-white">Ambika</span>
            <span class="text-lg md:text-xl font-bold text-brand-400"> Real Estate</span>
          </div>
        </a>
        <p class="text-sm leading-relaxed text-gray-400 max-w-sm">
          Premium commercial space available for lease in Chakan MIDC. Modern amenities,
          strategic location, and professional environment for your business growth.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
        <ul class="space-y-3">
          <li>
            <a href="/" class="text-sm hover:text-brand-400 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="/about" class="text-sm hover:text-brand-400 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="/amenities" class="text-sm hover:text-brand-400 transition-colors duration-200">Amenities</a>
          </li>
          <li>
            <a href="/gallery" class="text-sm hover:text-brand-400 transition-colors duration-200">Gallery</a>
          </li>
          <li>
            <a href="/location" class="text-sm hover:text-brand-400 transition-colors duration-200">Location</a>
          </li>
          <li>
            <a href="/contact" class="text-sm hover:text-brand-400 transition-colors duration-200">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
        <ul class="space-y-4">
          <li>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
            <a
              href="tel:+918408817093"
              class="text-sm hover:text-brand-400 transition-colors duration-200 block"
            >+91-8408817093</a>
            <a
              href="tel:+918788219469"
              class="text-sm hover:text-brand-400 transition-colors duration-200 block"
            >+91-8788219469</a>
          </li>
          <li>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
            <a
              href="mailto:amplchakan@gmail.com"
              class="text-sm hover:text-brand-400 transition-colors duration-200"
            >amplchakan@gmail.com</a>
          </li>
          <li>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Address</p>
            <p class="text-sm text-gray-400">
              PAP -K31, Chakan Industrial Area,<br />
              Phase-2, Sawardari, Chakan,<br />
              Maharashtra 410501
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="border-t border-gray-800">
    <div class="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ambika Real Estate. All rights reserved.
      </p>
      <p class="text-sm text-gray-500">
        Powered by Ambika Real Estate
      </p>
    </div>
  </div>
</footer>
