<template>
    <BaseButton
      v-if="!currentAccount"
      @click="connectWallet"
      :class="props.buttonClass"
      inner-text="Connect Wallet"
    />
    <div 
      v-else
      :class="props.buttonClass"
    >
      {{ truncateAddress(currentAccount, 12) }}
    </div>
</template>
<script lang="ts" setup>
import BaseButton from './BaseButton.vue';
import { connect, currentAccount } from './../composables/useWallet'
import { truncateAddress } from './../utils'

async function connectWallet() {
  connect().catch((error: string) => {
    console.log(error)
  })
}

const props = defineProps({
  buttonClass: {
    type: String,
    default: 'btn text-white bg-teal-500 hover:bg-teal-400'
  },
})
</script>