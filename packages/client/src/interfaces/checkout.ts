export interface IAddressProps {
  name: string;
  email: string;
  zip_code: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
}

export interface ICreditCardProps {
  card_number: string;
  name: string;
  cvv: string;
  cpf: string;
  expiry: string;
}
