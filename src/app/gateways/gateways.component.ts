import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DevicesComponent } from '../devices/devices.component';
import { displayedColumns, IGatewayDto } from '../models/dto/interfaces';
import { CRUDEnum } from '../models/enums/CRUDEnum';
import { GatewaysFormComponent } from './gateways-form/gateways-form.component';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss'],
})
export class GatewaysComponent implements OnInit {
  @Input('data') gatewaysList: IGatewayDto[];
  @ViewChild(MatTable) table: MatTable<IGatewayDto>;
  displayedColumns: displayedColumns[] = [
    { key: 'serialNumber', title: 'Serial Number' },
    { key: 'name', title: 'name' },
    { key: 'IPv4', title: 'IPv4' },
  ];
  displayedColumnsKeys = [
    ...this.displayedColumns.map((i) => i.key),
    'view',
    'edit',
    'delete',
  ];

  public get CRUDEnum(): typeof CRUDEnum {
    return CRUDEnum;
  }

  constructor(private _gatewayDialog: MatDialog) {}

  ngOnInit(): void {}

  openGatewayDialog(CRUDMode: CRUDEnum, formData: IGatewayDto | null = null) {
    const dialogRef = this._gatewayDialog.open(GatewaysFormComponent, {
      width: '400px',
      data: { formData, CRUDMode, list: this.gatewaysList },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.addOrUpdate(result);
    });
  }
  openDevicesListDialog(formData: IGatewayDto) {
    const dialogRef = this._gatewayDialog.open(DevicesComponent, {
      width: '800px',
      data: formData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  addOrUpdate(result: any) {
    if (!result) return;

    const { CRUDMode } = result,
      { data } = result;
    if (CRUDMode == CRUDEnum.Create) {
      this.gatewaysList.push(data);
      this.table.renderRows();
    } else {
      let currentIndex = this.gatewaysList.findIndex(
        (item) => item.serialNumber == data.serialNumber
      );
      this.gatewaysList[currentIndex].name = data.name;
      this.gatewaysList[currentIndex].IPv4 = data.IPv4;
    }
  }
  removeItem(item: IGatewayDto) {
    const itemIndex = this.gatewaysList.findIndex(
      (i) => i.serialNumber == item.serialNumber
    );
    if (itemIndex) {
      this.gatewaysList.splice(itemIndex, 1);
      this.table.renderRows()
    }
  }
}
