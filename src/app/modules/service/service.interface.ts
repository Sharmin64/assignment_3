import { Document } from "mongoose";

// export type TService = {
//   name: string;
//   description: string;
//   price: number;
//   duration: number;
//   isDeleted: boolean;
// };

export interface IService extends Document {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}

export type PartialService = Partial<IService>;
