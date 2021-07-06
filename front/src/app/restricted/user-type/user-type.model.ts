export interface Meta {
    server: string;
    offset: number;
    limit: number;
}

export interface UserType {
    id: string;
    description: string;
    active: Boolean;
    createdAt: Date;
    updatedAt: Date;
}