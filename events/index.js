module.exports = ({
  MESG,
  web3,
  blockConfirmations,
  erc20ABI,
  contractAddress
}) => eventsToHandle => {
  const eventConfigs = eventsToHandle
    .map(eventToHandle => {
      const abi = erc20ABI.filter(abi => abi.type === 'event' && abi.name === eventToHandle.ethereumName)[0]
      const topic = web3.eth.abi.encodeEventSignature(abi)
      return {
        ...eventToHandle,
        abi,
        topic
      }
    })
    .reduce((eventConfigs, eventToHandle) => ({
      ...eventConfigs,
      [eventToHandle.topic]: eventToHandle
    }), {})

  const defaultPayload = async (log, event, data) => ({
    blockNumber: log.blockNumber,
    transactionHash: log.transactionHash,
    contractAddress: log.address,
    value: event.value,
    ...data
  })

  const fetchEvents = async (previousBN, lastBN) => {
    const logs = await web3.eth.getPastLogs({
      fromBlock: web3.utils.toHex(previousBN + 1),
      toBlock: web3.utils.toHex(lastBN),
      topics: [Object.keys(eventConfigs)],
      address: contractAddress || undefined
    })
    for (const log of logs) {
      const { topics, data, transactionHash } = log
      try {
        const topic = topics[0]
        const { abi, parseEvent, eventKey } = eventConfigs[topic]
        if (abi.anonymous === false) {
          // Remove first element because event is non-anonymous
          // https://web3js.readthedocs.io/en/1.0/web3-eth-abi.html#decodelog
          topics.splice(0, 1)
        }
        const event = web3.eth.abi.decodeLog(abi.inputs, data, topics)
        await MESG.emitEvent(eventKey, await defaultPayload(log, event, parseEvent(event)))
      } catch (err) {
        console.error('error with transaction', transactionHash, err.toString())
      }
    }
  }

  var previousBN
  const pollingBlockNumber = async () => {
    try {
      const lastBN = await web3.eth.getBlockNumber()
      const shiftedBN = lastBN - blockConfirmations
      if (previousBN === undefined) {
        previousBN = shiftedBN - 1
      }
      if (shiftedBN > previousBN) {
        console.log('new block', shiftedBN)
        await fetchEvents(previousBN, shiftedBN)
        previousBN = shiftedBN
      }
    } catch (error) {
      console.log(error)
    }
    return setTimeout(pollingBlockNumber, 1000)
  }
  return pollingBlockNumber()
}
