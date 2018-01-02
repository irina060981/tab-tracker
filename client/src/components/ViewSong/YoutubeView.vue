<template>
  <panel title="YouTube Video">
  	<youtube v-if="youtubeId"
  	  :video-id="youtubeId"
  	  :player-width="500"
  	  :player-height="257"
  	></youtube>
  </panel>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    components: {
      Panel
    },
    props: [
      'youtubeId'
    ]
  }
</script>

<style scoped>
</style>
