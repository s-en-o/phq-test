import { Component } from '@angular/core'

interface Bookmark {
    name: string
    url: string
}

@Component({
    selector: 'app-submission',
    standalone: true,
    imports: [],
    templateUrl: './submission.component.html',
    styleUrl: './submission.component.scss',
})
export class SubmissionComponent {
    bookmarks: Bookmark[] = []

    handleAdd() {
        console.log('Adding bookmark...')
    }
}
