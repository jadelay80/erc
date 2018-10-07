module.exports = () => async (contract, { owner, spender }) => {
  var remaining = await contract.methods.allowance(owner, spender).call()
  return { remaining }
}
