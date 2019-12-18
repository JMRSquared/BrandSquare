interface Post {
    id: string,
    brandId?: string | null,
    brand?: Brand | null | any,
    createdAt?: Date,
    dislikes?: number,
    img?: string,
    likes?: number,
    message?: string,
    shares?: number,
    tags?: string[],
    updatedAt?: Date,
    views?: number
}

interface Brand {
    name?: string,
    logo?: string,
    hasStory?: boolean
}