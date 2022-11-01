---
title: "SONOFF ZBDongle-E Homebridge/HomeKit integration"
description: "Add HomeKit support to your SONOFF ZBDongle-E, using Homebridge, Zigbee2MQTT and homebridge-z2m."
---
<!---
This file has been GENERATED using src/docgen/docgen.ts
DO NOT EDIT THIS FILE MANUALLY!
-->
# SONOFF ZBDongle-E
> Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware


# Unsupported

This device is currently *UNSUPPORTED*.
Want to have this device supported? Please check the [GitHub issue section](https://github.com/itavero/homebridge-z2m/issues?q=ZBDongle-E) to see if a request already exists for this device.
If it doesn't exist yet, you can [open a new request](https://github.com/itavero/homebridge-z2m/issues/new?assignees=&labels=enhancement&template=device_support.md&title=%5BDevice%5D+SONOFF+ZBDongle-E) by filling in the _Device support_ issue template.

## Exposes

This is the information provided by Zigbee2MQTT for this device:

```json
[
  {
    "type": "numeric",
    "name": "light_indicator_level",
    "property": "light_indicator_level",
    "access": 1,
    "description": "Brightness of the indicator light"
  },
  {
    "type": "numeric",
    "name": "linkquality",
    "property": "linkquality",
    "access": 1,
    "unit": "lqi",
    "description": "Link quality (signal strength)",
    "value_min": 0,
    "value_max": 255
  }
]
```

# Related
* [Other devices from SONOFF](../index.md#sonoff)
* [Zigbee2MQTT documentation for this device](https://www.zigbee2mqtt.io/devices/ZBDongle-E.html)