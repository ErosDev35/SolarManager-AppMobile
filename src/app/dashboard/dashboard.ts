import { Component, OnInit, inject } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-dashboard',
  imports: [CardModule, ButtonModule, InputTextModule, FormsModule, MessageModule, ChartModule, AccordionModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  data: any;
  options: any;

    ngOnInit() {
        this.initChart();
    }

    initChart() {
            this.data = {
                labels: ['0h:00', '4h:00', '8h:00', '12h:00', '16h:00', '20h:00', '00h:00'],
                datasets: [
                    {
                        label: 'Production',
                        data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 90, 100, 110, 120],
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Consommation',
                        data: [28, 48, 40, 19, 86, 27, 90, 60, 80, 70, 100, 95, 130],
                        fill: false,
                        borderDash: [5, 5],
                        tension: 0.4
                    }
                ]
            };
        }
    }