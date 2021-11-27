export interface video{
    title: string,
    likes: number,
    url: string,
    comments: [{
        username: string,
        body: string
    }],
    _id?: string
}