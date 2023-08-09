<script setup>
</script>

<template>
    <div class="list-group-item d-md-flex d-block bg-secondary m-0 p-0">
      <a class="d-flex justify-content-center align-items-center text-decoration-none text-center w-md-25" href="#">
        <div class="d-flex flex-row-reverse d-md-block p-2">
          <div class="small text-white-50 ps-1">0</div>
          <div class="small text-white-50">Block</div>
        </div>
      </a>
      <div class="d-md-flex justify-content-md-between bg-dark p-3 w-100">
        <div class="text-secondary small">
          <span class="small">0 Transactions</span>
          <span class="small ps-2">0 bytes</span>
          <span class="small ps-2">version 0</span>
          <div class="small">
            <div class="text-truncate small">
              <span class="text-white-50">MerkleRoot: </span>
              <span>0x0000000000000000000000000000000000000000000000000000000000000000</span>
            </div>
            <div class="text-truncate small">
              <span class="text-white-50">Hash: </span>
              <span>0x0000000000000000000000000000000000000000000000000000000000000000</span>
            </div>
            <div class="small">
              <span class="text-white-50">Date Time: </span>
              <span>{{ new Date().toLocaleString() }}</span>
            </div>
          </div>
        </div>
        <hr class="d-md-none" />
        <div class="text-secondary small w-md-25 w-100">
          <div class="text-end lh-lg small mt-md-2">
            <div>
              20 Gas Limit
            </div>
            <div class="mb-md-2">
              0 (0%) Gas Used
            </div>
            <div class="progress" role="progressbar" aria-label="Used Gas" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style="width: 0%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>