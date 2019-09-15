import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';
// import {spyOn, Spy} from 'jasmine';
import {DataService} from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService); // Inject userService into UserComponent in testing environment. Use Angular injector (it's part of the component) and tells please give me instance of userService.
    fixture.detectChanges(); // Update properties and so on, otherwise it cannot see property name, which is being changed between states.
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('shouldn\'t display user name if user is logged in', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    // component.isLoggedIn = true;
    fixture.detectChanges(); // Update properties and so on, otherwise it cannot see property name, which is being changed between states.
    let compiled = fixture.debugElement.nativeElement; // Get access to compiler's template.
    // expect(compiled.querySelector('p').textContent).toContain(component.user.name);
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  // Wait for all asynchronous tasks to finish, it gives the opportunity to wait once all changes will be done while getting all necessary data.
  it('should fetch data successfully if called asynchronously', async(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  // "fakeAsync" allows to get rid of "whenStable", but "tick" in between is called.
  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick(); // In a fakeAsync environment finish all asynchronous tasks now.
    expect(component.data).toBe('Data');
  }));
});
