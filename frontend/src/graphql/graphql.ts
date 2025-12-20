/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
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

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
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

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const HelloDocument = new TypedDocumentString(`
    query Hello {
  hello
}
    `) as unknown as TypedDocumentString<HelloQuery, HelloQueryVariables>;