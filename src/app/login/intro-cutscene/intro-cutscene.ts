import { Component, OnInit, inject } from '@angular/core';

import { AppAllPrimeng } from '../../assets/appAllPrimeng.module';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-intro-cutscene',
  imports: [AppAllPrimeng],
  templateUrl: './intro-cutscene.html',
  styleUrl: './intro-cutscene.css',
})
export class IntroCutscene implements OnInit {
    public introShowed : boolean = false;

  ngOnInit(): void {
    console.log("Intro started");
    this.stateChange(this.introShowed);
  }

  stateChange(introState : boolean) {
    console.log("wanna stop intro");
    setTimeout(function () {
        console.log("Intro has stopped")
        window.sessionStorage.setItem('introShowed', 'true');
        window.location.reload();
    }, 3000);
  }
}
