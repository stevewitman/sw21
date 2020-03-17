import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@bb/material';
import { UiToolbarModule } from '@bb/ui-toolbar';
import { CoreDataModule } from '@bb/core-data';
import { CoreStateModule } from '@bb/core-state';
import { ReactiveFormsModule } from '@angular/forms';
import { ParksComponent } from './parks/parks.component';

@NgModule({
  declarations: [
    AppComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UiToolbarModule,
    CoreDataModule,
    CoreStateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
