import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@bb/material';
import { UiToolbarModule } from '@bb/ui-toolbar';
import { CoreDataModule } from '@bb/core-data';
import { CoreStateModule } from '@bb/core-state';
import { ReactiveFormsModule } from '@angular/forms';
import { ParksComponent } from './parks/parks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParksListComponent } from './parks/parks-list/parks-list.component';
import { ParkDetailsComponent } from './parks/park-details/park-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ParksComponent,
    ParksListComponent,
    ParkDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UiToolbarModule,
    CoreDataModule,
    CoreStateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
