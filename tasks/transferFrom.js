module.exports = () => async (contract, { from, to, value }) => contract.methods.transferFrom(from, to, value).encodeABI()
