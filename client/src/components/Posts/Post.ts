import Comment from './Comment';

export default class Post {
    public _title: string;
    private _id: string;
    public _body: string;
    private _comments: Comment[] | null | undefined;
    public _createdAt: string;
    private _updatedAt: string;

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
    public get comments(): Comment[] | null | undefined {
        return this._comments;
    }
    public set comments(value: Comment[] | null | undefined) {
        this._comments = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get body(): string {
        return this._body;
    }
    public set body(value: string) {
        this._body = value;
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

    constructor(post: {
        id: string;
        title: string;
        body: string;
        created_at: string;
        updated_at: string;
        comments: Comment[];
    }) {
        this._title = post.title;
        this._body = post.body;
        this._id = post.id;
        this._createdAt = post.created_at;
        this._updatedAt = post.updated_at;
        this._comments = post.comments;
    }
}
