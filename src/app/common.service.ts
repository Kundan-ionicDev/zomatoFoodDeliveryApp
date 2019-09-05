import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'user-key': '8b7564f2f0291b5f2f8d1c99ba18fd5b'
//   })
// };
@Injectable({
  providedIn:'root'
})
export class CommonService {
  loading;
  latitude:any;
  longitude:any;
  httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
    'user-key': '8b7564f2f0291b5f2f8d1c99ba18fd5b'
  });
  options = {
  headers: this.httpHeaders
  }; 
  // public url="https://developers.zomato.com/api/v2.1/search?lat=19.116197&lon=72.871237";
  public url = "https://developers.zomato.com/api/v2.1/";
  public _geocoder:string ="geocode?";
  public _search:string ="search?";
  public _categories:string ="categories";
  public _cuisines:string ="cuisines?"


  constructor(
    private http: HttpClient,
    public loadingController: LoadingController) {
  }

  getData(latitude:any,longitude:any): Observable<any> {
    return this.http.post(this.url +this._geocoder+'lat='+latitude+'&lon='+longitude,null,this.options);
  } 

  getMenu(){
    return this.http.get('assets/DB/import.json',this.options);
  }

  getcategories(): Observable<any> {
    return this.http.post(this.url+ this._categories,null,this.options);
  } 

  getSearchResults(latitude:any,longitude:any,keyword:any){
    return this.http.post(this.url+ this._search+'q='+keyword+'&lat=19.116197&lon=72.871237'+'&sort=real_distance&order=desc',null,this.options);
  }

  getcuisines(latitude:any,longitude:any){
    return this.http.post(this.url+ this._cuisines+'lat='+latitude+'&lon='+longitude,null,this.options);
  }

  async showLoading(msg){
    this.loading = await this.loadingController.create({
      message: msg,
      showBackdrop: true,
      duration: 2000
    });

    await this.loading.present();
  }

  dismissLoading(){
    this.loading.dismiss();
  }

}
