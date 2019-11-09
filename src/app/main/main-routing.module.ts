import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuardService as AuthGuard} from '../log-in/services/auth-guard.service';



const routes: Routes = [
    {
        path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
            { loadChildren: './modules/profile/profile.module#ProfileModule', path: 'profile/:id'},
            { loadChildren: './modules/vacation-request/vacation-request.module#VacationRequestModule', path: 'vacation-request/:id'},
            { loadChildren: './modules/add-edit-user/add-edit-user.module#AddEditUserModule', path: 'add-edit-user'},
            { loadChildren: './modules/add-edit-team/add-edit-team.module#AddEditTeamModule', path: 'add-edit-team'},
            { loadChildren: './modules/vacation-request-list/vacation-request-list.module#VacationRequestListModule', path: 'vacation-request-list'},
            { loadChildren: './modules/user-list/user-list.module#UserListModule', path: 'user-list'}, 
            { loadChildren: './modules/team-list/team-list.module#TeamListModule', path: 'team-list'},
            { loadChildren: './modules/calendar/calendar.module#CalendarModule', path: 'calendar'},                                                                                      
            // { path: '', redirectTo: 'profile/:id', pathMatch: 'full'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
