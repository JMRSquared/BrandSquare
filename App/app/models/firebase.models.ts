interface Post {
    id: string,
    brandId?: string | null,
    brand?: Brand | null,
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