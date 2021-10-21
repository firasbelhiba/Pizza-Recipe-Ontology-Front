import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsVehiculeComponent } from '../../pages/details-vehicule/details-vehicule.component';
import { AddVehiculesComponent } from '../../pages/add-vehicules/add-vehicules.component';
import { DisplayVehiculesComponent } from '../../pages/display-vehicules/display-vehicules.component';
import { DxBulletModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxNumberBoxModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxCheckBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxFormModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    DisplayVehiculesComponent,
    AddVehiculesComponent,
    DetailsVehiculeComponent
  ]
})

export class AdminLayoutModule {}
