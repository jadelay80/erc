module.exports = () => async (contract) => {
  var totalSupply = await contract.methods.totalSupply().call()
  return { totalSupply }
}
