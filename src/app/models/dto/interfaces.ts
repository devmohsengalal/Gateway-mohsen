import { CRUDEnum } from "../enums/CRUDEnum";

export interface IGatewayDto {
  serialNumber: string;
  name: string;
  IPv4: string;
  devices: IDeviceDto[];
}

export interface IDeviceDto {
  UID: number;
  vendor: string;
  createdDate: Date;
  status: number;
}

export interface displayedColumns {
  title: string;
  key: string;
}
export interface dialogData<T> {
  formData: T;
  CRUDMode: CRUDEnum;
  list: T[];
}
