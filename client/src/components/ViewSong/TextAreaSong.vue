<template>
  <panel :title="panelTitle">
     <textarea
        readonly
        v-model="content"
      ></textarea>
  </panel>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    components: {
      Panel
    },
    props: [
      'panelTitle', 'content'
    ]
  }
</script>

<style scoped>
  textarea {
  	width: 100%;
  	padding: 40px;
  	height: 600px;
  	font-family: monospace;
    border-style: none;
    border-color: transparent;
    overflow: auto;
  }
</style>
