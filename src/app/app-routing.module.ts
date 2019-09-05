import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'phot-modal', loadChildren: './phot-modal/phot-modal.module#PhotModalPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'onboaring', loadChildren: './onboaring/onboaring.module#OnboaringPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'otp', loadChildren: './otp/otp.module#OtpPageModule' }
  // { path: 'autocomplete', loadChildren: './autocomplete/autocomplete.module#AutocompletePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
