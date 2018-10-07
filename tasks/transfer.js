module.exports = () => async (contract, { to, value }) => {
  return contract.methods.transfer(to, value).encodeABI()
}
