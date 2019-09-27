import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from '../reducers/course.reducers';

export const getCoursesState =
  createFeatureSelector<fromCourses.CoursesState>('courses');

export const allCourses = createSelector(
  getCoursesState,
  fromCourses.selectAll
);

export const beginnerCourses = createSelector(
  allCourses,
  courses => courses.filter(c => c.category.toLocaleUpperCase() === 'BEGINNER')
);

export const advancedCourses = createSelector(
  allCourses,
  courses => courses.filter(c => c.category.toLocaleUpperCase() === 'ADVANCED')
);

export const promoTotal = createSelector(
  allCourses,
  courses => courses.filter(c => c.promo).length
);

export const loaded = createSelector(
  getCoursesState,
  state => state.loaded
);

