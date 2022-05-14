import {RentType} from "./rentType";

export interface IServiceVilla {
  serviceName: string;
  serviceCode: string;
  area: number;
  rentalCost: number;
  maxPeople: number;
  rentType: RentType;
  areaPool: number;
  standRoom: string;
  description: string;
  numberFloor: number;

}
