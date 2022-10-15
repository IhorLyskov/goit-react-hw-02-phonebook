import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const load = key => {
  try {
    let serializedState = localStorage.getItem(key);
    return (serializedState = JSON.parse(serializedState) || undefined);
  } catch (error) {
    Notify.failure(`Load local-storage error: ${error.message}`);
  }
};

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    Notify.failure(`Save local-storage error: ${error.message}`);
  }
};

export const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    Notify.failure(`Remove local-storage error: ${error.message}`);
  }
};
