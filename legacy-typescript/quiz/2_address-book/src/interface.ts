export interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// export { Contact, PhoneType }; 여러개를 export할때는 이렇게 하는것이 관례.
