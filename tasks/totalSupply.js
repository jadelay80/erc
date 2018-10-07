module.exports = () => async (contract) => {
  var totalSupply = await contract.methods.totalSupply().call()
  console.log('totalSupply', totalSupply)
  return { totalSupply }
}
