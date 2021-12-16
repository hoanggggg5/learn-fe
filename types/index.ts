export enum Align {
    Left = "left",
    Center = "center",
    Right = "right"
}

export interface Column {
    key: string;
    title: string;
    class?: string;
    align?: Align;
}

export interface Filter {
    id: number;
    default: string;
    type?: any;
    title: string;
    transform: string;
}

export enum MusicState {
    Pending = 'pending',
    Active = 'active',
    Deleted = 'deleted',
    Rejected = 'rejected'
}