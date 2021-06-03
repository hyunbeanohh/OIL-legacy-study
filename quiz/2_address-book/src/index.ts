//import { PhoneNumberDictionary } from './interface';
import { Contact, PhoneType } from './interface';

// api
/*
  fuction fetchItems(): Promise<string[]>{
    let item: string[] = ['a','b','c']
    retrun new Promise(function(resolve){
      resolve(items);
    })
  }
*/

// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // Promise는 제네릭 타입으로 리턴을 받는다.
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    // 반환값이 없음.
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  //home, office, studio

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}
let div = document.querySelector('div') as HTMLDivElement;
if (div) {
  div.innerText;
}
// let human = [
//   { name: 'hb', age: 27 },
//   { name: 'sh', age: 27 },
// ];
// human.map(function (item) {
//   return item.name;
// });
// ['hb','sh']

new AddressBook();
