# Ethereum ERC20 token (ID: ethereum-erc20)

MESG Service to interact with any Ethereum ERC20 token using [Infura&#x27;s](https://infura.io/).

## Contents

- [Definitions](#Definitions)
- [Environment Variables](#Environment Variables)
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

## Definitions

### Environment Variables
- PROVIDER_ENDPOINT&#x3D;__ENV_PROVIDER_ENDPOINT_NEEDS_TO_BE_REPLACED__
- BLOCK_CONFIRMATIONS&#x3D;4
- DEFAULT_GAS_LIMIT&#x3D;1000000
- CONTRACT_ADDRESS&#x3D;

### Events

#### approval

Event key: `approval`

The approval event of a ERC20. This event happens when an approval occurs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **blockNumber** | `blockNumber` | `Number` | Block number the associated transaction |  |
| **transactionHash** | `transactionHash` | `String` | Hash of the transaction |  |
| **owner** | `owner` | `String` | Address of the owner |  |
| **spender** | `spender` | `String` | Address of the spender |  |
| **value** | `value` | `String` | Value of the approval in token unit |  |
| **contractAddress** | `contractAddress` | `String` | The address of the contract |  |
#### transfer

Event key: `transfer`

The transfer event of a ERC20. This event happens when a transfer occurs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **blockNumber** | `blockNumber` | `Number` | Block number the associated transaction |  |
| **transactionHash** | `transactionHash` | `String` | Hash of the transaction |  |
| **from** | `from` | `String` | Address of the spender |  |
| **to** | `to` | `String` | Address of the receiver |  |
| **value** | `value` | `String` | Value of the approval in token unit |  |
| **contractAddress** | `contractAddress` | `String` | The address of the contract |  |

### Tasks

#### name

Task key: `name`

Get the name of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Token&#x27;s name** | `name` | `String` | The name of the ERC20 |  |
#### symbol

Task key: `symbol`

Get the symbol of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Token&#x27;s symbol** | `symbol` | `String` | The symbol of the ERC20 |  |
#### decimals

Task key: `decimals`

Get the number of decimals of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Number of decimals** | `decimals` | `Number` | The number of decimals of the ERC20 |  |
#### totalSupply

Task key: `totalSupply`

Get the total supply of a ERC20

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Total supply** | `totalSupply` | `String` | The total supply of the ERC20 in token unit |  |
#### balanceOf

Task key: `balanceOf`

Get the balance of a given address

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Address** | `address` | `String` | The address to get the balance from |  |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Balance** | `balance` | `String` | The balance of the inputted address in token unit |  |
#### allowance

Task key: `allowance`

Get the allowance between an owner and a spender

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Owner** | `owner` | `String` | The address to get the owner |  |
| **Spender** | `spender` | `String` | The address to get the spender |  |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Remaining** | `remaining` | `String` | The remaining balance of the allowance in token unit |  |
#### transfer

Task key: `transfer`

Transfer tokens to an address

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **To** | `to` | `String` | The address to transfer the token to |  |
| **Value** | `value` | `String` | The number of tokens to transfer in token unit |  |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |  |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |  |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |  |
#### approve

Task key: `approve`

Authorize a future transfer from

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Spender** | `spender` | `String` | The address to authorize to transfer to |  |
| **Value** | `value` | `String` | The number of token to authorize to transfer in token unit |  |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |  |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |  |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |  |
#### transferFrom

Task key: `transferFrom`

Transfer tokens from an approved address

##### Inputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **From** | `from` | `String` | The address to get the tokens from |  |
| **To** | `to` | `String` | The address to transfer the tokens to |  |
| **Value** | `value` | `String` | The number of token to transfer in token unit |  |
| **Contract address** | `contractAddress` | `String` | The address of the contract |  |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |  |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |  |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** | **Object** |
| --- | --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |  |
