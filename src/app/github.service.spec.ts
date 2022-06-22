import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
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

  it('ele deve chamar um GET com endpoint correto', () =>{
    const spy = spyOn((service as any).http as HttpClient, 'get');
    service.getData('',1)
    expect(spy).toHaveBeenCalled()
  })
});
