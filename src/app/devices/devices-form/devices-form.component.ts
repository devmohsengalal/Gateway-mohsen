import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogData, IDeviceDto } from 'src/app/models/dto/interfaces';
import { CRUDEnum } from 'src/app/models/enums/CRUDEnum';
import { StatusEnum } from 'src/app/models/enums/statusEnum';
import { UniqueValue } from 'src/app/models/validators/formValidator';

@Component({
  selector: 'app-devices-form',
  templateUrl: './devices-form.component.html',
  styleUrls: ['./devices-form.component.scss'],
})
export class DevicesFormComponent implements OnInit {
  formData: IDeviceDto;
  CRUDMode: number = CRUDEnum.Create;
  devicesForm: FormGroup;

  public get CRUDEnum(): typeof CRUDEnum {
    return CRUDEnum;
  }

  constructor(
    public dialogRef: MatDialogRef<DevicesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData<IDeviceDto>
  ) {}

  ngOnInit(): void {
    this.formData = this.data.formData;
    this.CRUDMode = this.data.CRUDMode;
    this.devicesForm = new FormGroup({
      UID: new FormControl(this.formData?.UID, [
        Validators.required,
        UniqueValue(
          this.data.list,
          'UID',
          this.CRUDMode == CRUDEnum.Update ? this.formData : null
        ),
      ]),
      vendor: new FormControl(this.formData?.vendor, Validators.required),
      status: new FormControl(this.formData?.status == StatusEnum.online),
    });
    if (this.CRUDMode == CRUDEnum.Update)
      this.devicesForm.get('UID')?.disable();
  }
  onSubmit() {
    if (this.devicesForm.invalid) return;
    this.dialogRef.close({
      CRUDMode: this.CRUDMode,
      data: this.devicesForm.getRawValue(),
    });
  }
}
