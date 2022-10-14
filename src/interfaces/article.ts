export default interface IArticle {
    authorId: string | undefined | null | IAuthor
    tags?: string
    // project?: IProject
    date: Date
    title?: string
    body: string
    description?: string
    images?: string
}

interface IAuthor {
    _id: string
    uid: string
    name: string
}

export interface IArticleFetched extends IArticle {
    _id: string
    authorId: IAuthor
    createdAt: Date
    updatedAt: Date
}