import { PrimaryGeneratedColumn, Entity, Column, AfterInsert, AfterRemove } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    sex: string;

    @Column()
    title: string;

    @Column()
    department: string;

    @Column()
    employment_type: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted user with id: ', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Remove user with id: ', this.id);
        
    }
}