<template>
<div>
  <div class="border rounded d-block">
    <div class="d-block">
      {{title}}
    </div>
    <div class="d-block">
      {{dataType}}
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
