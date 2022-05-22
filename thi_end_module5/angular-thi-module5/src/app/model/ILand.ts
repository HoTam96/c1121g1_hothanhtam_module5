import {IDirection} from "./IDirection";
import {IRegion} from "./IRegion";
import {ICategory} from "./ICategory";
import {IPostUp} from "./IPostUp";

export interface ILand {
  id : number;
  conditional : string;
  address :string
  identification :string
  area :string
  title :string
  content :string
  price :string
  photo :string
  startDate :string
  status :string
  direction : IDirection;
  regions :IRegion;
  categoryLand : ICategory;
  postUp : IPostUp;
}
