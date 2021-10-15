import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { InMemoryService } from './services/in-memory.service';
import { GatewaysFormComponent } from './gateways/gateways-form/gateways-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevicesComponent } from './devices/devices.component';
import { DevicesFormComponent } from './devices/devices-form/devices-form.component';

const MATERIAL = [
  MatToolbarModule,
  MatCommonModule,
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatChipsModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [AppComponent, GatewaysComponent, GatewaysFormComponent, DevicesComponent, DevicesFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    HttpClientModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
