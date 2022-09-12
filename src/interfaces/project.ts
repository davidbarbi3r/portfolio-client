export default interface IProject {
    id: number,
    name: string,
    descriptionEN: string,
    descriptionFR: string,
    dateStarted: string,
    stack: string[],
    featured: boolean,
    imgSmall: string,
    imgWide: string,
    github: string,
    live: string,
    skills: string[]
}