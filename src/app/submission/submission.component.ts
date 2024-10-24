import { Component, inject } from '@angular/core'
import { BookmarkService } from '../bookmark.service'
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-submission',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './submission.component.html',
    styleUrl: './submission.component.scss',
})
export class SubmissionComponent {
    BookmarkService = inject(BookmarkService)

    submissionForm = new FormGroup({
        name: new FormControl('', Validators.required),
        url: new FormControl('', Validators.required),
    })

    validation = {
        name: {
            isVisible: false,
            message: '',
        },
        url: {
            isVisible: false,
            message: '',
        },
    }

    titleChecker(name: string | null | undefined) {
        if (name === '' || !name) {
            this.validation.name.isVisible = true
            this.validation.name.message = 'Title can not be empty'
            return false
        }

        return true
    }

    URLChecker(url: string | null | undefined) {
        if (url === '' || !url) {
            this.validation.url.isVisible = true
            this.validation.url.message = 'URL can not be empty'
            return false
        }

        // Making sure url is valid
        const urlRegex = new RegExp(
            /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
        )
        const result = urlRegex.test(url)

        if (!result) {
            this.validation.url.isVisible = true
            this.validation.url.message = 'URL is invalid'
            return false
        }

        // TODO: check if valid url and exist
        // if (result) {
        //     const test = false
        //     return false
        // }

        return true
    }

    // Handle form submission
    handleSubmit(event: Event) {
        event.preventDefault()
        // Hide error messages
        this.validation.name.isVisible = false
        this.validation.url.isVisible = false

        // Validation
        // Title
        const titleResult = this.titleChecker(this.submissionForm.value.name)

        // URL
        const urlResult = this.URLChecker(this.submissionForm.value.url)

        const name = this.submissionForm.value.name
        const URL = this.submissionForm.value.url

        // Valid input
        if (name && URL && titleResult && urlResult) {
            this.handleAdd(name, URL)
        }
    }

    // Handle adding
    handleAdd(name: string, url: string) {
        console.log(name, url)
        this.BookmarkService.handleAddBookmark({
            name,
            url,
        })
    }
}
