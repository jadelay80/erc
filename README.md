<p align="center">
  <img src="https://cdn.rawgit.com/mesg-foundation/service-ethereum-erc20/484d040a/logo.svg" alt="MESG Service Ethereum ERC20" height="120">
  <br/><br/>
</p>

[Website](https://mesg.com/) - [Docs](https://docs.mesg.com/) - [Chat](https://discordapp.com/invite/SaZ5HcE) - [Blog](https://medium.com/mesg)

MESG Service to interact with any Ethereum ERC20 token using [Infura's](https://infura.io/).

This is a generic service to interact with any [ERC20 compliant](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) token using [MESG Core](https://github.com/mesg-foundation/core).

# Contents

- [Installation](#Installation)
- [Custom install](#Custom-install)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [Approval](#Approval)
    - [Transfer](#Transfer)
  - [Tasks](#Tasks)
    - [Allowance](#Allowance)
    - [Approve](#Approve)
    - [Balance Of](#Balance-Of)
    - [Decimals](#Decimals)
    - [Name](#Name)
    - [Symbol](#Symbol)
    - [Total Supply](#Total-Supply)
    - [Transfer](#Transfer)
    - [Transfer From](#Transfer-From)


# Installation

## Mainnet

To use the mainnet, deploy using the follwing endpoint:

```
mesg-core service deploy https://github.com/mesg-foundation/service-ethereum-erc20
```

## Ropsten (POW)

To use the ropsten testnet, deploy using the follwing endpoint:

```
mesg-core service deploy https://github.com/mesg-foundation/service-ethereum-erc20#ropsten
```

## Rinkeby (POA)

To use the rinkeby testnet, deploy using the follwing endpoint:

```
mesg-core service deploy https://github.com/mesg-foundation/service-ethereum-erc20#rinkeby
```

On this testnet, the number of confirmation is set to 0 because of the Proof Of Authority consensus used by this network.

# Custom install

You need to download this repository to set the config you need.

## Download

```
git clone https://github.com/mesg-foundation/service-ethereum-erc20
```

## Update `config.json`

```js
{
  "blockConfirmations": 4, // Number of block confirmation
  "infuraEndpoint": "https://mainnet.infura.io/",
  "defaultGasLimit": 100000
}
```

## Test it

```
mesg-core service dev
```

## Deploy the service

```
mesg-core service deploy
```

# Definitions

# Events

## Approval

Event key: `approval`

The approval event of a ERC20. This event happens when an approval occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Block number** | `blockNumber` | `Number` | Block number the associated transaction |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
| **Owner** | `owner` | `String` | Address of the owner |
| **Spender** | `spender` | `String` | Address of the spender  |
| **Value** | `value` | `String` | Value of the approval in token unit |

## Transfer

Event key: `transfer`

The transfer event of a ERC20. This event happens when a transfer occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Block number** | `blockNumber` | `Number` | Block number the associated transaction |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
| **From** | `from` | `String` | Address of the spender |
| **To** | `to` | `String` | Address of the receiver  |
| **Value** | `value` | `String` | Value of the transfer in token unit |

# Tasks

## Allowance

Task key: `allowance`

Get the allowance between an owner and a spender.

### Inputs

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Owner** | `owner` | `String` | The address to get the owner |
| **Spender** | `spender` | `String` | The address to get the spender |

### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Remaining** | `remaining` | `String` | The remaining balance of the allowance in token unit |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

## Approve

Task key: `approve`

Authorize a future transfer from.

### Inputs

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`**  The gas price in wei to use for this transaction |
| **Private Key** | `privateKey` | `String` | The private key to sign the transaction |
| **Spender** | `spender` | `String` | The address to authorize to transfer to |
| **Value** | `value` | `String` | The number of token to authorize to transfer in token unit |


### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Transaction Hash** | `transactionHash` | `String` | Hash of the transaction |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error&#39;s message |

## Balance Of

Task key: `balanceOf`

Get the balance of a given address.

### Inputs

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Address** | `address` | `String` | The address to get the balance from |

### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Balance** | `balance` | `String` | The balance of the inputted address in token unit |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error's message |


## Decimals

Task key: `decimals`

Get the number of decimals of a ERC20.

### Inputs

| Name |  Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Decimals** | `decimals` | `Number` | The number of decimals of the ERC20 |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error&#39;s message |


## Name

Task key: `name`

Get the name of a ERC20.

### Inputs

| Name |  Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Name** | `name` | `String` | The name of the ERC20 |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error&#39;s message |


## Symbol

Task key: `symbol`

Get the symbol of a ERC20.

### Inputs

| Name |  Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Symbol** | `symbol` | `String` | The symbol of the ERC20 |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error&#39;s message |


## Total Supply

Task key: `totalSupply`

Get the total supply of a ERC20.

### Inputs

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Total supply** | `totalSupply` | `String` | The total supply of the ERC20 in token unit |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error's message |



## Transfer

Task key: `transfer`

Transfer tokens to an address.

### Inputs

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`**  The gas price in wei to use for this transaction |
| **Private Key** | `privateKey` | `String` | The private key to sign the transaction |
| **To** | `to` | `String` | The address to transfer the token to |
| **Value** | `value` | `String` | The number of tokens to transfer in token unit |


### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Transaction Hash** | `transactionHash` | `String` | Hash of the transaction |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error&#39;s message |


## Transfer From

Task key: `transferFrom`

Transfer tokens from an approved address.

### Inputs

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **From** | `from` | `String` | The address to get the tokens from |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`**  The gas price in wei to use for this transaction |
| **Private Key** | `privateKey` | `String` | The private key to sign the transaction |
| **To** | `to` | `String` | The address to transfer the tokens to |
| **Value** | `value` | `String` | The number of token to transfer in token unit |


### Outputs

#### Success

Output key: `success`

Output when the task executes successfully.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Transaction Hash** | `transactionHash` | `String` | Hash of the transaction |

#### Error

Output key: `error`

Output when an error occurs.

| Name | Key | Type | Description |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error&#39;s message |
