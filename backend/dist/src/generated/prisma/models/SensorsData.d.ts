import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SensorsDataModel = runtime.Types.Result.DefaultSelection<Prisma.$SensorsDataPayload>;
export type AggregateSensorsData = {
    _count: SensorsDataCountAggregateOutputType | null;
    _avg: SensorsDataAvgAggregateOutputType | null;
    _sum: SensorsDataSumAggregateOutputType | null;
    _min: SensorsDataMinAggregateOutputType | null;
    _max: SensorsDataMaxAggregateOutputType | null;
};
export type SensorsDataAvgAggregateOutputType = {
    id: number | null;
    inputVoltage: number | null;
    inputCurrent: number | null;
    voltagePhaseOne: number | null;
    currentPhaseOne: number | null;
    voltagePhaseTwo: number | null;
    currentPhaseTwo: number | null;
    voltagePhaseThree: number | null;
    currentPhaseThree: number | null;
    vfdTemperature: number | null;
    motorTemperature: number | null;
    motorTorque: number | null;
    motorSpeed: number | null;
};
export type SensorsDataSumAggregateOutputType = {
    id: number | null;
    inputVoltage: number | null;
    inputCurrent: number | null;
    voltagePhaseOne: number | null;
    currentPhaseOne: number | null;
    voltagePhaseTwo: number | null;
    currentPhaseTwo: number | null;
    voltagePhaseThree: number | null;
    currentPhaseThree: number | null;
    vfdTemperature: number | null;
    motorTemperature: number | null;
    motorTorque: number | null;
    motorSpeed: number | null;
};
export type SensorsDataMinAggregateOutputType = {
    id: number | null;
    inputVoltage: number | null;
    inputCurrent: number | null;
    voltagePhaseOne: number | null;
    currentPhaseOne: number | null;
    voltagePhaseTwo: number | null;
    currentPhaseTwo: number | null;
    voltagePhaseThree: number | null;
    currentPhaseThree: number | null;
    vfdTemperature: number | null;
    motorTemperature: number | null;
    motorTorque: number | null;
    motorSpeed: number | null;
    createdAt: Date | null;
};
export type SensorsDataMaxAggregateOutputType = {
    id: number | null;
    inputVoltage: number | null;
    inputCurrent: number | null;
    voltagePhaseOne: number | null;
    currentPhaseOne: number | null;
    voltagePhaseTwo: number | null;
    currentPhaseTwo: number | null;
    voltagePhaseThree: number | null;
    currentPhaseThree: number | null;
    vfdTemperature: number | null;
    motorTemperature: number | null;
    motorTorque: number | null;
    motorSpeed: number | null;
    createdAt: Date | null;
};
export type SensorsDataCountAggregateOutputType = {
    id: number;
    inputVoltage: number;
    inputCurrent: number;
    voltagePhaseOne: number;
    currentPhaseOne: number;
    voltagePhaseTwo: number;
    currentPhaseTwo: number;
    voltagePhaseThree: number;
    currentPhaseThree: number;
    vfdTemperature: number;
    motorTemperature: number;
    motorTorque: number;
    motorSpeed: number;
    createdAt: number;
    _all: number;
};
export type SensorsDataAvgAggregateInputType = {
    id?: true;
    inputVoltage?: true;
    inputCurrent?: true;
    voltagePhaseOne?: true;
    currentPhaseOne?: true;
    voltagePhaseTwo?: true;
    currentPhaseTwo?: true;
    voltagePhaseThree?: true;
    currentPhaseThree?: true;
    vfdTemperature?: true;
    motorTemperature?: true;
    motorTorque?: true;
    motorSpeed?: true;
};
export type SensorsDataSumAggregateInputType = {
    id?: true;
    inputVoltage?: true;
    inputCurrent?: true;
    voltagePhaseOne?: true;
    currentPhaseOne?: true;
    voltagePhaseTwo?: true;
    currentPhaseTwo?: true;
    voltagePhaseThree?: true;
    currentPhaseThree?: true;
    vfdTemperature?: true;
    motorTemperature?: true;
    motorTorque?: true;
    motorSpeed?: true;
};
export type SensorsDataMinAggregateInputType = {
    id?: true;
    inputVoltage?: true;
    inputCurrent?: true;
    voltagePhaseOne?: true;
    currentPhaseOne?: true;
    voltagePhaseTwo?: true;
    currentPhaseTwo?: true;
    voltagePhaseThree?: true;
    currentPhaseThree?: true;
    vfdTemperature?: true;
    motorTemperature?: true;
    motorTorque?: true;
    motorSpeed?: true;
    createdAt?: true;
};
export type SensorsDataMaxAggregateInputType = {
    id?: true;
    inputVoltage?: true;
    inputCurrent?: true;
    voltagePhaseOne?: true;
    currentPhaseOne?: true;
    voltagePhaseTwo?: true;
    currentPhaseTwo?: true;
    voltagePhaseThree?: true;
    currentPhaseThree?: true;
    vfdTemperature?: true;
    motorTemperature?: true;
    motorTorque?: true;
    motorSpeed?: true;
    createdAt?: true;
};
export type SensorsDataCountAggregateInputType = {
    id?: true;
    inputVoltage?: true;
    inputCurrent?: true;
    voltagePhaseOne?: true;
    currentPhaseOne?: true;
    voltagePhaseTwo?: true;
    currentPhaseTwo?: true;
    voltagePhaseThree?: true;
    currentPhaseThree?: true;
    vfdTemperature?: true;
    motorTemperature?: true;
    motorTorque?: true;
    motorSpeed?: true;
    createdAt?: true;
    _all?: true;
};
export type SensorsDataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SensorsDataWhereInput;
    orderBy?: Prisma.SensorsDataOrderByWithRelationInput | Prisma.SensorsDataOrderByWithRelationInput[];
    cursor?: Prisma.SensorsDataWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SensorsDataCountAggregateInputType;
    _avg?: SensorsDataAvgAggregateInputType;
    _sum?: SensorsDataSumAggregateInputType;
    _min?: SensorsDataMinAggregateInputType;
    _max?: SensorsDataMaxAggregateInputType;
};
export type GetSensorsDataAggregateType<T extends SensorsDataAggregateArgs> = {
    [P in keyof T & keyof AggregateSensorsData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSensorsData[P]> : Prisma.GetScalarType<T[P], AggregateSensorsData[P]>;
};
export type SensorsDataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SensorsDataWhereInput;
    orderBy?: Prisma.SensorsDataOrderByWithAggregationInput | Prisma.SensorsDataOrderByWithAggregationInput[];
    by: Prisma.SensorsDataScalarFieldEnum[] | Prisma.SensorsDataScalarFieldEnum;
    having?: Prisma.SensorsDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SensorsDataCountAggregateInputType | true;
    _avg?: SensorsDataAvgAggregateInputType;
    _sum?: SensorsDataSumAggregateInputType;
    _min?: SensorsDataMinAggregateInputType;
    _max?: SensorsDataMaxAggregateInputType;
};
export type SensorsDataGroupByOutputType = {
    id: number;
    inputVoltage: number;
    inputCurrent: number | null;
    voltagePhaseOne: number | null;
    currentPhaseOne: number | null;
    voltagePhaseTwo: number | null;
    currentPhaseTwo: number | null;
    voltagePhaseThree: number | null;
    currentPhaseThree: number | null;
    vfdTemperature: number | null;
    motorTemperature: number | null;
    motorTorque: number | null;
    motorSpeed: number | null;
    createdAt: Date;
    _count: SensorsDataCountAggregateOutputType | null;
    _avg: SensorsDataAvgAggregateOutputType | null;
    _sum: SensorsDataSumAggregateOutputType | null;
    _min: SensorsDataMinAggregateOutputType | null;
    _max: SensorsDataMaxAggregateOutputType | null;
};
type GetSensorsDataGroupByPayload<T extends SensorsDataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SensorsDataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SensorsDataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SensorsDataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SensorsDataGroupByOutputType[P]>;
}>>;
export type SensorsDataWhereInput = {
    AND?: Prisma.SensorsDataWhereInput | Prisma.SensorsDataWhereInput[];
    OR?: Prisma.SensorsDataWhereInput[];
    NOT?: Prisma.SensorsDataWhereInput | Prisma.SensorsDataWhereInput[];
    id?: Prisma.IntFilter<"SensorsData"> | number;
    inputVoltage?: Prisma.FloatFilter<"SensorsData"> | number;
    inputCurrent?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    voltagePhaseOne?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    currentPhaseOne?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    voltagePhaseTwo?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    currentPhaseTwo?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    voltagePhaseThree?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    currentPhaseThree?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    vfdTemperature?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    motorTemperature?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    motorTorque?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    motorSpeed?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"SensorsData"> | Date | string;
};
export type SensorsDataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrderInput | Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrderInput | Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrderInput | Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrderInput | Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorTorque?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SensorsDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SensorsDataWhereInput | Prisma.SensorsDataWhereInput[];
    OR?: Prisma.SensorsDataWhereInput[];
    NOT?: Prisma.SensorsDataWhereInput | Prisma.SensorsDataWhereInput[];
    inputVoltage?: Prisma.FloatFilter<"SensorsData"> | number;
    inputCurrent?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    voltagePhaseOne?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    currentPhaseOne?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    voltagePhaseTwo?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    currentPhaseTwo?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    voltagePhaseThree?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    currentPhaseThree?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    vfdTemperature?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    motorTemperature?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    motorTorque?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    motorSpeed?: Prisma.FloatNullableFilter<"SensorsData"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"SensorsData"> | Date | string;
}, "id">;
export type SensorsDataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrderInput | Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrderInput | Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrderInput | Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrderInput | Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorTorque?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SensorsDataCountOrderByAggregateInput;
    _avg?: Prisma.SensorsDataAvgOrderByAggregateInput;
    _max?: Prisma.SensorsDataMaxOrderByAggregateInput;
    _min?: Prisma.SensorsDataMinOrderByAggregateInput;
    _sum?: Prisma.SensorsDataSumOrderByAggregateInput;
};
export type SensorsDataScalarWhereWithAggregatesInput = {
    AND?: Prisma.SensorsDataScalarWhereWithAggregatesInput | Prisma.SensorsDataScalarWhereWithAggregatesInput[];
    OR?: Prisma.SensorsDataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SensorsDataScalarWhereWithAggregatesInput | Prisma.SensorsDataScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SensorsData"> | number;
    inputVoltage?: Prisma.FloatWithAggregatesFilter<"SensorsData"> | number;
    inputCurrent?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    voltagePhaseOne?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    currentPhaseOne?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    voltagePhaseTwo?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    currentPhaseTwo?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    voltagePhaseThree?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    currentPhaseThree?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    vfdTemperature?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    motorTemperature?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    motorTorque?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    motorSpeed?: Prisma.FloatNullableWithAggregatesFilter<"SensorsData"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SensorsData"> | Date | string;
};
export type SensorsDataCreateInput = {
    inputVoltage: number;
    inputCurrent?: number | null;
    voltagePhaseOne?: number | null;
    currentPhaseOne?: number | null;
    voltagePhaseTwo?: number | null;
    currentPhaseTwo?: number | null;
    voltagePhaseThree?: number | null;
    currentPhaseThree?: number | null;
    vfdTemperature?: number | null;
    motorTemperature?: number | null;
    motorTorque?: number | null;
    motorSpeed?: number | null;
    createdAt?: Date | string;
};
export type SensorsDataUncheckedCreateInput = {
    id?: number;
    inputVoltage: number;
    inputCurrent?: number | null;
    voltagePhaseOne?: number | null;
    currentPhaseOne?: number | null;
    voltagePhaseTwo?: number | null;
    currentPhaseTwo?: number | null;
    voltagePhaseThree?: number | null;
    currentPhaseThree?: number | null;
    vfdTemperature?: number | null;
    motorTemperature?: number | null;
    motorTorque?: number | null;
    motorSpeed?: number | null;
    createdAt?: Date | string;
};
export type SensorsDataUpdateInput = {
    inputVoltage?: Prisma.FloatFieldUpdateOperationsInput | number;
    inputCurrent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    vfdTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTorque?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorSpeed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SensorsDataUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inputVoltage?: Prisma.FloatFieldUpdateOperationsInput | number;
    inputCurrent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    vfdTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTorque?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorSpeed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SensorsDataCreateManyInput = {
    id?: number;
    inputVoltage: number;
    inputCurrent?: number | null;
    voltagePhaseOne?: number | null;
    currentPhaseOne?: number | null;
    voltagePhaseTwo?: number | null;
    currentPhaseTwo?: number | null;
    voltagePhaseThree?: number | null;
    currentPhaseThree?: number | null;
    vfdTemperature?: number | null;
    motorTemperature?: number | null;
    motorTorque?: number | null;
    motorSpeed?: number | null;
    createdAt?: Date | string;
};
export type SensorsDataUpdateManyMutationInput = {
    inputVoltage?: Prisma.FloatFieldUpdateOperationsInput | number;
    inputCurrent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    vfdTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTorque?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorSpeed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SensorsDataUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    inputVoltage?: Prisma.FloatFieldUpdateOperationsInput | number;
    inputCurrent?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseOne?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseTwo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    voltagePhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    currentPhaseThree?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    vfdTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTemperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorTorque?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    motorSpeed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SensorsDataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrder;
    motorTorque?: Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SensorsDataAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrder;
    motorTorque?: Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrder;
};
export type SensorsDataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrder;
    motorTorque?: Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SensorsDataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrder;
    motorTorque?: Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SensorsDataSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inputVoltage?: Prisma.SortOrder;
    inputCurrent?: Prisma.SortOrder;
    voltagePhaseOne?: Prisma.SortOrder;
    currentPhaseOne?: Prisma.SortOrder;
    voltagePhaseTwo?: Prisma.SortOrder;
    currentPhaseTwo?: Prisma.SortOrder;
    voltagePhaseThree?: Prisma.SortOrder;
    currentPhaseThree?: Prisma.SortOrder;
    vfdTemperature?: Prisma.SortOrder;
    motorTemperature?: Prisma.SortOrder;
    motorTorque?: Prisma.SortOrder;
    motorSpeed?: Prisma.SortOrder;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SensorsDataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inputVoltage?: boolean;
    inputCurrent?: boolean;
    voltagePhaseOne?: boolean;
    currentPhaseOne?: boolean;
    voltagePhaseTwo?: boolean;
    currentPhaseTwo?: boolean;
    voltagePhaseThree?: boolean;
    currentPhaseThree?: boolean;
    vfdTemperature?: boolean;
    motorTemperature?: boolean;
    motorTorque?: boolean;
    motorSpeed?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["sensorsData"]>;
export type SensorsDataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inputVoltage?: boolean;
    inputCurrent?: boolean;
    voltagePhaseOne?: boolean;
    currentPhaseOne?: boolean;
    voltagePhaseTwo?: boolean;
    currentPhaseTwo?: boolean;
    voltagePhaseThree?: boolean;
    currentPhaseThree?: boolean;
    vfdTemperature?: boolean;
    motorTemperature?: boolean;
    motorTorque?: boolean;
    motorSpeed?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["sensorsData"]>;
export type SensorsDataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inputVoltage?: boolean;
    inputCurrent?: boolean;
    voltagePhaseOne?: boolean;
    currentPhaseOne?: boolean;
    voltagePhaseTwo?: boolean;
    currentPhaseTwo?: boolean;
    voltagePhaseThree?: boolean;
    currentPhaseThree?: boolean;
    vfdTemperature?: boolean;
    motorTemperature?: boolean;
    motorTorque?: boolean;
    motorSpeed?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["sensorsData"]>;
export type SensorsDataSelectScalar = {
    id?: boolean;
    inputVoltage?: boolean;
    inputCurrent?: boolean;
    voltagePhaseOne?: boolean;
    currentPhaseOne?: boolean;
    voltagePhaseTwo?: boolean;
    currentPhaseTwo?: boolean;
    voltagePhaseThree?: boolean;
    currentPhaseThree?: boolean;
    vfdTemperature?: boolean;
    motorTemperature?: boolean;
    motorTorque?: boolean;
    motorSpeed?: boolean;
    createdAt?: boolean;
};
export type SensorsDataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inputVoltage" | "inputCurrent" | "voltagePhaseOne" | "currentPhaseOne" | "voltagePhaseTwo" | "currentPhaseTwo" | "voltagePhaseThree" | "currentPhaseThree" | "vfdTemperature" | "motorTemperature" | "motorTorque" | "motorSpeed" | "createdAt", ExtArgs["result"]["sensorsData"]>;
export type $SensorsDataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SensorsData";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        inputVoltage: number;
        inputCurrent: number | null;
        voltagePhaseOne: number | null;
        currentPhaseOne: number | null;
        voltagePhaseTwo: number | null;
        currentPhaseTwo: number | null;
        voltagePhaseThree: number | null;
        currentPhaseThree: number | null;
        vfdTemperature: number | null;
        motorTemperature: number | null;
        motorTorque: number | null;
        motorSpeed: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["sensorsData"]>;
    composites: {};
};
export type SensorsDataGetPayload<S extends boolean | null | undefined | SensorsDataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload, S>;
export type SensorsDataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SensorsDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SensorsDataCountAggregateInputType | true;
};
export interface SensorsDataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SensorsData'];
        meta: {
            name: 'SensorsData';
        };
    };
    findUnique<T extends SensorsDataFindUniqueArgs>(args: Prisma.SelectSubset<T, SensorsDataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SensorsDataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SensorsDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SensorsDataFindFirstArgs>(args?: Prisma.SelectSubset<T, SensorsDataFindFirstArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SensorsDataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SensorsDataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SensorsDataFindManyArgs>(args?: Prisma.SelectSubset<T, SensorsDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SensorsDataCreateArgs>(args: Prisma.SelectSubset<T, SensorsDataCreateArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SensorsDataCreateManyArgs>(args?: Prisma.SelectSubset<T, SensorsDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SensorsDataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SensorsDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SensorsDataDeleteArgs>(args: Prisma.SelectSubset<T, SensorsDataDeleteArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SensorsDataUpdateArgs>(args: Prisma.SelectSubset<T, SensorsDataUpdateArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SensorsDataDeleteManyArgs>(args?: Prisma.SelectSubset<T, SensorsDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SensorsDataUpdateManyArgs>(args: Prisma.SelectSubset<T, SensorsDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SensorsDataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SensorsDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SensorsDataUpsertArgs>(args: Prisma.SelectSubset<T, SensorsDataUpsertArgs<ExtArgs>>): Prisma.Prisma__SensorsDataClient<runtime.Types.Result.GetResult<Prisma.$SensorsDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SensorsDataCountArgs>(args?: Prisma.Subset<T, SensorsDataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SensorsDataCountAggregateOutputType> : number>;
    aggregate<T extends SensorsDataAggregateArgs>(args: Prisma.Subset<T, SensorsDataAggregateArgs>): Prisma.PrismaPromise<GetSensorsDataAggregateType<T>>;
    groupBy<T extends SensorsDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SensorsDataGroupByArgs['orderBy'];
    } : {
        orderBy?: SensorsDataGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SensorsDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorsDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SensorsDataFieldRefs;
}
export interface Prisma__SensorsDataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SensorsDataFieldRefs {
    readonly id: Prisma.FieldRef<"SensorsData", 'Int'>;
    readonly inputVoltage: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly inputCurrent: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly voltagePhaseOne: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly currentPhaseOne: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly voltagePhaseTwo: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly currentPhaseTwo: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly voltagePhaseThree: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly currentPhaseThree: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly vfdTemperature: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly motorTemperature: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly motorTorque: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly motorSpeed: Prisma.FieldRef<"SensorsData", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"SensorsData", 'DateTime'>;
}
export type SensorsDataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where: Prisma.SensorsDataWhereUniqueInput;
};
export type SensorsDataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where: Prisma.SensorsDataWhereUniqueInput;
};
export type SensorsDataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where?: Prisma.SensorsDataWhereInput;
    orderBy?: Prisma.SensorsDataOrderByWithRelationInput | Prisma.SensorsDataOrderByWithRelationInput[];
    cursor?: Prisma.SensorsDataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SensorsDataScalarFieldEnum | Prisma.SensorsDataScalarFieldEnum[];
};
export type SensorsDataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where?: Prisma.SensorsDataWhereInput;
    orderBy?: Prisma.SensorsDataOrderByWithRelationInput | Prisma.SensorsDataOrderByWithRelationInput[];
    cursor?: Prisma.SensorsDataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SensorsDataScalarFieldEnum | Prisma.SensorsDataScalarFieldEnum[];
};
export type SensorsDataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where?: Prisma.SensorsDataWhereInput;
    orderBy?: Prisma.SensorsDataOrderByWithRelationInput | Prisma.SensorsDataOrderByWithRelationInput[];
    cursor?: Prisma.SensorsDataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SensorsDataScalarFieldEnum | Prisma.SensorsDataScalarFieldEnum[];
};
export type SensorsDataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SensorsDataCreateInput, Prisma.SensorsDataUncheckedCreateInput>;
};
export type SensorsDataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SensorsDataCreateManyInput | Prisma.SensorsDataCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SensorsDataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    data: Prisma.SensorsDataCreateManyInput | Prisma.SensorsDataCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SensorsDataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SensorsDataUpdateInput, Prisma.SensorsDataUncheckedUpdateInput>;
    where: Prisma.SensorsDataWhereUniqueInput;
};
export type SensorsDataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SensorsDataUpdateManyMutationInput, Prisma.SensorsDataUncheckedUpdateManyInput>;
    where?: Prisma.SensorsDataWhereInput;
    limit?: number;
};
export type SensorsDataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SensorsDataUpdateManyMutationInput, Prisma.SensorsDataUncheckedUpdateManyInput>;
    where?: Prisma.SensorsDataWhereInput;
    limit?: number;
};
export type SensorsDataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where: Prisma.SensorsDataWhereUniqueInput;
    create: Prisma.XOR<Prisma.SensorsDataCreateInput, Prisma.SensorsDataUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SensorsDataUpdateInput, Prisma.SensorsDataUncheckedUpdateInput>;
};
export type SensorsDataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
    where: Prisma.SensorsDataWhereUniqueInput;
};
export type SensorsDataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SensorsDataWhereInput;
    limit?: number;
};
export type SensorsDataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SensorsDataSelect<ExtArgs> | null;
    omit?: Prisma.SensorsDataOmit<ExtArgs> | null;
};
export {};
