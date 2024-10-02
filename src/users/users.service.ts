import { Injectable } from '@nestjs/common';
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

        return this.repo.save(user);
    }
}
