import { Component, inject } from '@angular/core'
import { BookmarkService } from '../bookmark.service'

interface Bookmark {
    name: string
    url: string
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    BookmarkService = inject(BookmarkService)
    // List of bookmarks
    bookmarks: Bookmark[] = []

    // Handle deleting bookmark
    handleDeleteBookmark(bookmarkName: string) {
        this.bookmarks = this.bookmarks.filter(
            (bookmark) => bookmark.name !== bookmarkName
        )
    }

    constructor() {
        this.bookmarks = this.BookmarkService.handleGetAllBookmarks()
    }
}
