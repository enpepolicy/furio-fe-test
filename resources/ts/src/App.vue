<template>
  <div class="flex flex-col min-h-screen overflow-hidden dark">
    <!-- Page illustration -->
    <div class="relative max-w-6xl mx-auto h-0 -z-1" aria-hidden="true">
      <PageIllustration />
    </div>

    <!-- Page content -->
    <main class="grow flex flex-col items-center justify-center bg-gray-500/20">


      <div>
        <div class="flex justify-center items-center flex-col grow">
          <ConnectButton />
        </div>
  
        <div
          class="font-red-hat-display text-center text-2xl pt-6 pb-2 text-gray-800"
        >
          {{
            !currentAccount ?
              'Welcome Paul' :
              `Currently you have: ${currentAccountBalance} ETH`
          }}
        </div>
      </div>
      
      <div
        v-show="currentAccount"
        class="font-red-hat-display font-semibold text-center text-2xl pt-4 text-gray-800 absolute bottom-5"
      >
        {{
          isValidNetwork ?
            'You are now connected to Rinkeby Network 😄' :
            'You are not connected to Rinkeby Network ❌'
        }}
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { NetworkEnum } from './composables/network.enum'
import ConnectButton from './partials/ConnectButton.vue';
import PageIllustration from './partials/PageIllustration.vue'
import { onMounted, onBeforeUnmount } from 'vue';
import {
  initializeWallet,
  removeWindowEthereumListeners,
  currentAccount,
  currentAccountBalance,
  isValidNetwork,
  currentNetworkId
} from './composables/useWallet'

onMounted(() => {
  initializeWallet()
})

onBeforeUnmount(() => {
  removeWindowEthereumListeners()
})
</script>
