import { NgModule } from '@angular/core';
import {MatBadgeModule, MatSidenavContainer, MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';

@NgModule({
    imports: [
        MatBadgeModule, 
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatCardModule
    ],
    exports: [
        MatBadgeModule, 
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatSidenavContainer,
        MatListModule,
        MatTabsModule,
        MatCardModule]
})

export class MaterialModule {}

