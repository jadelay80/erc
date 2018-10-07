module.exports = () => async (contract, { owner, spender }) => {
  var remaining = await contract.methods.allowance(owner, spender).call()
  console.log('remaining allowance between', owner, 'and', spender, 'is', remaining)
  return { remaining }
}
