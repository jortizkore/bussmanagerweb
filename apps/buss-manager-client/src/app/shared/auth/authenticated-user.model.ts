export interface authenticatedUser {
    id?: string;
    userId?: string;
    partnerId: string;
    userName?: string;
    userRoles?: any[];
    adminName?: string;
    names?: string;
    isAdmin?: boolean;
    isPartner?: boolean;
}