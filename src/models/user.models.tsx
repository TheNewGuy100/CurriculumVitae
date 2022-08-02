export class Roles {
    user!: boolean;
    admin!: boolean;
}

export class userInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    roles!: Roles
}