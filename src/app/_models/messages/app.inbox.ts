export interface InboxMessage{
    firstName: string;
    lastName: string;
    channel: Channel;
    subject?: string;
    date: string;
    category?: string;
    state: MessageState;
}

export enum Channel{
    EMAIL = "email",
    ONLINE = "online",
    MOBILE = "mobile"
}

export enum MessageState{
    READ = "read",
    UNREAD = "unread",
    RESPONDED = "responded",
}