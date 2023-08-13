export interface authenticatedUser {
    userId: string;
    userName: string;
    userRoles: any[];
    names: string;
    isAdmin: boolean;
    isPartner: boolean;
}