export interface Posts {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface Reactions {
  likes: number;
  dislikes: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPosts(json: string): Posts {
    return JSON.parse(json);
  }

  public static postsToJson(value: Posts): string {
    return JSON.stringify(value);
  }
}
