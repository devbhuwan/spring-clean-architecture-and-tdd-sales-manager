import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListItemsComponent} from './list-items/list-items.component';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';

const routes: Routes = [
  {path: '', component: ListItemsComponent},
  {path: 'add', component: AddNewItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
