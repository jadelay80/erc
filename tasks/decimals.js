module.exports = () => async (contract) => {
  var decimals = parseInt(await contract.methods.decimals().call())
  return { decimals }
}
