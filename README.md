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
