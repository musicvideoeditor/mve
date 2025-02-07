export interface ProjectVideoType {
  documentId: string;
  name: string;
  source: "local" | "bunny" | string;
  videoUrl?: string;
  video?: { url: string };
  duration?: string;
  createdAt: string;
  thumbnail?: { url: string };
}

export interface ProjectMemberType {
  name?: string;
  username: string;
  email: string;
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
    size?: string;
  }>;
  approvalStatus: "pending" | "reviewing" | "approved" | "rejected";
}
