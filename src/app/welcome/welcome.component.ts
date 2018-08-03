import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  rotaParaPanel() {
  	this.router.navigate(['panel'])
  }

  ngOnInit() {
  }

}
