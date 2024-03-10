import { Component } from '@angular/core';
import { ApiService, ResponseData } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-sample';
  public responses: Array<ResponseData> | undefined;
  public visible: boolean = false;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    //this.fetchData();
  }
  fetchData() : void {
    this.visible = true;
    this.apiService.fetch().subscribe(
      (data: Array<ResponseData>) => {
         console.log(data);
         this.responses= data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
