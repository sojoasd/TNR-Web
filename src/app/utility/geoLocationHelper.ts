import { IMapCenterPointInfo, IClientFile } from "../model/map";

const getCenterPoint = (ary: IClientFile[]): IMapCenterPointInfo => {
  const latNotExist = ary.some(s => !s.latitude || s.latitude === null);
  const lonNotExist = ary.some(s => !s.longitude || s.longitude === null);

  if (latNotExist || lonNotExist) return null;

  var x = ary.map(x => x.latitude);
  var y = ary.map(x => x.longitude);
  var cx = (Math.min(...x) + Math.max(...x)) / 2;
  var cy = (Math.min(...y) + Math.max(...y)) / 2;

  ary.sort((a, b) => {
    const a_diff = Math.abs(calculateDistance({ lat1: a.latitude, lon1: a.longitude, lat2: cx, lon2: cy }));
    const b_diff = Math.abs(calculateDistance({ lat1: b.latitude, lon1: b.longitude, lat2: cx, lon2: cy }));

    return a_diff - b_diff;
  });

  const center: IMapCenterPointInfo = {
    latitude: ary[0].latitude,
    longitude: ary[0].longitude
  };

  return center;
};

const calculateDistance = ({ lat1, lon1, lat2, lon2 }) => {
  const R = 6371; // km (change this constant to get miles)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return Math.round(d * 1000);
};

export { getCenterPoint };
