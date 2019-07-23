import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSidenavModule, MatCardModule, MatMenuModule, MatGridListModule, MatProgressSpinnerModule, MatToolbarModule, MatListModule, MatSelectModule, MatPaginatorModule, MatProgressBarModule,MatDialogModule, MatTableModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatGridListModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSelectModule,
        MatPaginatorModule

    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatGridListModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatSelectModule,
        MatPaginatorModule
    ],
})

export class MaterialModule {
}
