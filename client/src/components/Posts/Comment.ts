export default class Comment {
    private _id: string;
    private _postId: string;
    public _content: string;
    public _createdAt: string;
    private _updatedAt: string;

    public get postId(): string {
        return this._postId;
    }
    public set postId(value: string) {
        this._postId = value;
    }
    public get updated_at(): string {
        return this.formattedDate(this._updatedAt);
    }
    public set updated_at(value: string) {
        this._updatedAt = value;
    }
    public get created_at(): string {
        return this.formattedDate(this._createdAt);
    }
    public set created_at(value: string) {
        this._createdAt = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    private formattedDate(dateISO: string): string {
        const date = new Date(dateISO);
        const hour = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();

        return `${hour} ${month} ${day}, ${year}`;
    }

    constructor(Comment: {
        id: string;
        title: string;
        content: string;
        created_at: string;
        updated_at: string;
        _postId: string;
    }) {
        this._content = Comment.content;
        this._id = Comment.id;
        this._createdAt = Comment.created_at;
        this._updatedAt = Comment.updated_at;
        this._postId = Comment._postId;
    }
}
