<template>
  <nav aria-label="Pagination">
    <ul class="pagination m-0 p-0">
      <li v-if="pageIndex > 1" class="page-item">
        <button @click="btnPrev" class="page-link" type="button" aria-label="Previous Page">&lt;</button>
      </li>
      <li v-for="n in range(Math.max(1, currentPage - 5), Math.min(currentPage + 5, totalPages))" :key="n" class="page-item">
        <button @click="btnGoTo(n)" :class="n === currentPage ? 'page-link disabled' : 'page-link'" type="button">{{ n }}</button>
      </li>
      <li v-if="pageIndex < totalPages" class="page-item">
        <button @click="btnNext" class="page-link" type="button" aria-label="Next Page">&gt;</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const $props = defineProps({
  pageTotal: Number,
  pageIndex: Number,
  pageSize: Number,
})

const $route = useRoute()
const $router = useRouter()
const currentPage = computed(() => ($props.pageIndex))
const totalPages = computed(() => Math.ceil($props.pageTotal / $props.pageSize))

function range(min, max) {
  const a = []
  let j = 0
  for (let i = min; i <= max; i++, j++) {
    a[j] = i
  }
  return a
}

function btnPrev() {
  const query = Object.assign({}, $route.query)
  if (query.page > 1) {
    query.page = currentPage.value - 1
    $router.push({ query })
  }
}

function btnGoTo(i) {
  const query = Object.assign({}, $route.query)
  if (i >= 1) {
    query.page = i
    $router.push({ query })
  }
}

function btnNext() {
  const query = Object.assign({}, $route.query)
  query.page = currentPage.value + 1
  $router.push({ query })
}
</script>