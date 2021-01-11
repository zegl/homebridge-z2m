# How it works (in a nutshell)
The plugin listens to the [MQTT messages](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html) published by Zigbee2MQTT.
It detects the devices using the `zigbee2mqtt/bridge/devices` topic.

The device definition provided by Zigbee2MQTT contains a list of exposed attributes, which this plugin uses to determine which HomeKit services and characteristics to expose.

This plugin should work with most lights, switches and sensors.
For more information on which attributes are supported and how they are mapped, please see [supported devices/services](converters.md)

## Availability
This plugin monitors the state of the zigbee2mqtt bridge (`zigbee2mqtt/bridge/state`).
If the bridge is reported to be `offline`, all accessories will also show up as _Not responding_ in HomeKit.

The plugin also monitors the `zigbee2mqtt/[FRIENDLY_NAME]/availability` topics, which can be enabled in zigbee2mqtt with the 
[Availability feature](https://www.zigbee2mqtt.io/information/availability.html).
The state (`online` or `offline`) published to this topic will also be passed through to the accessory, meaning that it will show up as
_Not responding_ in HomeKit, if it is reported to be `offline`.