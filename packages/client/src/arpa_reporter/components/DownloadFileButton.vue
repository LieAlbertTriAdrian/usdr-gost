<template>
  <a :href="`/api/uploads/${upload.id}/download`" class="btn-sm btn-primary ml-2">
      Download file
  </a>
</template>

<script>
export default {
  name: 'DownloadFileButton',
  props: {
    upload: Object
  }
}
</script>

<!-- NOTE: This file was copied from src/components/DownloadFileButton.vue (git @ ada8bfdc98) in the arpa-reporter repo on 2022-09-23T20:05:47.735Z -->
