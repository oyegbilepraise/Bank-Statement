<template>
  <div>
    <div class="flex items-center">
      <IconAddLocation class="w-16"/>
      <span class="text-xl font-semibold ml-3">Research Location</span>
    </div>
    <div class="flex items-center space-x-2 mt-8">
      <AppInput v-model="address" placeholder="Type adddress, state e.g. Lekki, Lagos" name="address"/>
      <AppButton v-if="!coordinates" @click="viewAddressOnMap()" :disabled="!address">View on map</AppButton>
      <AppButton v-if="coordinates && address" @click="handleAdd()">Add location</AppButton>
    </div>
    <button
      @click="useCurrentLocation"
      class="text-green-600 font-semibold border-b border-green-500 mt-3 ml-1"
    >
      Use my location
    </button>
    <div ref="mapDiv" class="mt-10 bg-gray-100 rounded-lg h-64"></div>
    <AppButton @click="$emit('cancel')" variant="danger" class="mt-8">Cancel</AppButton>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import IconAddLocation from "@/components/icons/IconAddLocation";
import AppInput from "@/components/global/Input";
import AppButton from "@/components/global/Button";
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { Loader } from '@googlemaps/js-api-loader'
import { useGeolocation } from "@/hooks/use-geolocation";

const GOOGLE_MAPS_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

export default {
  name: "AddLocation",
  components: { AppButton, AppInput, IconAddLocation },
  emits: ['add', 'cancel'],
  setup(_, context) {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }));
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    const map = ref(null);
    const geocoder = ref(null);
    const marker = ref(null);
    let clickListener = null;
    const address = ref('');
    const coordinates = ref(null);

    const geocode = (request) => {
      geocoder.value.geocode(request).then((result) => {
        const { results } = result;
        const preferred = result.results[0]; // results contain other possible addresses
        map.value.setCenter(preferred.geometry.location);
        marker.value.setPosition(preferred.geometry.location);
        marker.value.setMap(map.value);
        address.value = preferred.formatted_address;
        coordinates.value = {
          lat: preferred.geometry.location.lat(),
          lng: preferred.geometry.location.lng()
        };
        return results;
      }).catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
    };

    const handleAdd = () => {
      context.emit('add', { address: address.value, coordinates: coordinates.value });
    };

    const useCurrentLocation = () => {
      geocode({ location: currPos.value });
    }

    const viewAddressOnMap = () => {
      if (!address.value) return;
      geocode({ address: address.value });
    }

    onMounted(async () => {
      try {
        await loader.load()
        map.value = new google.maps.Map(mapDiv.value, { center: currPos.value, zoom: 7 });
        geocoder.value = new google.maps.Geocoder();
        marker.value = new google.maps.Marker({ map: map.value });
      } catch (e) {
        console.log({ e });
      }
      clickListener = map.value.addListener('click', ({ latLng }) => {
        geocode({ location: latLng });
      });
    });

    onUnmounted(async () => {
      if (clickListener) clickListener.remove()
    });

    return {
      currPos, mapDiv, address, handleAdd, useCurrentLocation, coordinates, viewAddressOnMap
    };
  }
}
</script>
