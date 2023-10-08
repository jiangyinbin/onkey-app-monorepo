import { safeStorage } from 'electron';
import Store from 'electron-store';

const store = new Store();

export type LocalStore = {
  getUpdateSettings(): UpdateSettings;
  setUpdateSettings(updateSettings: UpdateSettings): void;
  clearUpdateSettings(): void;
};

export type UpdateSettings = {
  useTestFeedUrl: boolean;
};

const EncryptedData = 'EncryptedData';

export const getUpdateSettings = (): UpdateSettings =>
  store.get('updateSettings', { useTestFeedUrl: false }) as UpdateSettings;

export const setUpdateSettings = (updateSettings: UpdateSettings): void => {
  store.set('updateSettings', updateSettings);
};

export const clearUpdateSettings = () => {
  store.delete('updateSettings');
};

export const getSecureItem = (key: string) => {
  const item = store.get(EncryptedData, {}) as Record<string, string>;
  const value = item[key];
  if (value) {
    const result = safeStorage.decryptString(Buffer.from(value, 'hex'));
    return result;
  }
};

export const setSecureItem = (key: string, value: string): void => {
  const items = store.get(EncryptedData, {}) as Record<string, string>;
  items[key] = safeStorage.encryptString(value).toString('hex');
  store.set(EncryptedData, items);
};

export const clearSecureItem = (key: string) => {
  const items = store.get(EncryptedData, {}) as Record<string, string>;
  delete items[key];
  store.set(EncryptedData, items);
};
