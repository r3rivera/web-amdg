export interface InboxMessage{
    messageId: string;
    firstName: string;
    lastName: string;
    sender: string;
    channel: Channel;
    subject?: string;
    date: string;
    category?: string;
    state: MessageState;
}

export interface InboxMessageDetails extends InboxMessage{
    messageBody: string;
}

export interface InboxMessageResponse{
    messageId: string;
    response: string;
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