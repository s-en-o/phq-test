import { Component } from '@angular/core'

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
    bookmarks: Bookmark[] = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'YouTube', url: 'https://www.youtube.com' },
        { name: 'Wikipedia', url: 'https://www.wikipedia.org' },
    ]
}
