export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600) // 3600 = 60 segundos * 60 minutos;
  const minutes = Math.floor((duration % 3600) / 60) // quantos minutos sobraram;
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return timeString;
}