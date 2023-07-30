import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LEFT_PANEL_URL, RIGHT_PANEL_URL } from '../components/Urls/urls';
import { Observable } from 'rxjs';
import { panel } from '../components/model/panel.model';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http:HttpClient) { }
  Left_panel_data():Observable<panel[]>{
    const Panel_data=this.http.get<panel[]>(LEFT_PANEL_URL);
    return Panel_data;
  }
  Right_panel_data():Observable<panel[]>{
    const Panel_data=this.http.get<panel[]>(RIGHT_PANEL_URL);
    return Panel_data;
  }
}
