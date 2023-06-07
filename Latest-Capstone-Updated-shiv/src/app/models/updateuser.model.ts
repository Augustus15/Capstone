import { Address } from "./address.model"
export class UpdateUser {
  email: string = '';
  mobileNumber: string = '';
  address: {
    line1: string;
    city: string;
    state: string;
    pincode: string;
  } = {
    line1: '',
    city: '',
    state: '',
    pincode: '',
  };
}
