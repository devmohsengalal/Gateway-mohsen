import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import {
  displayedColumns,
  IDeviceDto,
  IGatewayDto,
} from '../models/dto/interfaces';
import { CRUDEnum } from '../models/enums/CRUDEnum';
import { StatusEnum } from '../models/enums/statusEnum';
import { DevicesFormComponent } from './devices-form/devices-form.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  // devicesList: IDeviceDto[];
  @ViewChild(MatTable) table: MatTable<IDeviceDto>;
  displayedColumns: displayedColumns[] = [
    { key: 'UID', title: 'UID' },
    { key: 'vendor', title: 'Vendor' },
  ];
  displayedColumnsKeys = [
    ...this.displayedColumns.map((i) => i.key),
    'status',
    'createdDate',
    'edit',
    'delete',
  ];

  public get CRUDEnum(): typeof CRUDEnum {
    return CRUDEnum;
  }
  public get statusEnum(): typeof StatusEnum {
    return StatusEnum;
  }

  constructor(
    private _devicesDialog: MatDialog,
    public dialogRef: MatDialogRef<DevicesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGatewayDto
  ) {}

  ngOnInit(): void {
    this.data.devices =
      this.data.devices && this.data.devices.length ? this.data.devices : [];
  }

  openDeviceDialog(CRUDMode: CRUDEnum, formData: IDeviceDto | null = null) {
    const dialogRef = this._devicesDialog.open(DevicesFormComponent, {
      width: '400px',
      data: { formData, CRUDMode, list: this.data.devices },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.addOrUpdate(result);
    });
  }

  addOrUpdate(result: any) {
    if (!result) return;

    const { CRUDMode } = result,
      { data } = result;
    data.status = data.status ? StatusEnum.online : StatusEnum.offline;
    if (CRUDMode == CRUDEnum.Create) {
      data.createdDate = new Date();
      this.data.devices.push(data);
      // this.devicesList.push(data);
      this.table.renderRows();
    } else {
      let currentIndex = this.data.devices.findIndex(
        (item) => item.UID == data.UID
      );
      this.data.devices[currentIndex].status = data.status;
      this.data.devices[currentIndex].vendor = data.vendor;
    }
  }
  removeItem(item: IDeviceDto) {
    const itemIndex = this.data.devices.findIndex((i) => i.UID == item.UID);
    if (itemIndex>=0) {
      this.data.devices.splice(itemIndex, 1);
      this.table.renderRows();
    }
  }
}
