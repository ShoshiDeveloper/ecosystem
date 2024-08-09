import type { BadgeType } from "./BadgeType"

export type ProjectType = {
    name: string,
    description: string,
    stack: Array<BadgeType>,
    links?: ProjectLinksType
}

export type ProjectLinksType = {
    playmarket?: string,
    appstore?: string,
    web?: string,
    github?: string
}