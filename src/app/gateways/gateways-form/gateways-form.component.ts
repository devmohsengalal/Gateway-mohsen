import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGatewayDto,dialogData } from 'src/app/models/dto/interfaces';
import { CRUDEnum } from 'src/app/models/enums/CRUDEnum';
import {
  IPv4Format,
  UniqueValue,
} from 'src/app/models/validators/formValidator';



@Component({
  selector: 'app-gateways-form',
  templateUrl: './gateways-form.component.html',
  styleUrls: ['./gateways-form.component.scss'],
})
export class GatewaysFormComponent implements OnInit {
  formData: IGatewayDto;
  CRUDMode: number = CRUDEnum.Create;
  gatewayForm: FormGroup;

  public get CRUDEnum(): typeof CRUDEnum {
    return CRUDEnum;
  }

  constructor(
    public dialogRef: MatDialogRef<GatewaysFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData<IGatewayDto>
  ) {}

  ngOnInit(): void {
    this.formData = this.data.formData;
    this.CRUDMode = this.data.CRUDMode;
    this.gatewayForm = new FormGroup({
      serialNumber: new FormControl(this.formData?.serialNumber, [
        Validators.required,
        UniqueValue(
          this.data.list,
          'serialNumber',
          this.CRUDMode == CRUDEnum.Update ? this.formData : null
        ),
      ]),
      name: new FormControl(this.formData?.name, Validators.required),
      IPv4: new FormControl(this.formData?.IPv4, [
        Validators.required,
        IPv4Format(),
      ]),
    });
    if(this.CRUDMode == CRUDEnum.Update)
    this.gatewayForm.get('serialNumber')?.disable()
  }
  onSubmit() {
    if (this.gatewayForm.invalid) return;
    this.dialogRef.close({
      CRUDMode: this.CRUDMode,
      data: this.gatewayForm.getRawValue(),
    });
  }
}
