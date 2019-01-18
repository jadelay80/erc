const MESG = require('mesg-js').service()
const Web3 = require('web3')
const erc20ABI = require('./erc20-abi.json')
const web3 = new Web3(process.env.NODE_ENDPOINT)

const dep = { MESG, web3, erc20ABI }
const tasksHandler = require('./tasks')(dep)
const signTxHandler = require('./tasks/signTxHandler')(dep)
const eventsHandler = require('./events')(dep)

// Start events listeners
eventsHandler([
  require('./events/transfer'),
  require('./events/approval')
])

// Listen for tasks
MESG.listenTask({
  name: tasksHandler(require('./tasks/name')(dep)),
  symbol: tasksHandler(require('./tasks/symbol')(dep)),
  decimals: tasksHandler(require('./tasks/decimals')(dep)),
  totalSupply: tasksHandler(require('./tasks/totalSupply')(dep)),
  balanceOf: tasksHandler(require('./tasks/balanceOf')(dep)),
  allowance: tasksHandler(require('./tasks/allowance')(dep)),
  transfer: tasksHandler(signTxHandler(require('./tasks/transfer')(dep))),
  approve: tasksHandler(signTxHandler(require('./tasks/approve')(dep))),
  transferFrom: tasksHandler(signTxHandler(require('./tasks/transferFrom')(dep)))
})
