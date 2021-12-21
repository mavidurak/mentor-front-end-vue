<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="8"
      style="width:100%; height:410px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
        @click="center=m"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      center: { lat: 39.925533, lng: 32.866287 },
      markers: [],
      currentPlace: null
    }
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
      this.markers = [
        {
          lat: 41.015137,
          lng: 28.979530,
          label: 'İstanbul'
        },
        {
          lat: 40.7489,
          lng: 30.3793,
          label: 'Sakarya'
        }
      ]
    }
  },
  mounted () {
    this.geolocate()
  }
}
</script>
