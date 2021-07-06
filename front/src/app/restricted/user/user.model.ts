export interface Meta {
    server: string;
    offset: number;
    limit: number;
}

export interface User {
    id: string;
    nickname: string;
    name: string;
    phone: string;
    email: string;
    user_type_id: string;
    active: Boolean;
    createdAt: Date;
    updatedAt: Date;
}