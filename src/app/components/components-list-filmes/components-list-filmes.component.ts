import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-components-list-filmes',
  templateUrl: './components-list-filmes.component.html',
  styleUrls: ['./components-list-filmes.component.scss'],
})
export class ComponentsListFilmesComponent implements OnInit {
  browse: any;
  valor = true;
  @Input() titlefilmes?: string;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.apiBrowse.subscribe((res) => {
      this.browse = res;
      console.log(res);
    });
  }

  onclick() {
    if (this.valor) {
      this.valor = false;
    } else {
      this.valor = true;
    }
  }
}
