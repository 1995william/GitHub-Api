import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { GithubService } from './service/github.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [AppComponent, RepositoriesComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule],
  providers: [HttpClientModule,GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
