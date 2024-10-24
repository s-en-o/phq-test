import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Bookmark } from '../bookmark'
import { BookmarkService } from '../bookmark.service'

@Component({
    selector: 'app-edit',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './edit.component.html',
    styleUrl: './edit.component.scss',
})
export class EditComponent {
    route = inject(ActivatedRoute)
    bookmarkService = inject(BookmarkService)
    bookmark: Bookmark | undefined

    updateForm = new FormGroup({
        name: new FormControl(''),
        url: new FormControl(''),
    })

    handleSubmit(event: Event) {
        event.preventDefault()

        console.log(
            this.route.snapshot.params['id'],
            this.updateForm.value.name,
            this.updateForm.value.url
        )

        // TODO: Validate if form is empty or not
        if (!this.updateForm.value.name || !this.updateForm.value.url) return

        this.bookmarkService.handleUpdateBookmark({
            id: this.route.snapshot.params['id'],
            name: this.updateForm.value.name,
            url: this.updateForm.value.url,
        })
    }

    constructor() {
        // TODO: Validate if no bookmark found
        this.bookmark = this.bookmarkService.handleEditBookmark(
            this.route.snapshot.params['id']
        )

        if (!this.bookmark) return

        this.updateForm.setValue({
            name: this.bookmark.name,
            url: this.bookmark.url,
        })
    }
}
