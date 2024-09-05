
# LightspeedAssignment

This project demonstrates an order screen built using the Storybook template for Expo. The project follows the principles of Atomic Design and leverages Storybook for component development and testing. The UI has been tested on an iPhone 15 emulator running iOS 17.5 and Android Pixel 5 with API 34. Additionally, a shimmer placeholder is used during API calls to enhance the user experience by displaying a loading animation until data is fully fetched.

## Running the App

To start the Expo development server, use:

```sh
yarn start
```

## Storybook - On-Device

This template integrates **Storybook** for on-device component development and testing. To start Storybook on your device or emulator, use the following commands:

```sh
# Start Storybook on any device/emulator
yarn storybook

# For iOS
yarn storybook:ios

# For Android
yarn storybook:android
```
## Project Structure

This project follows the **Atomic Design** methodology, which breaks down the UI into smaller, reusable components:

- **Atoms:** Basic UI element that cannot be broken down into subcomponents  - Text, 
- **Molecules:** Combinations of atoms that work together - Items row, button with text, counter.
- **Organisms:** Larger, more complex components made up of atoms and molecules - Item list.
- **Containers:** Screens combining organisms with business logic.

## Shimmer Placeholder

During API calls, a **shimmer effect** is used as a placeholder for loading content. This provides users with a visual indication that data is being fetched and improves the overall user experience.

## Tested Devices

The order screen and its components have been tested in the following environments:

- **iPhone 15 Emulator** running **iOS 17.5**
- **Android Pixel 5 Emulator** running **API 34**

## Conclusion

This project showcases the power of component-based development using **Storybook** within Expo projects, following **Atomic Design** principles. With its responsive design, loading placeholders, and fully tested UI across iOS and Android, it provides a solid foundation for developing scalable and maintainable apps.
