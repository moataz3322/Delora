import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DetailsComponent } from './pages/details/details.component';
import { authGuard } from './core/guards/auth-guard';
import { islogedGuard } from './core/guards/isloged-guard';
import { BrandLoaderComponent } from './shared/brand-loader/brand-loader.component';
import { AllordersComponent } from './pages/allorders/allorders/allorders.component';
import { ForgetpasswordComponent } from './core/auth/forgetpass/forgetpassword/forgetpassword.component';
import { LandingpageComponent } from './shared/components/landing-page/landingpage/landingpage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [islogedGuard],
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
      {
        path: 'forgetpassword',
        component: ForgetpasswordComponent,
        title: 'Forgetpassword',
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'delora', component: LandingpageComponent, title: 'Delora' },
      { path: 'services', component: ServicesComponent, title: 'Services' },
      { path: 'about-us', component: AboutusComponent, title: 'AboutUs' },
      { path: 'blog', component: BlogComponent, title: 'Blog' },
      { path: 'contact-us', component: ContactusComponent },
      { path: 'allorders', component: AllordersComponent, title: 'Allorders' },
      { path: 'checkout/:id', component: CheckoutComponent, title: 'Checkout' },
      { path: 'products', component: ProductsComponent, title: 'Products' },
      {
        path: 'details/:id/:slug',
        component: DetailsComponent,
        title: 'Details',
      },
      { path: 'details/:id', component: DetailsComponent, title: 'Details' },

      { path: 'cart', component: CartComponent, title: 'Cart' },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'NotFound Page' },
];
