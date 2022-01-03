import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  activeNavabrBrowse: boolean = false;
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
