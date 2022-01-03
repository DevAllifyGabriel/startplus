import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainStartPlusComponent } from './main-start-plus/main-start-plus.component';
import { ComponenstPlansComponent } from './components/componenst-plans/componenst-plans.component';
import { ComponenstChannelsComponent } from './components/componenst-channels/componenst-channels.component';
import { ComponenstFilmsComponent } from './components/componenst-films/componenst-films.component';
import { ComponenstYouDoubtComponent } from './components/componenst-you-doubt/componenst-you-doubt.component';
import { ComponenstNavbarComponent } from './components/componenst-navbar/componenst-navbar.component';
import { RodapePlusComponent } from './rodape-plus/rodape-plus.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { PassawordComponent } from './login/passaword/passaword.component';
import { EnterPasscodeComponent } from './login/enter-passcode/enter-passcode.component';
import { ComponenstLoginSimilarsComponent } from './components/componenst-login-similars/componenst-login-similars.component';
import { BuyPlanComponent } from './sing-up/buy-plan/buy-plan.component';
import { FinalizingPurchaseComponent } from './sing-up/finalizing-purchase/finalizing-purchase.component';
import { PayPalComponent } from './sing-up/finalizing-purchase/pay-pal/pay-pal.component';
import { MercadoPAgoComponent } from './sing-up/finalizing-purchase/mercado-pago/mercado-pago.component';
import { BrowseComponent } from './browse/browse.component';
import { ComponentsBrowseNavabarComponent } from './components/components-browse-navabar/components-browse-navabar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsListFilmesComponent } from './components/components-list-filmes/components-list-filmes.component';
import { ComponentStartComponent } from './browse/component-start/component-start.component';
import { ComponentSerieComponent } from './browse/component-serie/component-serie.component';
import { ComponentFilmComponent } from './browse/component-film/component-film.component';
import { ComponentTheRiseComponent } from './browse/component-the-rise/component-the-rise.component';

@NgModule({
  declarations: [
    AppComponent,
    MainStartPlusComponent,
    ComponenstPlansComponent,
    ComponenstChannelsComponent,
    ComponenstFilmsComponent,
    ComponenstYouDoubtComponent,
    ComponenstNavbarComponent,
    RodapePlusComponent,
    SingUpComponent,
    LoginComponent,
    PassawordComponent,
    EnterPasscodeComponent,
    ComponenstLoginSimilarsComponent,
    BuyPlanComponent,
    FinalizingPurchaseComponent,
    PayPalComponent,
    MercadoPAgoComponent,
    BrowseComponent,
    ComponentsBrowseNavabarComponent,
    ComponentsListFilmesComponent,
    ComponentStartComponent,
    ComponentSerieComponent,
    ComponentFilmComponent,
    ComponentTheRiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
