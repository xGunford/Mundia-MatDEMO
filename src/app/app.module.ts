import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Slider
import { MatSliderModule } from '@angular/material/slider';

//Autocomplete
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//use for autocomplete Input Modules
import {MatInputModule} from '@angular/material/Input';

//checkbox
import {MatCheckboxModule} from '@angular/material/checkbox';
//date picker
import{MatDatepickerModule} from '@angular/material/datepicker';

//importing native date module(moved to core in angular 11)
import {MatNativeDateModule} from  '@angular/material/core';

//import Icon module
import {MatIconModule} from '@angular/material/icon';

//Select module
import {MatSelectModule} from '@angular/material/select';

//MatOptionModule moved to core
import {MatOptionModule} from '@angular/material/core';

//badge
import {MatBadgeModule} from '@angular/material/badge';

//menu
import {MatMenuModule} from '@angular/material/menu';

//buttons
import {MatButtonModule} from '@angular/material/button';

//created Component
import {ContactFormComponent} from './contact-form/contact-form.component';

//HTTP client
import {HttpClientModule} from '@angular/common/http';

//Grid
import {MatGridListModule} from '@angular/material/grid-list';

//Contact form service
import {ContactService} from './contact.service';

//matdivider
import {MatDividerModule} from '@angular/material/divider';


//matcard
import {MatCardModule} from '@angular/material/card';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {MatTabsModule} from '@angular/material/tabs';

import {MatRippleModule} from '@angular/material/core';
import { RippleComponent } from './components/ripple/ripple.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ButtonsComponent,
    CheckboxComponent,
    RippleComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }