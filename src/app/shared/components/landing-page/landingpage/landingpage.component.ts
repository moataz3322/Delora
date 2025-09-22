import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ChekclandingpageService } from '../../navbar/chekclandingpage.service';
import { ServicesComponent } from '../../../../pages/services/services.component';
import { SimilarproductComponent } from '../../../similar-product/similarproduct/similarproduct.component';
import { ContactMeComponent } from '../../contact-me/contact-me.component';

@Component({
  selector: 'app-landingpage',
  imports: [ServicesComponent, SimilarproductComponent, ContactMeComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {}
