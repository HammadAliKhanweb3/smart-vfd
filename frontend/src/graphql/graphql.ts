/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Anayltics = {
  __typename?: 'Anayltics';
  time: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAnalyticsData: Array<Anayltics>;
};


export type QueryGetAnalyticsDataArgs = {
  deviceId: Scalars['String']['input'];
  metricName: Scalars['String']['input'];
  range: Scalars['String']['input'];
};

export type SensorData = {
  __typename?: 'SensorData';
  currentP1?: Maybe<Scalars['Float']['output']>;
  currentP2?: Maybe<Scalars['Float']['output']>;
  currentP3?: Maybe<Scalars['Float']['output']>;
  motorCurrent?: Maybe<Scalars['Float']['output']>;
  motorSpeed?: Maybe<Scalars['Float']['output']>;
  motorVibration?: Maybe<Scalars['Float']['output']>;
  tempMotor?: Maybe<Scalars['Float']['output']>;
  tempVfd?: Maybe<Scalars['Float']['output']>;
  voltageInput?: Maybe<Scalars['Float']['output']>;
  voltageP1?: Maybe<Scalars['Float']['output']>;
  voltageP2?: Maybe<Scalars['Float']['output']>;
  voltageP3?: Maybe<Scalars['Float']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  inputVoltage: SensorData;
};

export type InputVoltageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type InputVoltageSubscription = { __typename?: 'Subscription', inputVoltage: { __typename?: 'SensorData', currentP1?: number | null, currentP2?: number | null, currentP3?: number | null, motorCurrent?: number | null, motorSpeed?: number | null, motorVibration?: number | null, tempMotor?: number | null, tempVfd?: number | null, voltageInput?: number | null, voltageP1?: number | null, voltageP2?: number | null, voltageP3?: number | null } };

export type GetAnalyticsQueryVariables = Exact<{
  deviceId: Scalars['String']['input'];
  metric: Scalars['String']['input'];
  range: Scalars['String']['input'];
}>;


export type GetAnalyticsQuery = { __typename?: 'Query', getAnalyticsData: Array<{ __typename?: 'Anayltics', time: string, value: number }> };


export const InputVoltageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"InputVoltage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inputVoltage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentP1"}},{"kind":"Field","name":{"kind":"Name","value":"currentP2"}},{"kind":"Field","name":{"kind":"Name","value":"currentP3"}},{"kind":"Field","name":{"kind":"Name","value":"motorCurrent"}},{"kind":"Field","name":{"kind":"Name","value":"motorSpeed"}},{"kind":"Field","name":{"kind":"Name","value":"motorVibration"}},{"kind":"Field","name":{"kind":"Name","value":"tempMotor"}},{"kind":"Field","name":{"kind":"Name","value":"tempVfd"}},{"kind":"Field","name":{"kind":"Name","value":"voltageInput"}},{"kind":"Field","name":{"kind":"Name","value":"voltageP1"}},{"kind":"Field","name":{"kind":"Name","value":"voltageP2"}},{"kind":"Field","name":{"kind":"Name","value":"voltageP3"}}]}}]}}]} as unknown as DocumentNode<InputVoltageSubscription, InputVoltageSubscriptionVariables>;
export const GetAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAnalytics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metric"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"range"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAnalyticsData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"metricName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metric"}}},{"kind":"Argument","name":{"kind":"Name","value":"range"},"value":{"kind":"Variable","name":{"kind":"Name","value":"range"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetAnalyticsQuery, GetAnalyticsQueryVariables>;