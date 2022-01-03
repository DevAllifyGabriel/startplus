import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ComponentFilmComponent } from './browse/component-film/component-film.component';
import { ComponentSerieComponent } from './browse/component-serie/component-serie.component';
import { ComponentStartComponent } from './browse/component-start/component-start.component';
import { ComponentTheRiseComponent } from './browse/component-the-rise/component-the-rise.component';
import { EnterPasscodeComponent } from './login/enter-passcode/enter-passcode.component';
import { LoginComponent } from './login/login.component';
import { PassawordComponent } from './login/passaword/passaword.component';
import { MainStartPlusComponent } from './main-start-plus/main-start-plus.component';
import { BuyPlanComponent } from './sing-up/buy-plan/buy-plan.component';
import { FinalizingPurchaseComponent } from './sing-up/finalizing-purchase/finalizing-purchase.component';
import { MercadoPAgoComponent } from './sing-up/finalizing-purchase/mercado-pago/mercado-pago.component';
import { PayPalComponent } from './sing-up/finalizing-purchase/pay-pal/pay-pal.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  { path: '', component: MainStartPlusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/password', component: PassawordComponent },
  { path: 'login/password/enter-passcode', component: EnterPasscodeComponent },

  { path: 'sing-up', component: SingUpComponent },
  { path: 'sing-up/create-password', component: BuyPlanComponent },
  {
    path: 'sing-up/finalizing-purchase',
    component: FinalizingPurchaseComponent,
  },
  { path: 'sing-up/finalizing-purchase/pay-pal', component: PayPalComponent },
  {
    path: 'sing-up/finalizing-purchase/mercado-pago',
    component: MercadoPAgoComponent,
  },

  { path: 'browse', component: BrowseComponent },
  { path: 'browse/film', component: ComponentFilmComponent },
  { path: 'browse/serie', component: ComponentSerieComponent },
  { path: 'browse/start', component: ComponentStartComponent },
  { path: 'browse/the-rise', component: ComponentTheRiseComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
