interface Product {
    id: string
    name:string
    price:number
    brand:string
    stock:number
    //something: object
}

// 1.상품 목록을 받아오기 위한 API 함수
function fetchProduction(): Promise<Product[]>{
    //...
}

// interface ProductDeatil{
//     id: number;
//     name: string;
//     price:number
// }

// function displayProductDetail(shoppingItem: ProductDeatil){ // 중복되는 코드가 많아진다.
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>){

}

//Pick을 이용하여 원하는 타입들을 불러온다, ex)상세 페이지 보기

//Omit -> 속성을 제거헤서 사용 
interface AddressBook{
    name:string
    phonenumber:number
    address:string
}
const addressbook : Omit<AddressBook, 'name'> = {
    phonenumber : 123123,
    address:'123123'
}

// 3. 특정 상품 정보를 업데이트 하는 함수
interface UpdateProduct {
    id: string
    name:string
    price:number
    brand:string
    stock:number
    //something: object
}

type updateproduct = Partial<Product>
function updateProductItem(productitem: Partial<Product>){ // 모든 속성을 옵셔널 처리 함. 넣어도 되고 안넣어도 되고 .
    //...
}

// 4. 유틸리티 타입 구현하긱 -Partial

interface UserProfile{
    username:string
    email:string
    profilePhotoUrl:string
}
// interface UserProfileUpdate{
//     username?:string
//     email?:string
//     profilePhotoUrl?:string
// }

// 첫번째 방식
type UserProfileUpdate = {
    username? : UserProfile['username']
    email? : UserProfile['email']
    profilePhotoUrl? : UserProfile['profilePhotoUrl']
}


// 두번째 방식
type UserProfileUpdate = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}

// 세번째 방식
//type UserProfileKeys = keyof UserProfile

type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// 네번째 방식
type Subset<T>= {
    [p in keyof T]?: T[p]
}