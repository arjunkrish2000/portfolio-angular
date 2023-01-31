import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { AddressComponent } from './address/address.component';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [ 
  {path:'home',component:HomeComponent},
  {path:'address',component:AddressComponent},
    {path:'academics',component:AcademicsComponent},
     {path:'project',component:ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
