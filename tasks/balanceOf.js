module.exports = () => async (contract, { address }) => {
  var balance = await contract.methods.balanceOf(address).call()
  console.log('balance of', address, 'is', balance)
  return { balance }
}
