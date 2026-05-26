const STAR_RATING_DEFAULT_MAX = 5;
const STAR_RATING_ABSOLUTE_MAX = 10;
function getStarRatingMaxFromSettings(settings) {
  const raw = settings?.maxStars;
  const parsed = typeof raw === "number" ? raw : raw != null ? Number(raw) : NaN;
  if (!Number.isFinite(parsed) || parsed < 1)
    return STAR_RATING_DEFAULT_MAX;
  return Math.min(STAR_RATING_ABSOLUTE_MAX, Math.max(1, Math.floor(parsed)));
}
function isValidStarRatingValue(value, maxStars) {
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= maxStars;
}
const VIDEO_RECORDING_DEFAULT_MAX_DURATION_SECONDS = 60;
const VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS = 120;
function getVideoRecordingMaxDurationSeconds(settings) {
  const rawDuration = settings?.maxDurationSeconds;
  const duration = typeof rawDuration === "number" ? rawDuration : rawDuration != null ? Number(rawDuration) : NaN;
  if (!Number.isFinite(duration) || duration <= 0) {
    return VIDEO_RECORDING_DEFAULT_MAX_DURATION_SECONDS;
  }
  return Math.min(Math.round(duration), VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS);
}

export { VIDEO_RECORDING_PLATFORM_MAX_DURATION_SECONDS as V, getVideoRecordingMaxDurationSeconds as a, VIDEO_RECORDING_DEFAULT_MAX_DURATION_SECONDS as b, getStarRatingMaxFromSettings as g, isValidStarRatingValue as i };
//# sourceMappingURL=video-recording-settings-DX6acopI.js.map
