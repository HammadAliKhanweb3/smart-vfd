import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly SensorsData: "SensorsData";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SensorsDataScalarFieldEnum: {
    readonly id: "id";
    readonly inputVoltage: "inputVoltage";
    readonly inputCurrent: "inputCurrent";
    readonly voltagePhaseOne: "voltagePhaseOne";
    readonly currentPhaseOne: "currentPhaseOne";
    readonly voltagePhaseTwo: "voltagePhaseTwo";
    readonly currentPhaseTwo: "currentPhaseTwo";
    readonly voltagePhaseThree: "voltagePhaseThree";
    readonly currentPhaseThree: "currentPhaseThree";
    readonly vfdTemperature: "vfdTemperature";
    readonly motorTemperature: "motorTemperature";
    readonly motorTorque: "motorTorque";
    readonly motorSpeed: "motorSpeed";
    readonly createdAt: "createdAt";
};
export type SensorsDataScalarFieldEnum = (typeof SensorsDataScalarFieldEnum)[keyof typeof SensorsDataScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
