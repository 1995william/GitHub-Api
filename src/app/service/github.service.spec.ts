import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';

fdescribe('GithubService', () => {
  let service: GithubService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GithubService);
    http = TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // verifica se o verbo é do tipo GET

  it('ele deve chamar um GET com endpoint correto', () =>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getData('',1)
    expect(spy).toHaveBeenCalled()
  })
});
