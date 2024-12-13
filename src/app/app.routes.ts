import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { DocsComponent } from "./pages/docs/docs.component";
import { RouteWithNavigation } from "./modules/navigation/models/navigatable-item.model";

/**
 * Routes of the application. Casted to RoutesWithNavigation to include navigation data.
 */
export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      navigation: {
        fromComponent: "NavComponent",
        label: "Home"
      }
    }
  },
  {
    path: "docs",
    component: DocsComponent,
    data: {
      navigation: {
        fromComponent: "NavComponent",
        label: "Docs"
      }
    }
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      navigation: {
        fromComponent: "NavComponent",
        label: "About"
      }
    }
  },
  {
    path: "idk",
    component: AboutComponent,
    data: {
      navigation: {
        fromComponent: "NavComponent",
        label: "IDK"
      }
    }
  }
] as RouteWithNavigation[];
