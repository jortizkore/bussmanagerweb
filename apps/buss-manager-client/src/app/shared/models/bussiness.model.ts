export interface Bussiness {
    id?: string,
    bussinessName: string,
    phoneNumber?: string,
    address: string,
    RNC?: string,
    isActive: boolean
    ownerId: string | undefined
    createdAt?: string,
    updatedAt?: string

}

export interface ProductType {
    id?: number | null
    typeName: string | null
    createdAt?: Date
    updatedAt?: Date
}