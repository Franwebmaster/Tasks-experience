import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
	//=====> Definindo esquema de rotas
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' }, //Rota Padrão
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'panel', component: PanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
