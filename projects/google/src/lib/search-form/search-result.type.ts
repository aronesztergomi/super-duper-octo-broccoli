export interface searchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
}

export interface searchResultImageObject {
    src: string;
    width: string;
    height: string;
}

export interface searchResultPerson {
}

export interface searchResultMetatags {
}

export interface searchResultVideoobject {
}

export interface searchResultImage {
    src: string;
}

export interface searchResultPagemap {
    cse_thumbnail: searchResultImageObject;
    imageobject: searchResultImageObject;
    person: searchResultPerson;
    metatags: searchResultMetatags;
    videoobject: searchResultVideoobject;
    cse_image: searchResultImage;
}

export interface searchResultItem {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: searchResultPagemap;
}

export interface searchResults {
    searchInformation: searchInformation;
    items: searchResultItem[];
}
