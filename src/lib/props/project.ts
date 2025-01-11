export interface CreateProjectProps {
    name: string;
    description?: string
}


export interface ProjectCardProps {
  name: string;
  subtitle?: string;
  coverImg?: string;
  createdAt?: string;
  mediaCount?: number;
}

export interface ProjectInfoProps {
  name: string;
  description?: string;
  assets?: Array<{
    name: string;
    createdAt?: string;
    duration?: string;
    commentsCount?: number;
    isRevision?: boolean;
  }>;
  members?: Array<{
    name: string;
    username?: string;
    email?: string;
    createdAt?: string;
    avatar?: string;
    permissions?: Array<"view" | "upload" | "comment">;
  }>;
}

export interface VideoCardProps {
  name: string;
  uploadDate?: string;
  coverImg?: string;
  duration?: number | string;
}

export interface CommentProps {
  message: string;
  createdAt: string;
  author: {
    name: string;
    username?: string;
    avatar?: string;
  };
  response: {
    message: string;
    createdAt: string;
    author: {
      name: string;
      username?: string;
      avatar?: string;
    };
  };
  timestamp: number;
}

export interface VideoData {
  project: {
    id: string;
    name: string;
    comments?: Array<CommentProps>;
  };
}
