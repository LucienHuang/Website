import type { BigNumber } from 'ethers'
import type { Ref } from 'vue'

export type AccountType = 'contract' | 'normal'

export type Status = 'connected' | 'disconnected' | 'connecting' | 'error'

export type UseWallet = {
  account: Ref<string | null>
  balance: Ref<BigNumber>
  chainId: Ref<number | undefined>
  // connector: string | null
  // connectors: object
  // error: Error | null
  ethereum?: ethers.providers.Web3Provider
  // networkName: string | null
  // status: Status
  // type: AccountType | null
  connect: () => Promise<void>
  reset: () => void
  getBlockNumber: () => Promise<number>
  isConnected: () => boolean
}
