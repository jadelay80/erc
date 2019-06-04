module.exports = ({
  web3,
  erc20ABI
}) => (method) => (inputs) => {
  const contract = new web3.eth.Contract(erc20ABI, inputs.contractAddress)
  return method(contract, inputs)
}
