import { CharacteristicGetCallback, CharacteristicSetCallback, Logger, Service } from 'homebridge';
import { ExposesEntry } from '../z2mModels';

export interface BasicAccessory {
    readonly log: Logger;
    readonly displayName: string;
    readonly isOnline: boolean;

    getOrAddService(service: Service): Service;

    queueDataForSetAction(data: Record<string, unknown>): void;

    queueKeyForGetAction(key: string | string[]): void;

    isPropertyExcluded(property: string | undefined): boolean;

    isValueAllowedForProperty(property: string, value: string): boolean;

    registerServiceHandler(handler: ServiceHandler): void;

    isServiceHandlerIdKnown(identifier: string): boolean;

    characteristicCallbackForOnlineState(cb: CharacteristicGetCallback): void;

    callSetCallbackWithOnlineState(cb: CharacteristicSetCallback): void;
}

export interface ServiceHandler {
    identifier: string;
    getableKeys: string[];
    updateState(state: Record<string, unknown>): void;
}

export interface ServiceCreator {
    createServicesFromExposes(accessory: BasicAccessory, exposes: ExposesEntry[]): void;
}
