module.exports = () => async (contract, { address }) => {
  var balance = await contract.methods.balanceOf(address).call()
  return { balance }
}
