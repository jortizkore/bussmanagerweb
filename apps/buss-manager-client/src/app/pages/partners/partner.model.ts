export interface Partner {
    id?: string,
    names: string,
    lastName: string,
    idNumber: string,
    phoneNumber: string,
    address: string,
    loginUser?: string,
    isActive: boolean,
    bussinesses?: any[], // TODO set bussiness type to this property once it gets created
    createdAt?: string,
    updatedAt?: string
}