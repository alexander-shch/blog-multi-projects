import { SetMetadata } from '@nestjs/common';

// Our app is api based and all of the request are behind auth
// We set the app as auth required and setting public only on a selected few endpoints
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
