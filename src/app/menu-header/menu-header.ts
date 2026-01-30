import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Dialog, DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-menu-header',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, DialogModule],
  templateUrl: './menu-header.html',
  styleUrl: './menu-header.css',
})
export class MenuHeader {
    public menuDialog : boolean = false;


  clickMenu() {
    this.menuDialog = !this.menuDialog;
  }
}
