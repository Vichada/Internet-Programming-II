import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    createUser(body: createUserDto): Promise<User>;
    getUser(username: string): Promise<User | null>;
    updateUser(username: string, body: {
        username: string;
        email: string;
        password: string;
    }): Promise<User | null>;
    deleteUser(username: string): Promise<import("typeorm").DeleteResult>;
}
