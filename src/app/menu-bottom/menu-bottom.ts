import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-bottom',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './menu-bottom.html',
  styleUrl: './menu-bottom.css',
})
export class MenuBottom {

}
