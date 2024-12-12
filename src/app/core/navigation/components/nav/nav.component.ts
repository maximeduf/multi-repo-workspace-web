import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavUtilsService } from "../../services/nav-utils/nav-utils.service";

@Component({
  selector: "mrw-nav",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.scss"
})
export class NavComponent {
  private _navUtilsService = inject(NavUtilsService);

  public navItems = this._navUtilsService.getNavItemsFor("NavComponent");
}
