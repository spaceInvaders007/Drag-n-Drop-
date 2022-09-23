export type Book = {
    id: string;
    author: string;
    title: string;
    publisherSummary: string;
    imageUrl: string;
    isHidden: boolean;
};

export type Visibility = 'visible' | 'hidden'