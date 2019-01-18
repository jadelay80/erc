module.exports = ({ web3 }) => (method) => async (contract, inputs) => {
  const { privateKey, gasPrice, gasLimit } = inputs
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)
  const signedTransaction = await account.signTransaction({
    // from: account.address,
    to: contract.options.address,
    gas: gasLimit || parseInt(process.env.DEFAULT_GAS_LIMIT, 10), // optional
    gasPrice: gasPrice, // optional
    value: 0, // force to 0 ETH
    data: await method(contract, inputs)
  })
  return new Promise(async (resolve, reject) => {
    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
      .on('transactionHash', transactionHash => {
        return resolve({ transactionHash })
      })
      .on('error', reject)
  })
}
