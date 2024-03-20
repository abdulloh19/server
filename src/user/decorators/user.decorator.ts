import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '../user.model';
import { UserTypeDate } from '../user.interface';

export const User = createParamDecorator((data: UserTypeDate, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest<{user: UserDocument}>();
    const user = request.user
	return data ? user?.[data] : user
});
