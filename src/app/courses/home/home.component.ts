import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { CourseSelectors } from '../store/selectors';
import { AppState } from '../../reducers';

import { defaultDialogConfig } from '../shared/default-dialog-config';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { Course } from '../model/course';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promoTotal$: Observable<number>;
  loading$: Observable<boolean>;
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.beginnerCourses$ = this.store.pipe(select(CourseSelectors.beginnerCourses));
    this.advancedCourses$ = this.store.pipe(select(CourseSelectors.advancedCourses));
    this.promoTotal$ = this.store.pipe(select(CourseSelectors.promoTotal));
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Course',
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }


}
