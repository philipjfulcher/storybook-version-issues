import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lib1Module} from '@sb/lib1';
import { Lib2Module} from '@sb/lib2';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
