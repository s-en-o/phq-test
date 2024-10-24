import { Component, inject } from '@angular/core'
import { BookmarkService } from '../bookmark.service'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterModule } from '@angular/router'

interface Bookmark {
    name: string
    url: string
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    BookmarkService = inject(BookmarkService)
    // List of bookmarks
    bookmarks: Bookmark[] = []
    items: Bookmark[] = []
    list: Bookmark[][] = []

    // Handle deleting bookmark
    handleDeleteBookmark(bookmarkName: string) {
        this.items = this.items.filter(
            (bookmark) => bookmark.name !== bookmarkName
        )
    }

    pageLength = 1
    currentPage = 1
    limit = 20
    startingAt = 0

    prevPage() {
        // Decreased page when only
        // When it's not on the first page
        if (this.currentPage > 1) {
            this.currentPage--
        }

        // Starting item index is the limit times
        // The previous page (current page minus one)
        let start = this.limit * (this.currentPage - 1)
        // End page is starting page plus the limit items count
        let end = start + this.limit

        this.items = this.bookmarks.slice(start, end)
    }

    nextPage() {
        // Preventing going further than the page length
        if (this.currentPage === this.pageLength) return
        // For the first page starting from index 0
        // Plus the limit count
        let start = this.limit
        let end = start + this.limit
        // For subsequent pages
        // Starting from the limit count times the current page
        // And end at starting page plus the limit count
        if (this.currentPage > 1) {
            start = this.limit * this.currentPage
            end = start + this.limit
        }

        this.items = this.bookmarks.slice(start, end)
        this.currentPage++
    }

    constructor() {
        this.bookmarks = this.BookmarkService.handleGetAllBookmarks()
        this.pageLength = Math.ceil(this.bookmarks.length / this.limit)
        this.items = this.bookmarks.slice(0, this.limit)
    }
}
