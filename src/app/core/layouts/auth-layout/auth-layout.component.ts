import { Component, inject, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { BrandLoaderComponent } from '../../../shared/brand-loader/brand-loader.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  imports: [NavbarComponent, RouterOutlet, BrandLoaderComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  private readonly platForm = inject(PLATFORM_ID);
  ngOnInit(): void {
    this.loading();
  }
  loading(): void {
    if (isPlatformBrowser(this.platForm)) {
      document.body.style.overflow = 'hidden';
    }
    setTimeout(() => {
      if (isPlatformBrowser(this.platForm)) {
        document.body.style.overflow = 'auto';
      }
    }, 6000);
  }
}
