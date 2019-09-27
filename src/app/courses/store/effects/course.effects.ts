import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseActions } from '../actions';
import { concatMap, map } from 'rxjs/operators';
import { CoursesHttpService } from '../../services/courses-http.service';

@Injectable({
  providedIn: 'root'
})
export class CourseEffects {

  constructor(
    private actions$: Actions,
    private service: CoursesHttpService) { }

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      concatMap(_ => this.service.findAllCourses()),
      map(courses => CourseActions.loadCoursesSuccess({ courses }))
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.courseUpdated),
      map(action => action.update),
      concatMap(update => this.service.saveCourse(update.id, update.changes))
    ), { dispatch: false }
  );

}
