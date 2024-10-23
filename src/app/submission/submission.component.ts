import { Component, inject } from '@angular/core'
import { BookmarkService } from '../bookmark.service'

@Component({
    selector: 'app-submission',
    standalone: true,
    imports: [],
    templateUrl: './submission.component.html',
    styleUrl: './submission.component.scss',
})
export class SubmissionComponent {
    BookmarkService = inject(BookmarkService)

    handleAdd(event: Event) {
        event.preventDefault()

        console.log('Adding bookmark...')

        this.BookmarkService.handleAddBookmark({
            name: 'test',
            url: 'https://test.com',
        })
    }
}
