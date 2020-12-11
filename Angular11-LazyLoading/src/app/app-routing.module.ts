import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./core/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./core/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {
    //   enableTracing: true, // <-- debugging purposes only
    //   preloadingStrategy: PreloadAllModules // <-- Precargar todos los módulos en background
    // }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
