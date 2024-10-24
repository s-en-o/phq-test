import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SubmissionComponent } from './submission/submission.component'
import { EditComponent } from './edit/edit.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Overview page',
    },
    {
        path: 'submission',
        component: SubmissionComponent,
        title: 'Submission page',
    },
    {
        path: 'edit/:id',
        component: EditComponent,
        title: 'Edit page',
    },
]
