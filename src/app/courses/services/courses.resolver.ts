import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { AppState } from '../../reducers';
import { CourseActions } from '../store/actions';
import { tap, first, map, finalize, filter } from 'rxjs/operators';
import { CourseSelectors } from '../store/selectors';


@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<Course> {

  constructor(
    private store: Store<AppState>) { }

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(CourseSelectors.loaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(CourseActions.loadCourses());
        }
      }),
      filter(loaded => loaded),
      first()
    );
  }
}
