interface Hair {
  color: string
  type: string
}

interface Coordinates {
  lat: number
  lng: number
}

interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates
  country: string
}

interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

interface Company {
  department: string
  name: string
  title: string
  address: Address
}

interface Crypto {
  coin: string
  wallet: string
  network: string
}

interface User {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: string
}

export interface UserResponse extends User {}

export interface UsersResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}

export interface UserRequest {
  id: number
}
