import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async byId(id: string) {
		const user = await this.userModel.findById(id);

		if (!user) throw new NotFoundException('User not Found');

		return user;    
	}
}
