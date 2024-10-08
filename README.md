# BMI_Rechner

## Technische Voraussetzungen (Nur für Windows Betriebssysteme)
Damit Sie nach dem Klonen dieses Script ausführen können, benötigen Sie folgende Programme:
- WSL
- NodeJS
- npm
- promptSync library

## Warum muss man eine extra Library in der Repository installieren?
Der Hintergrund ist, da diese Library separat, nach dem Klonen, in der Repository installiert werden muss, damit der Userinput mit NodeJS funktioniert.

## WSL (Windows Subsystem für Linux) installation
```shell
wsl --install
```
- [Doku zur Shell](https://learn.microsoft.com/en-us/windows/wsl/)
- Ubuntu ist die Standard Distribution (Stand: 30.09.2024)

## NodeJS auf WSL installieren
```shell
sudo apt install nodejs
```

## prompt-sync Library installation
```shell
npm install prompt-sync
```
- [Verlinkung zu der Library](https://www.npmjs.com/package/prompt-sync?activeTab=readme)
- npm ist schon bei NodeJS dabei

## Ausführung des Scripts
```shell
node bmiRechner.mjs
```