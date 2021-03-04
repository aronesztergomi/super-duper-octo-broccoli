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

export interface searchQuery {
  count: number;
  cx: string;
  inputEncoding: string;
  outputEncoding: string;
  safe: 'off' | 'on';
  searchTerms: string;
  startIndex: number;
  title: string;
  totalResults: string;
}

export interface searchQueries {
  nextPage: searchQuery[];
  previousPage: searchQuery[];
  request: searchQuery[];
}

export interface searchResults {
    searchInformation: searchInformation;
    items: searchResultItem[];
    queries: searchQueries;
}
