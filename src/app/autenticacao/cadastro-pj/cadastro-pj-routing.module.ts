import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
    CadastrarPjComponent,
    CadastroPjComponent
} from './components'

export const CadastrarPjRoutes: Routes = [
    {
        path:'cadastro-pj',
        component:CadastroPjComponent,
        children:[
            {
                path: '',
                component: CadastrarPjComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CadastrarPjRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroPjRoutingModule{
    
}