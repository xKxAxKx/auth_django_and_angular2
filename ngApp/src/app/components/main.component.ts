import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MainService } from '../services/main.service';

@Component({
  selector: 'main',
  templateUrl: '../templates/main.component.html',
})
export class MainComponent {
  testVar: string;

  constructor(
    private mainService: MainService,
    private router: Router,
  ){}

}
