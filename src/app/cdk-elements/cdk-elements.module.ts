import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkElementsRoutingModule } from './cdk-elements-routing.module';
import { CdkPageComponent } from './pages/cdk-page/cdk-page.component';
import { TableComponent } from './components/table/table.component';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { TreeComponent } from './components/tree/tree.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PortalModule } from '@angular/cdk/portal';
import { PortalComponent } from './components/portal/portal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    CdkPageComponent,
    TableComponent,
    AccordionComponent,
    TreeComponent,
    PortalComponent,
    DragAndDropComponent,
  ],
  imports: [
    CommonModule,
    CdkElementsRoutingModule,
    CdkTableModule,
    CdkAccordionModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    PortalModule,
    DragDropModule,
  ],
})
export class CdkElementsModule {}
