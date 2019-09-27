import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from '../actions';

import { Course, compareCourses } from '../../model/course';

// tslint:disable-next-line:no-empty-interface
export interface CoursesState extends EntityState<Course> {
  loaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  selectId: course => course.id
});

export const initialState = adapter.getInitialState({
  loaded: false
});

export const reducer = createReducer(
  initialState,

  on(CourseActions.loadCoursesSuccess, (state, { courses }) =>
    adapter.addAll(courses, {
      ...state,
      loaded: true
    })),

  on(CourseActions.courseUpdated, (state, { update }) =>
    adapter.updateOne(update, state)
  )
);

export const { selectAll } = adapter.getSelectors();
