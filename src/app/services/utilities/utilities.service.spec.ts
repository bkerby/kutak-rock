import { TestBed } from '@angular/core/testing';

import { UtilitiesService } from './utilities.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('UtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppRoutingModule, MatSnackBarModule, HttpClientModule ],
    providers: [ UtilitiesService, HttpClient, HttpClientModule ]
  }));

  it('should be created', () => {
    const service: UtilitiesService = TestBed.get(UtilitiesService);
    expect(service).toBeTruthy();
  });
});
