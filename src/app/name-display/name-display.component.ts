import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css'],
})
export class NameDisplayComponent implements OnInit {
  firstName: string = 'Shrieya';
  lastName: string = 'Randive';
  constructor() {}

  ngOnInit(): void {}
}
