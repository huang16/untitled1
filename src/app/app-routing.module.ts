import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NetdiskComponent} from './netdisk/netdisk.component';
import {IndexComponent} from './index/index.component';
import {NetdiskDetailComponent} from './netdisk-detail/netdisk-detail.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'netdisk', component: NetdiskComponent},
  {path: 'netdisk/:id', component: NetdiskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
