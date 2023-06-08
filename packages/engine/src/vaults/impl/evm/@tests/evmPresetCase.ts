import { wait } from '@onekeyhq/kit/src/utils/helper';
import { IMPL_EVM } from '@onekeyhq/shared/src/engine/engineConsts';

import { prepareMockVault } from '../../../../../@tests/prepareMockVault';
import { getAccountNameInfoByImpl } from '../../../../managers/impl';
import Vault from '../Vault';
import VaultHelper from '../VaultHelper';

import type { IPrepareMockVaultOptions } from '../../../../../@tests/types';
import type { DBAccount } from '../../../../types/account';
import type { KeyringBase } from '../../../keyring/KeyringBase';
import type { KeyringSoftwareBase } from '../../../keyring/KeyringSoftwareBase';
import type { IPrepareAccountsParams } from '../../../types';
import type { VaultBase } from '../../../VaultBase';

const evmAccountNameInfo = getAccountNameInfoByImpl(IMPL_EVM);
const PREPARE_ACCOUNTS_PARAMS = {
  indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  coinType: evmAccountNameInfo.default.coinType,
  template: evmAccountNameInfo.default.template,
  accounts: [] as DBAccount[],
};

export async function testPrepareAccounts(
  prepareOptions: IPrepareMockVaultOptions,
  builder: {
    keyring: (payload: { vault: VaultBase }) => KeyringBase;
  },
  prepareAccountsParams?: typeof PREPARE_ACCOUNTS_PARAMS,
) {
  const { options, dbAccount } = prepareMockVault(prepareOptions);
  const vault = new Vault(options);
  vault.helper = new VaultHelper(options);
  const keyring = builder.keyring({ vault });
  const accountsParams = {
    ...PREPARE_ACCOUNTS_PARAMS,
    ...prepareAccountsParams,
  };
  const accounts = await keyring.prepareAccounts({
    ...accountsParams,
    name: dbAccount.name,
    target: dbAccount.address,
    accountIdPrefix: 'external',
    password: prepareOptions.password,
    privateKey: prepareOptions?.privateKey
      ? Buffer.from(prepareOptions.privateKey, 'hex')
      : undefined,
  } as IPrepareAccountsParams);
  if (accountsParams?.accounts?.length) {
    expect(accounts).toEqual(accountsParams?.accounts);
  } else {
    expect(accounts[0]).toEqual(dbAccount);
  }
}

// export async function testSignTransaction(
//   prepareOptions: IPrepareMockVaultOptions,
//   builder: {
//     keyring: (payload: { vault: VaultBase }) => KeyringSoftwareBase;
//   },
// ) {
//   // expect.assertions(2);

//   const { options, dbAccount, password } = prepareMockVault(prepareOptions);

//   expect(password).toBeTruthy();

//   const vault = new Vault(options);
//   vault.helper = new VaultHelper(options);

//   const keyring = builder.keyring({ vault });

//   const encodedTx = await vault.buildEncodedTxFromTransfer({
//     from: dbAccount.address,
//     to: dbAccount.address,
//     amount: '0.0001',
//   });
//   const unsignedTx = await vault.buildUnsignedTxFromEncodedTx(encodedTx);
//   // engine/src/proxy.ts  sign
//   // TODO return signer from keyring.signTransaction
//   const signedTx = await keyring.signTransaction(unsignedTx, {
//     password,
//   });
//   console.log(signedTx);
//   const nativeTx = deserializeSignedTransaction(signedTx.rawTx);

//   const signers = await keyring.getSigners(password || '', [dbAccount.address]);
//   const signer = signers[dbAccount.address];
//   const isVerified = await signer.verifySignature({
//     digest: `${signedTx.digest || ''}`,
//     publicKey: `${dbAccount.address || ''}`,
//     signature: nativeTx.signature.data,
//   });

//   expect(isVerified).toBeTruthy();
//   await wait(1000);
// }

// const evmAccountNameInfo = getAccountNameInfoByImpl(IMPL_NEAR);
// const prepareAccountsParams = {
//   indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   coinType: evmAccountNameInfo.default.coinType,
//   template: evmAccountNameInfo.default.template,
// };
export type EVMPresetCaseType = {
  testPrepareAccounts: typeof testPrepareAccounts;
  // testSignTransaction: typeof testSignTransaction;
};
