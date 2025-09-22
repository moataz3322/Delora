import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CheckfirstService } from './shared/brand-loader/checkfirst.service';
import { LoadingService } from './shared/brand-loader/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly loadingService = inject(LoadingService);

  private readonly checkfirstService = inject(CheckfirstService);
  protected title = 'dealora';

  ngOnInit(): void {
    this.checkFirstVisit();
  }

  checkFirstVisit(): void {
    if (this.checkfirstService.isFirstVisit()) {
      this.loadingService.showLoader();

      setTimeout(() => {
        this.loadingService.hideLoader();
        this.checkfirstService.setFirstVisit();
      }, 5000);
    }
  }
}
