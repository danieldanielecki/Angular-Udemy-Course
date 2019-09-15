import {NgModule} from "@angular/core";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UserComponent} from "./users/user/user.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver.service";

// Declare routes.
const appRoutes: Routes = [
  {
    path: '', // 'path' is always needed, here it makes route like localhost:4200.
    component: HomeComponent // Inform Angular that this once this path will be reach certain component should be loaded.
  },
  {
    path: 'users', // 'path' is always needed, here it makes route like localhost:4200/users, skipping the "/" is important to be there, because with '/' it's not working.
    component: UsersComponent, // Inform Angular that this once this path will be reach certain component should be loaded.

    // Child routes.
    children: [
      {
        path: ':id/:name', // ":id" - add dynamic segments in path to make the path setted up for dynamic changes, colon says to Angular this is the dynamic part of the route, "id" or anything later is up to developer how he/she will name it. Same for "name".
        component: UserComponent
      }
    ]
  },
  {
    path: 'servers',
    // canActivate: [AuthGuard], // Apply guards to 'servers' and its children.
    canActivateChild: [AuthGuard], // Apply guards to 'servers' children.
    component: ServersComponent,
    // Child routes.
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {server: ServerResolver}
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent
  // },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {message: 'Page not found!'}
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: '/not-found' // Alternative to component in routes, which redirects to specific path.
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // Register routes for main application here.
    // RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  // "exports" means from this module I want to add this module to the import of another modules.
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}