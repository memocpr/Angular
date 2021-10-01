import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";


const appRoutes:Routes=[
    { path:'', component:HomeComponent }, 
    { path:'users', component:UserComponent, children: [
        { path:':id/:name', component:UserComponent }, ] }, 
    { path:'servers', component:ServersComponent, children: 
        [{ path:':id', component:ServersComponent },
        {path: ':id/edit', component:EditServerComponent}]
    },
    {path: 'not-found', component:PageNotFoundComponent},
    /* {path: '**', redirectTo:'/not-found'} */

    { path: '', redirectTo: 'not-found', pathMatch: 'full' }  
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}