import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private router: Router) { }

  rotaParaWelcome() {
  	this.router.navigate(['welcome'])
  }

  ngOnInit() {
  }

}
