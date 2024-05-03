// home.component.ts
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    const splineScript = document.createElement('script');
    splineScript.setAttribute('type', 'module');
    splineScript.setAttribute('src', 'https://unpkg.com/@splinetool/viewer@1.2.4/build/spline-viewer.js');
    document.head.appendChild(splineScript);
  }
}
