import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { Router } from '@angular/router';
import { VehiculesService } from '../../services/vehicules.service';

@Component({
  selector: 'app-display-vehicules',
  templateUrl: './display-vehicules.component.html',
  styleUrls: ['./display-vehicules.component.css']
})
export class DisplayVehiculesComponent implements OnInit {
  constructor(private router:Router,private service:VehiculesService) {}
  
  dsControls : any = {};
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  firstLoad:boolean=false;
 
  ngOnInit() {
      
      const _this = this;
      _this.firstLoad=true;
      this.dsControls = new CustomStore({
        key: "id",
        load: function (loadOptions: any) {
            return _this.service.getVehicules()
                .toPromise()
                .then((data: any) => { return { data: data, totalCount: data.length }; })
                .catch(error => { throw 'Data Loading Error' });
        }
      });
      //_this.service.getVoitures('MoyenneGamme');
  }
  getDataSource() {
    return new DataSource({
        store: {
            type: "odata",
            url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
            beforeSend: function(request) {
                request.params.startDate = "2018-05-10";
                request.params.endDate = "2018-05-15";
            }
        }
    });
}
 
  contentReady = (e) => {};
  onRowDblClick = (e) => {
    console.log(e);
    this.ToUpdatePage();
  };
  onToolbarPreparing (e) { 
    let _this = this;
    e.toolbarOptions.items.unshift({
      location: "after", widget: "dxButton", options: { hint: "Refresh", icon: "refresh", onClick: function () { e.component.refresh(); } }
    });
  
  e.toolbarOptions.items.unshift({
      location: "after", widget: "dxButton", options: { hint: "Add", icon: "add",onClick: function () { _this.router.navigate(['/add']) }}
  });
  }
  onInitialized (e) { 
    e.component.columnOption("command:delete", "fixed", true);
    e.component.columnOption("command:delete", "fixedPosition", "right"); 
  }
 customizeTooltip = (pointsInfo) => {
        return { text: parseInt(pointsInfo.originalValue) + "%" };
    }
  clearFilter() {
      this.dataGrid.instance.clearFilter();
  }
  ToAddPage() {
    this.firstLoad=false;
  }

  ToUpdatePage(){
    
  }

}
