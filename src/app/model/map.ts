interface IMapCenterPointInfo {
  title?: string;
  latitude: number;
  longitude: number;
  zoom?: number;
}

interface IFile {
  id?: string;
  title?: string;
  folderId?: string;
  icon?: any;
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
  isDBExist?: boolean;
}

interface IFileListCheckWithDB {
  id: string;
  fileName: string;
  isDBExist: boolean;
  fileInfo?: IFile;
}

export { IMapCenterPointInfo, IFileListCheckWithDB, IFile };
