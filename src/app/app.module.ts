import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButton } from "@angular/material";
import { NgModule } from "@angular/core";
import { EventsAppComponent } from "./events-app.component";

@NgModule({
  declarations: [EventsAppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButton],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
