<script lang="ts">
  const countries = [
    { code: 'IN', dial: '+91', flag: '🇮🇳' },
    { code: 'US', dial: '+1', flag: '🇺🇸' },
    { code: 'GB', dial: '+44', flag: '🇬🇧' },
    { code: 'CA', dial: '+1', flag: '🇨🇦' },
    { code: 'AU', dial: '+61', flag: '🇦🇺' },
    { code: 'AE', dial: '+971', flag: '🇦🇪' },
    { code: 'SA', dial: '+966', flag: '🇸🇦' },
    { code: 'SG', dial: '+65', flag: '🇸🇬' },
    { code: 'MY', dial: '+60', flag: '🇲🇾' },
    { code: 'CN', dial: '+86', flag: '🇨🇳' },
    { code: 'JP', dial: '+81', flag: '🇯🇵' },
    { code: 'KR', dial: '+82', flag: '🇰🇷' },
    { code: 'DE', dial: '+49', flag: '🇩🇪' },
    { code: 'FR', dial: '+33', flag: '🇫🇷' },
    { code: 'IT', dial: '+39', flag: '🇮🇹' },
  ];

  let name = $state('');
  let company = $state('');
  let contact = $state('');
  let countryCode = $state('+91');
  let email = $state('');
  let message = $state('');
  let submitting = $state(false);
  let submitted = $state(false);
  let duplicate = $state(false);
  let error = $state('');

  function validate() {
    if (!name.trim()) return 'Please enter your name';
    if (!company.trim()) return 'Please enter your company name';
    if (!contact.trim()) return 'Please enter your contact number';
    if (contact.trim().length < 7) return 'Please enter a valid contact number';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    return '';
  }

  function reset() {
    submitting = false;
    submitted = false;
    duplicate = false;
    error = '';
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      error = validationError;
      return;
    }

    error = '';
    submitting = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          contact: `${countryCode}-${contact.trim()}`,
          email: email.trim() || 'Not provided',
          message: message.trim() || 'Not provided',
          timestamp: new Date().toISOString()
        })
      });

      const data = await res.json();

      if (data.duplicate) {
        duplicate = true;
        return;
      }

      if (!res.ok) throw new Error('Submission failed');

      submitted = true;
      name = '';
      company = '';
      contact = '';
      email = '';
      message = '';
    } catch {
      error = 'Something went wrong. Please contact us directly.';
    } finally {
      submitting = false;
    }
  }
</script>

{#if submitting}
  <div class="text-center py-12 animate-fade-in">
    <div class="inline-block w-10 h-10 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin mb-4"></div>
    <p class="text-gray-500 text-sm">Sending your enquiry...</p>
  </div>
{:else if submitted}
  <div class="text-center py-6 animate-scale-in">
    <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-3xl text-green-600 font-bold">✓</span>
    </div>
    <h3 class="text-lg font-bold text-gray-900 mb-2">Enquiry Submitted</h3>
    <p class="text-gray-500 text-sm mb-5">We have received your enquiry. We will get back to you shortly.</p>
    <button
      onclick={reset}
      class="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all text-sm"
    >
      Submit Another
    </button>
  </div>
{:else if duplicate}
  <div class="text-center py-6 animate-scale-in">
    <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-3xl text-amber-500 font-bold">!</span>
    </div>
    <h3 class="text-lg font-bold text-gray-900 mb-2">Duplicate Contact</h3>
    <p class="text-gray-500 text-sm mb-5">You have already submitted this form. We will get back to you shortly.</p>
    <button
      onclick={reset}
      class="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all text-sm"
    >
      Submit Another Enquiry
    </button>
  </div>
{:else if error}
  <div class="text-center py-6 animate-scale-in">
    <div class="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-3xl text-red-500 font-bold">✕</span>
    </div>
    <h3 class="text-lg font-bold text-gray-900 mb-2">Something went wrong</h3>
    <p class="text-gray-500 text-sm mb-5">Please contact us directly at <a href="tel:+918408817093" class="text-brand-500 font-medium hover:underline">+91-8408817093</a> or <a href="mailto:amplchakan@gmail.com" class="text-brand-500 font-medium hover:underline">amplchakan@gmail.com</a></p>
    <button
      onclick={reset}
      class="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all text-sm"
    >
      Try Again
    </button>
  </div>
{:else}
  <form onsubmit={handleSubmit} class="space-y-2.5">
    {#if error}
      <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 animate-fade-in">
        {error}
      </div>
    {/if}

    <div>
      <label for="name" class="block text-xs font-medium text-gray-700 mb-1">
        Name <span class="text-red-500">*</span>
      </label>
      <input
        id="name"
        type="text"
        bind:value={name}
        placeholder="Your full name"
        class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
        required
      />
    </div>

    <div>
      <label for="company" class="block text-xs font-medium text-gray-700 mb-1">
        Company Name <span class="text-red-500">*</span>
      </label>
      <input
        id="company"
        type="text"
        bind:value={company}
        placeholder="Your company name"
        class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
        required
      />
    </div>

    <div>
      <label for="contact" class="block text-xs font-medium text-gray-700 mb-1">
        Contact Number <span class="text-red-500">*</span>
      </label>
      <div class="flex gap-2">
        <select
          bind:value={countryCode}
          class="w-[110px] shrink-0 px-2 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm bg-white"
        >
          {#each countries as c (c.code)}
            <option value={c.dial}>{c.flag} {c.dial}</option>
          {/each}
        </select>
        <input
          id="contact"
          type="tel"
          bind:value={contact}
          placeholder="XXXXXXXXXX"
          class="flex-1 px-3 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
          required
        />
      </div>
    </div>

    <div>
      <label for="email" class="block text-xs font-medium text-gray-700 mb-1">
        Email <span class="text-gray-400 text-xs">(optional)</span>
      </label>
      <input
        id="email"
        type="email"
        bind:value={email}
        placeholder="your@email.com"
        class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
      />
    </div>

    <div>
      <label for="message" class="block text-xs font-medium text-gray-700 mb-1">
        Message <span class="text-gray-400 text-xs">(optional)</span>
      </label>
      <textarea
        id="message"
        rows={2}
        bind:value={message}
        placeholder="Any specific requirements?"
        class="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm resize-none"
      ></textarea>
    </div>

    <button
      type="submit"
      disabled={submitting}
      class="w-full px-5 py-2.5 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 text-sm"
    >
      Send Enquiry
    </button>

    <p class="text-xs text-gray-400 text-center">
      We respect your privacy. Your information will not be shared.
    </p>
  </form>
{/if}
