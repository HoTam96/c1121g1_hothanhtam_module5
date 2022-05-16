import {ICustomerType} from "./ICustomerType";

export interface ICustomer {
  id?: number;
  customerCode?: string;
  name?: string;
  dateOfBirth?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  customerType?: ICustomerType;
}
