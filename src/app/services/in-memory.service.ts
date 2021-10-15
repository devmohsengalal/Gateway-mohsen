import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IGatewayDto } from '../models/dto/interfaces';
import { StatusEnum } from '../models/enums/statusEnum';
export class InMemoryService implements InMemoryDbService {
  createDb(){
    const gatewaysList:IGatewayDto[]=[
      {
        serialNumber: 'SN_456478',
        name: 'main',
        IPv4: '192.9.201.6',
        devices: [
          {
            UID: 4564579,
            createdDate: new Date('2021-10-13T03:24:00'),
            vendor: 'PC-1564',
            status: StatusEnum.online,
          },
          {
            UID: 764665,
            createdDate: new Date('2021-10-13T05:16:15'),
            vendor: 'PC-4578',
            status: StatusEnum.offline,
          },
          {
            UID: 554778,
            createdDate: new Date('2021-10-12T05:16:15'),
            vendor: 'PC-776',
            status: StatusEnum.online,
          }
        ],
      },
      {
        serialNumber: 'SN_66488',
        name: 'office',
        IPv4: '1.33.60.6',
        devices: [
          {
            UID: 32422,
            createdDate: new Date('2021-10-11T03:24:00'),
            vendor: 'PC-1312',
            status: StatusEnum.online,
          },
          {
            UID: 487744,
            createdDate: new Date('2021-10-12T05:16:15'),
            vendor: 'PC-658',
            status: StatusEnum.offline,
          },
          {
            UID: 23977,
            createdDate: new Date('2021-10-13T05:16:15'),
            vendor: 'PC-6658',
            status: StatusEnum.online,
          }
        ],
      },
      {
        serialNumber: 'SN_456478',
        name: 'workspace',
        IPv4: '192.168.1.2',
        devices: [
          {
            UID: 99878,
            createdDate: new Date('2021-10-4T03:24:00'),
            vendor: 'PC-8879',
            status: StatusEnum.online,
          },
          {
            UID: 11577,
            createdDate: new Date('2021-10-5T05:16:15'),
            vendor: 'PC-5997',
            status: StatusEnum.offline,
          },
          {
            UID: 998777,
            createdDate: new Date('2021-10-10T05:16:15'),
            vendor: 'PC-6687',
            status: StatusEnum.online,
          }
        ],
      },
      {
        serialNumber: 'SN_69987',
        name: 'main',
        IPv4: '192.168.68.70',
        devices: [
          {
            UID: 89789,
            createdDate: new Date('2021-10-11T03:24:00'),
            vendor: 'PC-9887',
            status: StatusEnum.online,
          },
          {
            UID: 7889445,
            createdDate: new Date('2021-10-8T05:16:15'),
            vendor: 'PC-88794',
            status: StatusEnum.offline,
          },
          {
            UID: 5467891,
            createdDate: new Date('2021-9-4T05:16:15'),
            vendor: 'PC-4587',
            status: StatusEnum.online,
          }
        ],
      },
    ]
    return {gatewaysList};
  }
}
