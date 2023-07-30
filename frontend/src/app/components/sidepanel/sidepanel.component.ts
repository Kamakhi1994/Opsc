import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';
import { panel } from '../model/panel.model';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent {
  left_panel: panel[] = [];
  right_panel: panel[] = [];
constructor(private http:HttpClient,private panelservice:PanelService)
{
  this.panelservice.Left_panel_data().subscribe((params)=>
  {this.left_panel=params});

  this.panelservice.Right_panel_data().subscribe((params)=>
  {this.right_panel=params})}

}

