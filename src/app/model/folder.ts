interface IFolderInfo {
  kind: string;
  id: string;
  name: string;
  mimeType: string;
}

interface IFile {
  id?: string;
  folderId?: string;
  fileName?: string;
  latitude?: number;
  longitude?: number;
  isPending?: boolean;
  isStray?: boolean;
  isNoDog?: boolean;
  isChained?: boolean;
  uncertainCount?: number;
  notNeuteredCount?: number;
  neuteredCount?: number;
  maleDogCount?: number;
  description?: string;
  contact?: string;
  createEpochDate?: number;
  updateEpochDate?: number;
}

export { IFolderInfo, IFile };
