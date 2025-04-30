Precondition:
Node should be installed
NPM should be installed
Java JDK should be installed

For Appium:
-Android studio needs to be installed ( Set ANDROID_HOME path (Under user variables)
-Appium inspector ( https://github.com/appium/appium-inspector/releases)
-Appium installation( npm install -g Appium               To check the version: appium --version)
-Install Appium doctor(npm install appium-doctor -g)
-Appium drivers ( to check drivers list : appium driver list) ( appium driver install uiautomator2)
-To check the list of avds: emulator -list-avds  
-To select a particular avd: emulator -avd Pixel_7 
-ESLint: https://www.npmjs.com/package/eslint-plugin-wdio
-To Start Appium server: We need to open Terminal & give command "appium" 

To get sample apks for testing
https://github.com/appium/appium/tree/master/packages/appium/sample-code/apps

webdriver IO setup:
-Open terminal
-mkdir "foldername"
-cd "foldername"
- npm init -y

-Add the capabilities under wdio.config.js as per device( Android/iOS)
-Add the test file which needs to be executed under "Specs" in wdio.config.js  ( specs: './test/specs/**/*.js')

To run the tests: npx wdio (Command needs to be used)
-Appium server and Android studio( with virtual device enabled) needs to be started
-Capabilities need to be set in Appium inspector as well

