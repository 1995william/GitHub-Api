import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GithubService } from './github.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [AppComponent, RepositoriesComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule],
  providers: [HttpClientModule,GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
