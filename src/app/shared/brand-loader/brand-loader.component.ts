import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-brand-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-loader.component.html',
  styleUrls: ['./brand-loader.component.css'],
})
export class BrandLoaderComponent {
  private loadingService = inject(LoadingService);

  loadCheck = this.loadingService.loadCheck;
}
// أربط مباشرة بالـ service
