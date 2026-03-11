import { NgModule} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'primeng/accordion';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { SelectModule, SelectItem } from 'primeng/select';
import { ProgressBarModule } from 'primeng/progressbar';
import { ScrollerModule } from 'primeng/scroller';
import { Drawer, DrawerModule } from 'primeng/drawer';

const primeNgModule = [
    ChartModule, CardModule, ButtonModule, 
    InputTextModule, FormsModule, MessageModule, 
    AccordionModule, SelectModule, SelectItem, 
    ProgressBarModule, ScrollerModule, Drawer, 
    DrawerModule
]

@NgModule({
  imports: [...primeNgModule],
  exports: [...primeNgModule]
})

export class AppAllPrimeng{}