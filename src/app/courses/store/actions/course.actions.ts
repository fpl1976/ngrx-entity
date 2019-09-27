import { createAction, props } from '@ngrx/store';
import { Course } from '../../model/course';
import { Update } from '@ngrx/entity';

export const loadCourses = createAction(
  '[Courses] Load Courses'
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: Course[]}>()
);

export const courseUpdated = createAction(
  '[Courses] Course Updated',
  props<{ update: Update<Course> }>()
);
