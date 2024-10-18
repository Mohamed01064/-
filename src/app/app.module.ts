import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component'; // استيراد NavbarComponent
import { FooterComponent } from './footer/footer.component'; // استيراد FooterComponent

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent, // إضافة NavbarComponent
    FooterComponent  // إضافة FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
