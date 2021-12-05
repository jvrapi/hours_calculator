import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Activity } from './Activity'

@Entity('users')
class User {
  @PrimaryColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @OneToMany(() => Activity, activities => activities.user)
  activities: Activity[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
export { User }
