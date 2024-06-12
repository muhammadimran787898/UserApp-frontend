export interface UserFormProps {
  name: string;
  email: string;
  age: string;
  number: string;
  gender: string;
  state: string;
  city: string;
  address: string;
  country: string;
  user?: {
    name: string;
    email: string;
    age: string;
    mobile: string;
    gender: string;
    state: string;
    city: string;
    address: string;
    country: string;
    _id: string;
  };
}
