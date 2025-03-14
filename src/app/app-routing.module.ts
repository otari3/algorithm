import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BinerySearchComponent } from './binery-search/binery-search.component';
import { ListCycleDetectionComponent } from './list-cycle-detection/list-cycle-detection.component';

const routes: Routes = [
  { component: HeaderComponent, path: '' },
  { component: BinerySearchComponent, path: 'binerysearch' },
  { component: ListCycleDetectionComponent, path: 'listcycle' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
