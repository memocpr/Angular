import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RecipesResolverService } from "../recipes/recipes-resolver.service";
import { SharedModule} from "../shared/shared.module";

@NgModule({
    declarations:[
    ShoppingListComponent,
    ShoppingEditComponent,
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([{ path: '', component: ShoppingListComponent, resolve:[RecipesResolverService] }]),
        SharedModule
    ]
})
export class ShoppingListModule{

}