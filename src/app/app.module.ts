import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatListModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule, 
    MatListModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatIconModule, 
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
