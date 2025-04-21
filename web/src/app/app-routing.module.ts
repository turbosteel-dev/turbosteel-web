import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'about-us',
    loadChildren: ()=> import('./features/about-us/about-us.module').then(m=> m.AboutUsModule)
  },
  {
    path: 'why-turbosteel',
    loadChildren: () => import('./features/why-turbosteel/why-turbosteel.module').then(m => m.WhyTurbosteelModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'facilities',
    loadChildren: () => import('./features/facilities/facilities.module').then(m => m.FacilitiesModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./features/buy/buy.module').then(m => m.BuyModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./features/careers/careers.module').then(m => m.CareersModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled', // optional but useful
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
