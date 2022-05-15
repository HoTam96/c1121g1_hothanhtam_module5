import {ICategory} from "./ICategory";

export interface Iproduct {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  category?: ICategory;
}
