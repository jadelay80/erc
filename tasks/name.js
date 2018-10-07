module.exports = () => async (contract) => {
  var name = await contract.methods.name().call()
  return { name }
}
