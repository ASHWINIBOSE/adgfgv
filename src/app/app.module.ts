import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { CrudComponent } from './crud/crud.component';
import { NamedisplayComponent } from './namedisplay/namedisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DemoComponent,
    CrudComponent,
    NamedisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
