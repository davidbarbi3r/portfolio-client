import IProject from "./project";

export default interface IArticle {
    authorId: string | undefined | null
    // project?: IProject
    date: Date
    title?: string
    body: string
}