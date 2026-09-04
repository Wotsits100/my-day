# My Day — Polished Release

This is the polished, iPad-friendly release. It keeps the same local database and backup format as the previous working version, so existing diary entries remain compatible.

# My Day — finished PWA

My Day is an installable, child-friendly voice diary.

## Included
- Real microphone recording
- Emoji feelings
- Drawing canvas
- Optional typed note
- Diary timeline with playback
- Delete individual entries
- Local IndexedDB storage for audio and diary content
- Personal name/nickname
- Gender-neutral custom character creator
- Six theme/vibe choices
- Parent area with changeable PIN
- Parent controls for drawings, notes and On This Day
- On This Day memories
- Private JSON backup export
- Installable PWA manifest and service worker
- Works offline after first load

## Important
This package is a complete browser/PWA app, not a signed Apple App Store binary.
To use microphone recording on iPhone, it should be served over HTTPS (or localhost). A simple static web host is enough.

For a public App Store release aimed at children, additional work is still required: Apple developer signing, App Store submission, privacy disclosures, child-safety review, accessibility testing, device testing, and production-grade secure backup/account infrastructure if cloud sync is desired.


## Version 2 update
- Fixed the stacked emoji character display
- New gender-neutral illustrated character builder
- Skin tone, hair style/colour, clothes colour and accessory choices
- Proper My Day Home Screen icon
- Improved iPad/tablet layout
- Stronger backup reminder
- Updated offline cache so installed devices receive the new version

## Version 2.1
- Adds **Restore diary from backup** in the Parent Area.
- Restores diary entries, voice recordings, drawings, feelings, notes and profile/settings from `my-day-backup.json`.
- Uses an atomic IndexedDB replacement so a failed restore does not leave a half-restored diary.
- Improves service-worker updating so future GitHub Pages changes are less likely to remain stuck on an old cached version.

- Home character sizing adjusted to fit neatly inside its circle.


Final polish: centred and resized the small header/diary avatar so it stays fully inside its circular frame on iPhone and iPad.
