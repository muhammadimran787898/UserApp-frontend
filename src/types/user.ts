// export interface UserFormProps {
//   name: string;
//   email: string;
//   age: string;
//   number: string;
//   gender: string;
//   state: string;
//   city: string;
//   address: string;
//   country: string;
// }

export interface UserFormProps {
  user: {
    name: string;
    email: string;
    age: string;
    number: string;
    gender: string;
    state: string;
    city: string;
    address: string;
    country: string;
  } | null;
}
