# Ethereum ERC20 token

MESG Service to interact with any Ethereum ERC20 token using [Infura's](https://infura.io/).

This is a generic service to interact with any [ERC20 compliant](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) token using [MESG Core](https://github.com/mesg-foundation/core).

# Contents

- [Installation](#Installation)
  - [MESG SDK](#MESG-SDK)
  - [Deploy the Service](#Service)
  - [Infura](#infura)
  - [Rinkeby](#rinkeby)
  - [Specify an ERC20](#specify-an-erc20)
  - [Custom](#custom)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [Approval](#approval)
    - [Transfer](#transfer)
  - [Tasks](#Tasks)
    - [Token&#x27;s name](#name)
    - [Token&#x27;s symbol](#symbol)
    - [Number of decimals](#decimals)
    - [Total Supply](#totalSupply)
    - [Balance of](#balanceOf)
    - [Allowance](#allowance)
    - [Transfer](#transfer)
    - [Approve](#approve)
    - [Transfer From](#transferFrom)


# Installation

### MESG SDK

This service requires [MESG SDK](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG SDK by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm install -g @mesg/cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/ethereum-erc20) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

### Infura

This service can use Infura as an Ethereum Provider, but it requires application to first register. Go to https://infura.io/register to get a `PROJECT_ID` and don't forget to replace it in the following `PROVIDER_ENDPOINT` configs.

### Mainnet

To use the mainnet, add to the deploy command the following config:
```
--env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/PROJECT_ID
```

The full command should look like:
```
mesg-cli service:deploy mesg://marketplace/service/VERSION_HASH --env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/PROJECT_ID
```

### Rinkeby

To use the rinkeby testnet, add to the deploy command the following config:

```
--env PROVIDER_ENDPOINT=https://rinkeby.infura.io/v3/PROJECT_ID --env BLOCK_CONFIRMATIONS=0
```

The full command should look like:
```
mesg-cli service:deploy mesg://marketplace/service/VERSION_HASH --env PROVIDER_ENDPOINT=https://rinkeby.infura.io/v3/PROJECT_ID --env BLOCK_CONFIRMATIONS=0
```

On this testnet, the number of confirmation is set to 0 because of the Proof Of Authority consensus used by this network.

### Specify an ERC20

By default this service emits event from any ERC20. To specify one, set the `CONTRACT_ADDRESS` env variable to the address of the ERC20 to only listen to.

By example, to listen to only the MESG Token, add to the deploy command:
```
--env CONTRACT_ADDRESS=0x420167D87d35c3A249b32Ef6225872fBD9aB85D2
```

### Custom

You can set any provider, block confirmations and default gas limit to match your specific need. Here is a example with those 3 configs:

```
--env PROVIDER_ENDPOINT=AN_ETHEREUM_NODE --env BLOCK_CONFIRMATIONS=1 --env DEFAULT_GAS_LIMIT=1000000 --env CONTRACT_ADDRESS=0x420167D87d35c3A249b32Ef6225872fBD9aB85D2
```

## Definitions

### Events

<h4 id="approval">Approval</h4>

Event key: `approval`

The approval event of a ERC20. This event happens when an approval occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Block number** | `blockNumber` | `Number` | Block number the associated transaction |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
| **Owner** | `owner` | `String` | Address of the owner |
| **Spender** | `spender` | `String` | Address of the spender |
| **Value** | `value` | `String` | Value of the approval in token unit |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
<h4 id="transfer">Transfer</h4>

Event key: `transfer`

The transfer event of a ERC20. This event happens when a transfer occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Block number** | `blockNumber` | `Number` | Block number the associated transaction |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
| **From** | `from` | `String` | Address of the spender |
| **To** | `to` | `String` | Address of the receiver |
| **Value** | `value` | `String` | Value of the approval in token unit |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Tasks

<h4 id="name">Token&#x27;s name</h4>

Task key: `name`

Get the name of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Token&#x27;s name** | `name` | `String` | The name of the ERC20 |
<h4 id="symbol">Token&#x27;s symbol</h4>

Task key: `symbol`

Get the symbol of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Token&#x27;s symbol** | `symbol` | `String` | The symbol of the ERC20 |
<h4 id="decimals">Number of decimals</h4>

Task key: `decimals`

Get the number of decimals of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Number of decimals** | `decimals` | `Number` | The number of decimals of the ERC20 |
<h4 id="totalSupply">Total Supply</h4>

Task key: `totalSupply`

Get the total supply of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Total supply** | `totalSupply` | `String` | The total supply of the ERC20 in token unit |
<h4 id="balanceOf">Balance of</h4>

Task key: `balanceOf`

Get the balance of a given address

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Address** | `address` | `String` | The address to get the balance from |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Balance** | `balance` | `String` | The balance of the inputted address in token unit |
<h4 id="allowance">Allowance</h4>

Task key: `allowance`

Get the allowance between an owner and a spender

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Owner** | `owner` | `String` | The address to get the owner |
| **Spender** | `spender` | `String` | The address to get the spender |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Remaining** | `remaining` | `String` | The remaining balance of the allowance in token unit |
<h4 id="transfer">Transfer</h4>

Task key: `transfer`

Transfer tokens to an address

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **To** | `to` | `String` | The address to transfer the token to |
| **Value** | `value` | `String` | The number of tokens to transfer in token unit |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
<h4 id="approve">Approve</h4>

Task key: `approve`

Authorize a future transfer from

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Spender** | `spender` | `String` | The address to authorize to transfer to |
| **Value** | `value` | `String` | The number of token to authorize to transfer in token unit |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
<h4 id="transferFrom">Transfer From</h4>

Task key: `transferFrom`

Transfer tokens from an approved address

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **From** | `from` | `String` | The address to get the tokens from |
| **To** | `to` | `String` | The address to transfer the tokens to |
| **Value** | `value` | `String` | The number of token to transfer in token unit |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |

