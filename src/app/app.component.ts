import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MainFrameComponent } from "./core/components/main-frame/main-frame.component";

@Component({
  selector: "mrw-root",
  imports: [RouterOutlet, MainFrameComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {}
