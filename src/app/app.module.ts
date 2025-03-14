import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { BinerySearchComponent } from './binery-search/binery-search.component';
import { ArrayNodeComponent } from './array-node/array-node.component';
import { LinkedListNodeComponent } from './linked-list-node/linked-list-node.component';
import { ListCycleDetectionComponent } from './list-cycle-detection/list-cycle-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    BinerySearchComponent,
    ArrayNodeComponent,
    LinkedListNodeComponent,
    ListCycleDetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
