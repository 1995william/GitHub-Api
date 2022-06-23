import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { IgetData } from 'src/types/input';

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
    const input = ''
    const count = 1
    service.getData({input,count});
    expect(spy).toHaveBeenCalled();
  })
});
