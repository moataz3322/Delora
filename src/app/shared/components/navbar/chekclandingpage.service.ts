import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChekclandingpageService {
  isLandingPage: WritableSignal<boolean> = signal(true);

  setLanding(value: boolean) {
    this.isLandingPage.set(value);
  }
}
