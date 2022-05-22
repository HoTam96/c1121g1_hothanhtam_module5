import {IBook} from "./IBook";
import {IStudent} from "./IStudent";

export interface IBrowBook {
  id: number;
  browCode: string;
  bookId: IBook;
  studentId: IStudent;
  status: boolean;
  startDate: string;
  endDate: string

}
