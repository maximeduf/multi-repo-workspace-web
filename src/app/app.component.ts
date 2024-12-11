import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./core/components/nav/nav.component";
import { MainFrameComponent } from "./core/components/main-frame/main-frame.component";

@Component({
  selector: 'mrw-root',
  imports: [RouterOutlet, NavComponent, MainFrameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mrw-web-front';
}
