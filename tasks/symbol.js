module.exports = () => async (contract) => {
  var symbol = await contract.methods.symbol().call()
  return { symbol }
}
