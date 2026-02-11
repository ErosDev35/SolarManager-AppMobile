import { Component, OnInit, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'primeng/accordion';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { SelectModule, SelectItem } from 'primeng/select';

@Component({
  selector: 'app-intro-cutscene',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, MessageModule, ChartModule, AccordionModule, SelectModule],
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
