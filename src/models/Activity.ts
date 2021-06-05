import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { CourseUnit } from './CourseUnit';

@Entity("activities")
class Activity {

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  activity_date: Date;
  
  @Column()
  course_unit_id: string;

  @CreateDateColumn()
  created_at: Date;

  @JoinColumn({ name: "course_unit_id" })
  @ManyToOne(() => CourseUnit)
  course_unit: CourseUnit;
}

export { Activity };
