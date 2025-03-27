export interface ProjectVideoType {
  documentId: string;
  name: string;
  source: "local" | "bunny" | string;
  videoUrl?: string;
  video?: { url: string };
  duration?: string;
  createdAt: string;
  thumbnail?: { url: string };
  project: { documentId: string; name: string };
}

export interface VideoCommentType {
  createdAt: string;
  message: string;
  response?: string;
  minutes?: number;
  seconds?: number;
  author: {
    name: string;
    username?: string;
    avatar?: { url: string };
  };
  respondedBy?: {
    name: string;
    username?: string;
    avatar?: { url: string };
  };
  updatedAt?: string;
}

export interface SingleProjectState {
  id?: number;
  documentId: string;
  name: string;
  description?: string;
  status?: "draft" | "published" | "archived";
  thumbnail?: { url: string };
  videosCount?: number;
  createdAt?: string;
  members?: ProjectMemberType[];
  author: ProjectMemberType;
}

export interface ProjectsState {
  loading: boolean;
  projects: Array<SingleProjectState>;
}

export interface ProjectMemberType {
  documentId: string;
  name?: string;
  username: string;
  email: string;
  createdAt?: string;
  avatar?: { url: string };
  permissions?: Array<"view" | "upload" | "comment">;
}

export interface ProjectInfoType {
  documentId: string;
  name: string;
  description?: string;
  videos: ProjectVideoType[];
  members: ProjectMemberType[];
  subscription?: { revisionsLeft: number };
}

export interface ProjectAssetType {
  documentId: string;
  name: string;
  project: { documentId: string };
  createdAt: string;
  uploadedBy: {
    username: string;
    avatar?: { url: string };
    name?: string;
    email: string;
  };
  assets: Array<{
    name: string;
    url: string;
    size?: number;
  }>;
  approvalStatus:
    | "pending"
    | "reviewing"
    | "approved"
    | "rejected"
    | "uploading"
    | "pending upload"
    | "just uploaded";
  uploadProgress?: number;
  onRemoveFileFromStack: () => void;
}

export interface InviteType {
  project: { documentId: string; name: string };
  documentId: string;
  userEmail: string;
}
