import {
  Component,
  computed,
  inject,
  Input,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../../core/auth/services/login.service';
import { ChekclandingpageService } from './chekclandingpage.service';
import { CartComponent } from '../../../pages/cart/cart.component';
import { CartService } from '../../../pages/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}
  private readonly loginService = inject(LoginService);
  private readonly checklanding = inject(ChekclandingpageService);
  private readonly cartService = inject(CartService);
  count: Signal<number> = computed(() => this.cartService.countNum());
  @Input({ required: true }) islogin!: boolean;

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
  get isLandingPage() {
    return this.checklanding.isLandingPage();
  }
  signOut(): void {
    this.loginService.logOut();
  }

  getAllDataCart(): void {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cartService.countNum.set(res.numOfCartItems);
      },
    });
  }
}
