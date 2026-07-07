<script lang="ts">
  let { limit }: { limit?: number } = $props();

  const amenities = [
    {
      title: '1 Ton Capacity Lift',
      description: 'Dedicated cargo lift for easy movement of goods and equipment across floors.',
      icon: '⬆️'
    },
    {
      title: 'Generator Backup',
      description: 'Uninterrupted power supply with high-capacity generator backup for all your operations.',
      icon: '🔋'
    },
    {
      title: '100 kVA Substation',
      description: 'Dedicated electrical substation ensuring stable and sufficient power supply.',
      icon: '⚡'
    },
    {
      title: 'Modern Architecture',
      description: 'Contemporary design with premium finishes, large windows, and professional ambiance.',
      icon: '🏛️'
    },
    {
      title: 'Ample Parking',
      description: 'Designated parking space for employees and visitors with easy access.',
      icon: '🅿️'
    },
    {
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance and controlled access.',
      icon: '🛡️'
    }
  ];

  let displayAmenities = $derived(limit ? amenities.slice(0, limit) : amenities);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each displayAmenities as amenity, i}
    <div
      class="group relative bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div class="flex items-start gap-4">
        <span class="text-2xl flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-50 rounded-xl group-hover:bg-brand-100 transition-colors duration-300">
          {amenity.icon}
        </span>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1.5">{amenity.title}</h3>
          <p class="text-sm text-gray-500 leading-relaxed">{amenity.description}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
