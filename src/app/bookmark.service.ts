import { Injectable } from '@angular/core'
import { Bookmark } from './bookmark'

@Injectable({
    providedIn: 'root',
})
export class BookmarkService {
    // List of bookmarks
    bookmarks: Bookmark[] = []

    // Get all bookmarks
    handleGetAllBookmarks(): Bookmark[] {
        return this.bookmarks
    }

    // Adding bookmark
    handleAddBookmark(bookmark: Bookmark) {
        this.bookmarks.push(bookmark)

        // localStorage.setItem('bookmarks', this.bookmarks)

        // console.log(bookmark)
    }

    // Handle deleting bookmark
    handleDeleteBookmark(bookmarkName: string) {
        this.bookmarks = this.bookmarks.filter(
            (bookmark) => bookmark.name !== bookmarkName
        )
    }

    // Handle edit bookmark
    handleEditBookmark(id: string) {
        return this.bookmarks.find((bookmark) => bookmark.id === id)
    }

    // Handle updating bookmark
    handleUpdateBookmark(payload: { id: string; name: string; url: string }) {
        const item = this.bookmarks.find(
            (bookmark) => bookmark.id === payload.id
        )

        // TODO: No bookmark found
        if (!item) return

        item.name = payload.name
        item.url = payload.url
    }
}
