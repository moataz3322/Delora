import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // signal رئيسية
  loadCheck = signal(false);

  showLoader(): void {
    this.loadCheck.set(true);
  }

  hideLoader(): void {
    this.loadCheck.set(false);
  }
}
