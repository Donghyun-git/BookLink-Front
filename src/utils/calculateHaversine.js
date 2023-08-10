export const calculateHaversineDistance = (
  currentLocation,
  libraryLocation
) => {
  const earthRadius = 6371;

  const latRad1 = (Math.PI * currentLocation.lat) / 180;
  const lonRad1 = (Math.PI * currentLocation.lng) / 180;
  const latRad2 = (Math.PI * libraryLocation.lat) / 180;
  const lonRad2 = (Math.PI * libraryLocation.lng) / 180;

  const deltaLat = latRad2 - latRad1;
  const deltaLon = lonRad2 - lonRad1;

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(latRad1) *
      Math.cos(latRad2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return Math.round(distance * 10) / 10;
};
