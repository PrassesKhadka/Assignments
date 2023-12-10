// API's interfaces

export interface IreturnGetStory {
    by:          string;
    descendants: number;
    id:          number;
    kids:        number[];
    score:       number;
    time:        number;
    title:       string;
    type:        string;
    url:         string;
}

export interface IreturnGetComments {
    by:     string;
    id:     number;
    kids?:   number[];
    parent: number;
    text:   string;
    time:   number;
    type:   string;
}
