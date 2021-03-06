const Service = require('@liteflow/service')
const Web3 = require('web3')
const erc20ABI = require('./erc20-abi.json')
const providerEndpoint = process.env.PROVIDER_ENDPOINT
const blockConfirmations = parseInt(process.env.BLOCK_CONFIRMATIONS, 10)
const defaultGasLimit = parseInt(process.env.DEFAULT_GAS_LIMIT, 10)
const contractAddress = process.env.CONTRACT_ADDRESS

const Liteflow = new Service()
const web3 = new Web3(providerEndpoint)

const dep = { Liteflow, web3, blockConfirmations, defaultGasLimit, erc20ABI, contractAddress }
const tasksHandler = require('./tasks')(dep)
const signTxHandler = require('./tasks/signTxHandler')(dep)
const eventsHandler = require('./events')(dep)

// Start events listeners
eventsHandler([require('./events/transfer'), require('./events/approval')])

// Listen for tasks
Liteflow.listenTask({
  name: tasksHandler(require('./tasks/name')(dep)),
  symbol: tasksHandler(require('./tasks/symbol')(dep)),
  decimals: tasksHandler(require('./tasks/decimals')(dep)),
  totalSupply: tasksHandler(require('./tasks/totalSupply')(dep)),
  balanceOf: tasksHandler(require('./tasks/balanceOf')(dep)),
  allowance: tasksHandler(require('./tasks/allowance')(dep)),
  transfer: tasksHandler(signTxHandler(require('./tasks/transfer')(dep))),
  approve: tasksHandler(signTxHandler(require('./tasks/approve')(dep))),
  transferFrom: tasksHandler(signTxHandler(require('./tasks/transferFrom')(dep))),
})
