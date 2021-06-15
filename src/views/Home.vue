<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="map" style="width:100%;height:400px;"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  created () {
    this.initProtocalPlugins()
  },
  data () {
    return {
      // mapOptions: {
      //   center: new naver.maps.LatLng(37.3595704, 127.105399),
      //   zoom: 10
      // }
    }
  },
  components: {
  },
  methods: {
    loadScripts (plugins: { name: string; https: string; http: string }) {
      return new Promise<void>((resolve) => {
        const script = document.createElement('script')
        script.async = true
        script.type = 'text/javascript'

        if (location.protocol === 'https:') {
          script.src = plugins.https
        } else {
          script.src = plugins.http
        }

        const dom = document.head ||
          document.getElementsByTagName('head')[0] ||
          document.body ||
          document.getElementsByTagName('body')[0]

        dom.appendChild(script)

        return resolve()
      })
    },
    initProtocalPlugins () {
      const protocolPluginList = [{
        name: 'maps',
        https: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.VUE_APP_NAVER_MAPS_CLIENT_ID}`,
        http: `http://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.VUE_APP_NAVER_MAPS_CLIENT_ID}`
      }]
      protocolPluginList.forEach(item => {
        this.loadScripts(item)
      })
    },
  }
})
</script>
