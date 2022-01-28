import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { HeaderComponent } from './header/header.component';
import { ByroadComponent } from './byroad/byroad.component';
import { IntroComponent } from './intro/intro.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { OfferComponent } from './offer/offer.component';
import { SafetyComponent } from './safety/safety.component';
import { ServiceComponent } from './service/service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardByroadComponent } from './dashboard-byroad/dashboard-byroad.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { TrainComponent } from './train/train.component';
import { DashboardTrainComponent } from './dashboard-train/dashboard-train.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BookTrainComponent } from './book-train/book-train.component';
import { BookByroadComponent } from './book-byroad/book-byroad.component';
import { ViewBooktrainsComponent } from './view-booktrains/view-booktrains.component';
import { ViewBookbyroadsComponent } from './view-bookbyroads/view-bookbyroads.component';


const routes: Routes =[
  {path: 'books/views/:_id',component: ViewBookComponent},
  {path: 'bookbyroads/views/:_id',component: ViewBookbyroadsComponent },
  {path: 'booktrains/views/:_id',component:  ViewBooktrainsComponent },
  {path: 'booktrains',component: BookTrainComponent},
  {path: 'bookbyroads',component: BookByroadComponent},
{path: '',component: IntroComponent},
{path: 'intros',component: IntroComponent},
{path: 'header',component: HeaderComponent},
{path: 'dashboards',component: DashboardComponent},
{path: 'books',component: BookComponent},
{path: 'contacts',component: ContactComponent},
{path: 'offers',component: OfferComponent},
{path: 'safetys',component: SafetyComponent},
{path: 'services',component: ServiceComponent},
{path: 'flights',component: FlightComponent},
{path: 'headers',component: HeaderComponent},
{path: 'byroads',component: ByroadComponent},
{path: 'trains',component: TrainComponent,

}];
@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    HeaderComponent,
    ByroadComponent,
    IntroComponent,
    BookComponent,
    ContactComponent,
    OfferComponent,
    SafetyComponent,
    ServiceComponent,
    DashboardComponent,
    DashboardByroadComponent,
    TrainComponent,
    DashboardTrainComponent,
    ViewBookComponent,
    BookTrainComponent,
    BookByroadComponent,
    ViewBooktrainsComponent,
    ViewBookbyroadsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }