<template>
<div>
  <div class="row rounded text-left">
    <h5 class="col-3 d-flex mx-2">
      {{title}}
    </h5>
    <div class="d-flex"><h5 class="col">:</h5></div>
    <h5 class="col d-flex mx-2">
      {{content}}
      <slot></slot>
    </h5>
  </div>
</div>
</template>

<script>

export default {
  name: 'AppDetailsViewPill',
  props: {
    title: String,
    content: null
  }
}
</script>
