import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    // Repo is going to be an instance of a typeorm repository that deals with user instances
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    create(name: string, age: number, sex: string, title: string, department: string,
        employment_type: string, email: string, password: string
    ) {
        //create method creates an instance of the user entity
        const user = this.repo.create({
            name,
            age,
            sex,
            title,
            department,
            employment_type,
            email,
            password
        })

        //save method actually save the user entitly assigned values to the DB
        return this.repo.save(user);
    }

    findOne(id: number){
        return this.repo.findOne({where: {id}})
    }

    find(email: string){
        return this.repo.find({where: {email}})
    }

    //attrs mean in the user object we can provides any property already present there and overwrite it
    async update(id: number, attrs: Partial<User>){
        const user = await this.findOne(id);

        if(!user){
            throw new NotFoundException('User not found')
        }

        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number){
        const user = await this.findOne(id);

        if (!user){
            throw new NotFoundException('User to delete not found')
        }

        return this.repo.remove(user);
    }
}
