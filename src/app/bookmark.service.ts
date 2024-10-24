import { Injectable } from '@angular/core'

interface Bookmark {
    name: string
    url: string
}

@Injectable({
    providedIn: 'root',
})
export class BookmarkService {
    // List of bookmarks
    bookmarks: Bookmark[] = [
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google1',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google2',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google3',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google4',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google5',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google6',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
        {
            name: 'Google7',
            url: 'https://www.google.com/',
        },
    ]

    // Get all bookmarks
    handleGetAllBookmarks(): Bookmark[] {
        return this.bookmarks
    }

    // Adding bookmark
    handleAddBookmark(bookmark: Bookmark) {
        this.bookmarks.push(bookmark)

        // localStorage.setItem('bookmarks', this.bookmarks)

        console.log(bookmark)
    }

    // Handle deleting bookmark
    handleDeleteBookmark(bookmarkName: string) {
        this.bookmarks = this.bookmarks.filter(
            (bookmark) => bookmark.name !== bookmarkName
        )
    }
}
