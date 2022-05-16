import {IServiceType} from "./IServiceType";
export interface IFacility {
  id: number;
  serviceName: string;
  title: string;
  serviceType: IServiceType;
  price: number;
  area: number;
  image: string;
}
