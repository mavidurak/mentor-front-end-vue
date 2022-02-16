<template>
  <div>
    <gmap-map
      :center="myCoordinates"
      :zoom="8"
      ref="mapRef"
      style="width:100%; height:400px"
    >
      <gmap-marker
        :position="mapCoordinates.markers"
        :clickable="true"
        @click="center=mapCoordinates.markers"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
export default {
  name: 'AddMap',
  data () {
    return {
      currentPlace: null,
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
        markers: {}
      }
    }
  },
  mounted () {
    this.geolocate()
    this.$refs.mapRef.$mapPromise.then(map => { this.map = map })
  },
  computed: {
    mapCoordinates () {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
          markers: {}
        }
      } else {
        const mapLat = this.map.getCenter().lat()
        this.$emit('mapLat', mapLat)
        const mapLng = this.map.getCenter().lng()
        this.$emit('mapLng', mapLng)

        const markers =
          {
            lat: this.map.getCenter().lat(),
            lng: this.map.getCenter().lng()
          }
        return { mapLat, mapLng, markers }
      }
    }
  },
  created () {
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center)
    } else {
      this.$getLocation({})
        .then(coordinates => {
          this.myCoordinates = coordinates
        })
        .catch(error => alert(error))
    }
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom)
    }
  },
  methods: {
    geolocate: function () {
      this.markers =
        {
          lat: this.mapCoordinates.lat,
          lng: this.mapCoordinates.lng,
          label: 'map'
        }
    }
  }
}
</script>
