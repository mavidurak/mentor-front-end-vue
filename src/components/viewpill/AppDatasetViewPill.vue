<template>
<div>
  <div class="border rounded d-block m-1 px-1">
    <div class="d-block">
      {{title}}
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'AppDatasetViewPill',
  props: {
    id: Number,
    title: String,
    dataType: String
  }
}
</script>
