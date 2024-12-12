import { Component, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { HeroComponent } from "../../core/components/hero/hero.component";

@Component({
  selector: "mrw-home",
  imports: [HeroComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent {
  public title = inject(Title);

  private meta = inject(Meta);

  constructor() {
    this.title.setTitle("Multi Repo Workspace");
    this.meta.addTag({ name: "description", content: "My Angular App" });
  }
}
