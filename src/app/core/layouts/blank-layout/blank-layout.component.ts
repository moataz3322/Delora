import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { BrandLoaderComponent } from '../../../shared/brand-loader/brand-loader.component';
import { isPlatformBrowser } from '@angular/common';
import { LoadingService } from '../../../shared/brand-loader/loading.service';

@Component({
  selector: 'app-blank-layout',
  imports: [NavbarComponent, RouterOutlet, BrandLoaderComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css',
})
export class BlankLayoutComponent implements OnInit {
  // loadCheck: boolean = true;
  private readonly platForm = inject(PLATFORM_ID);
  private loadingService = inject(LoadingService);

  ngOnInit(): void {
    this.loading();
  }

  loading(): void {
    if (isPlatformBrowser(this.platForm)) {
      this.loadingService.showLoader();
      document.body.style.overflow = 'hidden';
    }

    setTimeout(() => {
      if (isPlatformBrowser(this.platForm)) {
        this.loadingService.hideLoader();
        document.body.style.overflow = 'auto';
      }
      // this.loadCheck = false;
    }, 5000);
  }
}
