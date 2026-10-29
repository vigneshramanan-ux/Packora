# Packora – Android app (prototype build)

The Packora prototype wrapped as an Android app with Capacitor.
App id: `com.packora.app` (change it in `capacitor.config.json` and `android/app/build.gradle` BEFORE publishing; it can never change after release).

## Option 1: Build the APK in the cloud (no Android Studio needed)
1. Create a free GitHub account and a new private repository.
2. Upload this whole folder to it (or `git init`, `git add .`, `git commit`, `git push`).
3. Open the repository's **Actions** tab, run **Build Packora APK** (it also runs on every push).
4. When it finishes (about 5 minutes), open the run and download the **Packora-debug-apk** artifact. Unzip it to get `app-debug.apk`.

## Option 2: Build on your computer
Install Node 20+, JDK 21 and Android Studio (it installs the Android SDK).
```
npm ci
npx cap sync android
cd android
./gradlew assembleDebug        # Windows: gradlew.bat assembleDebug
```
The APK is at `android/app/build/outputs/apk/debug/app-debug.apk`.
Or run `npx cap open android` and press Run in Android Studio with a phone connected.

## Install on your phone
1. Copy `app-debug.apk` to the phone (USB, Drive, WhatsApp to yourself).
2. Open it. Allow "Install unknown apps" for that app when Android asks.
3. Open Packora.

## What this build is
A working prototype: all screens, animations, touch gestures and themes. Data is kept in memory only, and sign-in, codes and sharing links are simulated. It is NOT ready for the Play Store until the backend is connected.

## Before the Play Store
- Backend: real sign-in (Google, phone OTP, email) and saved/shared lists, for example Firebase.
- Push reminders: add `@capacitor/local-notifications` (inexact scheduling, ask permission on Android 13+).
- Publish a privacy policy page and an account-deletion page; fill in the Data safety form.
- Change the app id, set version numbers, create a release keystore and build a signed bundle: `npm run bundle`.
- New personal developer accounts need 12 testers for 14 days before production.

## Updating the app design
Replace `www/index.html` with the new prototype build, then `npx cap sync android`.
Icons and splash: edit images in `resources/`, then `npm run assets`.
