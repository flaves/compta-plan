interface AddressType {
  [key: number]: string | {};
  id: string;
  name: string;
  position: {
    lat: number;
    lon: number;
  };
  street: string;
  zip: string;
  city: string;
  phone: string;
}

export default AddressType;
