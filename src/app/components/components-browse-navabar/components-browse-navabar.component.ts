import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-browse-navabar',
  templateUrl: './components-browse-navabar.component.html',
  styleUrls: ['./components-browse-navabar.component.scss'],
})
export class ComponentsBrowseNavabarComponent implements OnInit {
  @Input() activeNavabrBrowse: boolean = false;

  listLinks = [
    {
      selfHelp: 'Inicio',
    },
    { selfHelp: 'Series' },
    { selfHelp: 'Filmes' },
    { selfHelp: 'Em alta' },
    { selfHelp: 'Minha lista' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
