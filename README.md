# Bitfocus Companion Module for Internet Clicker

This module allows you to control Internet Clicker (and Cliqer) presentations directly from Bitfocus Companion using the SignalR event code methodology.

## Getting Started (Loading in Companion)

To use this module in Bitfocus Companion:

1. Download the `internetclicker-internetclickerremote-2.0.6.tgz` file from the root of this repository.
2. Open the Bitfocus Companion GUI.
3. Go to the **Modules** tab.
4. Click the yellow **Import module package** button (as seen at the top of the Manage Modules page).
5. Select the `.tgz` file you just downloaded.
6. Once imported, go to the **Connections** tab, search for `Internet Clicker`, and click Add.
7. Fill out the configuration field using your Event Code.

## Configuration

When adding this module in Companion, you will need to provide the following details:

* **Event Code**: The unique pairing code used for your presentation. This is available as the variable `$(internetclicker:eventCode)` for use in button labels or other modules.

## Available Actions

* **Next Slide**: Advances the presentation to the next slide.
* **Previous Slide**: Goes back one slide.
* **Start Timer**: Starts the presentation timer.
* **Pause Timer**: Pauses the presentation timer.
* **Stop Timer**: Stops the presentation timer.

## Feedbacks

* **Connection Status**: Shows whether the module is connected to the Internet Clicker service. Apply this feedback to any button — it will turn **green** when connected and **red** when disconnected.
