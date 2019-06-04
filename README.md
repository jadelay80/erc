<p align="center">
  <img src="https://cdn.rawgit.com/mesg-foundation/service-ethereum-erc20/484d040a/logo.svg" alt="MESG Service Ethereum ERC20" height="120">
  <br/><br/>
</p>

[Website](https://mesg.com/) - [Docs](https://docs.mesg.com/) - [Forum](https://forum.mesg.com) - [Blog](https://medium.com/mesg)

MESG Service to interact with any Ethereum ERC20 token using [Infura's](https://infura.io/).

This is a generic service to interact with any [ERC20 compliant](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) token using [MESG Engine](https://github.com/mesg-foundation/core).

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [Approval](#approval)
    - [Transfer](#transfer)
  - [Tasks](#Tasks)
    - [Allowance](#allowance)
    - [Approve](#approve)
    - [Balance of](#balance-of)
    - [Number of decimals](#number-of-decimals)
    - [Token's name](#tokens-name)
    - [Token's symbol](#tokens-symbol)
    - [Total Supply](#total-supply)
    - [Transfer](#transfer)
    - [Transfer From](#transfer-from)


# Installation

## MESG Engine

This service requires [MESG Engine](https://github.com/mesg-foundation/core) to be install.

You can install MESG Engine by running the following command or [follow the install guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Purchase the service

To deploy this service, you first need to purchase one of its offer from the [MESG Marketplace](https://marketplace.mesg.com). 

To do so, go on the service's page on the MESG Marketplace and check the offer tab:
https://marketplace.mesg.com/services/ethereum-erc20

## Deploy the service

This service requires some configuration in order to work properly. Copy the deploy command from the marketplace place and add to it the following configurations.

### Infura

This service can use Infura as an Ethereum Provider, but it requires application to first register. Go to https://infura.io/register to get a `PROJECT_ID` and don't forget to replace it in the following `PROVIDER_ENDPOINT` configs.

### Mainnet

To use the mainnet, add to the deploy command the following config:
```
--env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/PROJECT_ID
```

The full command should look like:
```
mesg-core service deploy mesg://marketplace/service/VERSION_HASH --env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/PROJECT_ID
```

### Rinkeby (POA)

To use the rinkeby testnet, add to the deploy command the following config:

```
--env PROVIDER_ENDPOINT=https://rinkeby.infura.io/v3/PROJECT_ID --env BLOCK_CONFIRMATIONS=0
```

The full command should look like:
```
mesg-core service deploy mesg://marketplace/service/VERSION_HASH --env PROVIDER_ENDPOINT=https://rinkeby.infura.io/v3/PROJECT_ID --env BLOCK_CONFIRMATIONS=0
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

# Definitions

# Events

## Approval

Event key: `approval`

The approval event of a ERC20. This event happens when an approval occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Block number** | `blockNumber` | `Number` | Block number the associated transaction |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Owner** | `owner` | `String` | Address of the owner |
| **Spender** | `spender` | `String` | Address of the spender |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
| **Value** | `value` | `String` | Value of the approval in token unit |

## Transfer

Event key: `transfer`

The transfer event of a ERC20. This event happens when a transfer occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Block number** | `blockNumber` | `Number` | Block number the associated transaction |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **From** | `from` | `String` | Address of the spender |
| **To** | `to` | `String` | Address of the receiver |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |
| **Value** | `value` | `String` | Value of the approval in token unit |

# Tasks

## Allowance

Task key: `allowance`

Get the allowance between an owner and a spender

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Owner** | `owner` | `String` | The address to get the owner |
| **Spender** | `spender` | `String` | The address to get the spender |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Remaining** | `remaining` | `String` | The remaining balance of the allowance in token unit |


## Approve

Task key: `approve`

Authorize a future transfer from

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |
| **Spender** | `spender` | `String` | The address to authorize to transfer to |
| **Value** | `value` | `String` | The number of token to authorize to transfer in token unit |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |


## Balance of

Task key: `balanceOf`

Get the balance of a given address

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Address** | `address` | `String` | The address to get the balance from |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Balance** | `balance` | `String` | The balance of the inputted address in token unit |


## Number of decimals

Task key: `decimals`

Get the number of decimals of a ERC20

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Number of decimals** | `decimals` | `Number` | The number of decimals of the ERC20 |


## Token's name

Task key: `name`

Get the name of a ERC20

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Token's name** | `name` | `String` | The name of the ERC20 |


## Token's symbol

Task key: `symbol`

Get the symbol of a ERC20

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Token's symbol** | `symbol` | `String` | The symbol of the ERC20 |


## Total Supply

Task key: `totalSupply`

Get the total supply of a ERC20

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Total supply** | `totalSupply` | `String` | The total supply of the ERC20 in token unit |


## Transfer

Task key: `transfer`

Transfer tokens to an address

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |
| **To** | `to` | `String` | The address to transfer the token to |
| **Value** | `value` | `String` | The number of tokens to transfer in token unit |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |


## Transfer From

Task key: `transferFrom`

Transfer tokens from an approved address

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Contract address** | `contractAddress` | `String` | The address of the contract |
| **From** | `from` | `String` | The address to get the tokens from |
| **Gas Limit** | `gasLimit` | `Number` | **`optional`** The maximum gas provided for this transaction |
| **Gas Price** | `gasPrice` | `String` | **`optional`** The gas price in wei to use for this transaction |
| **Signer private key** | `privateKey` | `String` | The private key to sign the transaction |
| **To** | `to` | `String` | The address to transfer the tokens to |
| **Value** | `value` | `String` | The number of token to transfer in token unit |

### Outputs

#### Error

Output key: `error`

Output when an error occurs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | The error message |

#### Success

Output key: `success`

Output when the task executes successfully

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Transaction hash** | `transactionHash` | `String` | Hash of the transaction |


