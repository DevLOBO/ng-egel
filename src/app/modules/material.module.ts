import { NgModule } from '@angular/core';
import {
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatSelectModule,
	MatCardModule,
	MatInputModule,
	MatRadioModule,
	MatProgressSpinnerModule,
	MatTabsModule,
	MatTableModule,
	MatPaginatorModule,
	MatDialogModule,
	MatSnackBarModule,
	MatListModule
} from '@angular/material';

@NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatSelectModule,
		MatCardModule,
		MatInputModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatTabsModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		MatSnackBarModule,
		MatListModule
	],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatSelectModule,
		MatCardModule,
		MatInputModule,
		MatRadioModule,
		MatProgressSpinnerModule,
		MatTabsModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule,
		MatSnackBarModule,
		MatListModule
	]
})
export class MaterialModule { }