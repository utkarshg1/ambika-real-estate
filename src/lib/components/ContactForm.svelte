<script lang="ts">
  const GOOGLE_SHEETS_URL = import.meta.env.PUBLIC_GOOGLE_SHEETS_URL || '';

  let name = $state('');
  let company = $state('');
  let contact = $state('');
  let email = $state('');
  let message = $state('');
  let submitting = $state(false);
  let submitted = $state(false);
  let error = $state('');

  function validate() {
    if (!name.trim()) return 'Please enter your name';
    if (!company.trim()) return 'Please enter your company name';
    if (!contact.trim()) return 'Please enter your contact number';
    if (contact.trim().length < 10) return 'Please enter a valid contact number';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    return '';
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

    const formData = new URLSearchParams({
      Name: name.trim(),
      Company: company.trim(),
      Contact: contact.trim(),
      Email: email.trim() || 'Not provided',
      Message: message.trim() || 'Not provided',
      Timestamp: new Date().toISOString()
    });

    try {
      if (GOOGLE_SHEETS_URL) {
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString()
        });
      }

      submitted = true;
      name = '';
      company = '';
      contact = '';
      email = '';
      message = '';
    } catch {
      error = 'Something went wrong. Please try again or call us directly.';
    } finally {
      submitting = false;
    }
  }
</script>

{#if submitted}
  <div class="text-center py-12 animate-scale-in">
    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-3xl">✓</span>
    </div>
    <h3 class="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
    <p class="text-gray-500 mb-6">We have received your enquiry. We will get back to you shortly.</p>
    <button
      onclick={() => (submitted = false)}
      class="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all"
    >
      Submit Another
    </button>
  </div>
{:else}
  <form onsubmit={handleSubmit} class="space-y-5">
    {#if error}
      <div class="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 animate-fade-in">
        {error}
      </div>
    {/if}

    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1.5">
        Name <span class="text-red-500">*</span>
      </label>
      <input
        id="name"
        type="text"
        bind:value={name}
        placeholder="Your full name"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
        required
      />
    </div>

    <div>
      <label for="company" class="block text-sm font-medium text-gray-700 mb-1.5">
        Company Name <span class="text-red-500">*</span>
      </label>
      <input
        id="company"
        type="text"
        bind:value={company}
        placeholder="Your company name"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
        required
      />
    </div>

    <div>
      <label for="contact" class="block text-sm font-medium text-gray-700 mb-1.5">
        Contact Number <span class="text-red-500">*</span>
      </label>
      <input
        id="contact"
        type="tel"
        bind:value={contact}
        placeholder="+91-XXXXXXXXXX"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
        required
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">
        Email <span class="text-gray-400 text-xs">(optional)</span>
      </label>
      <input
        id="email"
        type="email"
        bind:value={email}
        placeholder="your@email.com"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1.5">
        Message <span class="text-gray-400 text-xs">(optional)</span>
      </label>
      <textarea
        id="message"
        rows={3}
        bind:value={message}
        placeholder="Any specific requirements?"
        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-sm resize-none"
      ></textarea>
    </div>

    <button
      type="submit"
      disabled={submitting}
      class="w-full px-6 py-3.5 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 text-sm"
    >
      {submitting ? 'Sending...' : 'Send Enquiry'}
    </button>

    <p class="text-xs text-gray-400 text-center">
      We respect your privacy. Your information will not be shared.
    </p>
  </form>
{/if}
