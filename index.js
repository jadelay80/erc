const MESG = require('mesg-js').service()
const Web3 = require('web3')
const {
  infuraEndpoint,
  blockConfirmations,
  defaultGasLimit,
  defaultDecimals
} = require('./config.json')
const erc20ABI = require('./erc20-abi.json')
const BigNumber = require('bignumber.js')

const web3 = new Web3(infuraEndpoint)

const decimals = async (contract) => {
  try {
    return BigNumber(10).pow(BigNumber(await contract.methods.decimals().call()))
  } catch (err) {
    return BigNumber(defaultDecimals)
  }
}

const convertValue = async (value, contract) => BigNumber(value).dividedBy(await decimals(contract)).toString(10)
const convertToValue = async (value, contract) => BigNumber(value).multipliedBy(await decimals(contract))
const dep = { MESG, web3, convertValue, convertToValue, blockConfirmations, defaultGasLimit, erc20ABI }
const tasksHandler = require('./tasks')(dep)

// const convertValue = value => BigNumber(value).dividedBy(decimalBN).toString(10)
// const convertToValue = value => BigNumber(value).multipliedBy(decimalBN)
// const dep = { MESG, web3, erc20, convertValue, convertToValue, blockConfirmations, defaultGasLimit }
// const tasksHandler = require('./tasks')

const signTxHandler = require('./tasks/signTxHandler')(dep)
const eventsHandler = require('./events')(dep)

// Start events listeners
eventsHandler([
  require('./events/transfer'),
  require('./events/approval')
])

// Listen for tasks
MESG.listenTask({
  totalSupply: tasksHandler(require('./tasks/totalSupply')(dep)),
  balanceOf: tasksHandler(require('./tasks/balanceOf')(dep)),
  allowance: tasksHandler(require('./tasks/allowance')(dep)),
  transfer: tasksHandler(signTxHandler(require('./tasks/transfer')(dep))),
  approve: tasksHandler(signTxHandler(require('./tasks/approve')(dep))),
  transferFrom: tasksHandler(signTxHandler(require('./tasks/transferFrom')(dep)))
})
