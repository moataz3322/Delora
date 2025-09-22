import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckfirstService {
  private firstVisitKey = 'firstVisit';

  isFirstVisit(): boolean {
    if (typeof localStorage === 'undefined') return false;
    return !sessionStorage.getItem(this.firstVisitKey);
  }

  setFirstVisit(): void {
    if (typeof sessionStorage === 'undefined') return;
    localStorage.setItem(this.firstVisitKey, 'true');
  }
}
