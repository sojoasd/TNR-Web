import { Route } from '@angular/router'

const fallbackRoute: Route = {
    path: '**',
    redirectTo: '/Index', 
    pathMatch: 'full'
}

export { fallbackRoute }