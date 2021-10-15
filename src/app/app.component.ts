import { Component, OnInit } from '@angular/core';
import { IGatewayDto } from './models/dto/interfaces';
import { StatusEnum } from './models/enums/statusEnum';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  gatewaysList: IGatewayDto[];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getGateways().subscribe((data) => {
      this.gatewaysList = data;
    });
  }
}
