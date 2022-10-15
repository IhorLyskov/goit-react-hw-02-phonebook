export const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const storageKey = 'contacts';

export const phonePattern =
  /^(\+\d{2}[-\s]?(\d{3}|\(\d{3}\))|(\d{3}|\(\d{3}\)))?[-\s]?(\d{2}[-\s]?\d{2}[-\s]?\d{3}|\d{3}[-\s]?\d{2}[-\s]?\d{2}|\d{7})$/;

export const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
