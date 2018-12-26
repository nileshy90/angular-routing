import { Routes } from '../../node_modules/@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './other/about/about.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

export const AppRoutes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'sign-in',
        component : SignInComponent
    },
    {
        path : 'sign-up',
        component : SignUpComponent
    },
    {
        path : 'forgot-password',
        component : ForgotPasswordComponent
    },
    {
        path : 'reset-password',
        component : ResetPasswordComponent
    }
];