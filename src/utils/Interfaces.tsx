export interface Chatter {
    display_name: string
    id: string
    login: string
    profile_image_url: string
    type: keyof typeof ChatterType
}

export enum ChatterType {
    "normal" = "Viewer",
    "vip" = "VIP",
    "moderator" = "Moderator",
    "banned" = "Banned",
}
