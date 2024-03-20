import { UserDocument } from './user.model';

export type RoleUser = 'ADMIN' | 'INSTRUCTOR' | 'USER';
export type UserTypeDate = keyof UserDocument;
