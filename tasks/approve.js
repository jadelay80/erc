module.exports = () => async (contract, { spender, value }) => contract.methods.approve(spender, value).encodeABI()
