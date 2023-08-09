<script setup>
import Pagination from '../../components/Pagination.vue'
import IndexListGroup from '../../components/blocks/list-groups/IndexListGroup.vue'
</script>

<template>
  <main class="container-fluid container-lg pt-5">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="card-title">Blocks</h1>
          <Pagination :pageIndex="1" :pageSize="8" :pageTotal="16" />
        </div>
        <IndexListGroup />
      </div>
    </div>
  </main>
</template>

<style>

</style>
