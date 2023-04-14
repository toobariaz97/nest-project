import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class posts{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    description:string

    @Column({default:new Date()})
    creartedAt:Date;

    
}