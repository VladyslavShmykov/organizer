import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITask, IUser} from "../../interfaces";
import {map, Observable} from "rxjs";
import * as moment from "moment";
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private user: IUser = JSON.parse(localStorage.getItem('user') as string);

  constructor(
    private http: HttpClient,
    private AFStore: AngularFirestore,
  ) {
  }

  public async create(task: ITask): Promise<DocumentReference> {

    return this.AFStore
      .collection('users')
      .doc(this.user.uid)
      .collection('tasks')
      .add(task);
  }

  public readByDate(date: moment.Moment): Observable<ITask[]> {

    return this.AFStore
      .collection('users')
      .doc(this.user.uid)
      .collection('tasks', ref => ref.where('date', '==', date.format('DD-MM-YYYY')))
      .get()
      .pipe(map(value => value.docs.map(val => <ITask>val.data())));
  }

  public delete(task: ITask): Observable<DocumentReference> {

    return this.AFStore
      .collection('users')
      .doc(this.user.uid)
      .collection('tasks', ref => ref.where('id', '==', task.id))
      .get()
      .pipe(map(value => value.docs[0].ref));
  }
}
