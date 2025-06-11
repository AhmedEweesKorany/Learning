import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]


    findAll(role?: "INTERN" | "ADMIN" | "ENGINEER") {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {
        const user= this.users.find(user => user.id === id);
        return user ? user : { message: 'This User is not found' };
    }

    create(user: { id: number; name: string; email: string; role: string }) {
        this.users.push(user);
        return user;
    }

    update(id: number, userUpdate: Partial<{ name: string; email: string; role: string }>) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return { message: 'This User is not found' };
        }
        this.users[userIndex] = { ...this.users[userIndex], ...userUpdate };
        return this.users[userIndex];
       
    }


    delete(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return { message: 'This User is not found' };
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return deletedUser[0];
    }


}
