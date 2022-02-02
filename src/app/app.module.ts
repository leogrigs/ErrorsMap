import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ErrorsComponent } from './content/errors/errors.component';
import { EntryComponent } from './content/entry-error/entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { GuidesComponent } from './content/guides/guides.component';
import { HomeComponent } from './content/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EntryGuideComponent } from './content/entry-guide/entry-guide.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    EntryComponent,
    GuidesComponent,
    HomeComponent,
    EntryGuideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    CoreModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
