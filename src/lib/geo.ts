type Coordinate = {
  latitude: number;
  longitude: number;
};

const EARTH_RADIUS_KM = 6371;

function toRad(value: number) {
  return (value * Math.PI) / 180;
}

export function distanceKm(from: Coordinate, to: Coordinate) {
  const dLat = toRad(to.latitude - from.latitude);
  const dLon = toRad(to.longitude - from.longitude);
  const lat1 = toRad(from.latitude);
  const lat2 = toRad(to.latitude);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(a));
}

export function projectGermanyPoint(latitude: number, longitude: number) {
  const minLon = 5.6;
  const maxLon = 15.4;
  const minLat = 47.1;
  const maxLat = 55.2;

  const x = ((longitude - minLon) / (maxLon - minLon)) * 100;
  const y = (1 - (latitude - minLat) / (maxLat - minLat)) * 100;

  return {
    x: Math.min(96, Math.max(4, x)),
    y: Math.min(96, Math.max(4, y)),
  };
}
