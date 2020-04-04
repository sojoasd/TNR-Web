interface IMapCenterPointInfo {
  title?: string;
  latitude: number;
  longitude: number;
  zoom?: number;
}

interface Icon {
  url: string;
  selected: boolean;
}

interface IFile {
  id?: string;
  title?: string;
  folderId?: string;
  icon?: Icon;
  fileName?: string;
  latitude?: number;
  longitude?: number;
  isPending?: boolean; //待處理
  isStray?: boolean; //野犬
  isNoDog?: boolean; //無狗
  isChained?: boolean; // 鍊養
  uncertainCount?: number; //不確定
  notNeuteredCount?: number; //未紮母
  neuteredCount?: number; //已紮母
  maleDogCount?: number; //公狗
  description?: string; //說明
  contact?: string; //聯絡方式
  createEpochDate?: number;
  updateEpochDate?: number;
  isDBExist?: boolean;
}

interface IFileListCheckWithDB {
  id: string;
  fileName: string;
  isDBExist: boolean;
  fileInfo?: IFile;
  selected?: boolean;
}

export { IMapCenterPointInfo, IFileListCheckWithDB, IFile };
