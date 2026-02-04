import { gql } from '@apollo/client';
import { useSubscription } from '@apollo/client/react';
import type { Subscription } from '@/graphql/graphql';


const sensorSubscription=gql`
subscription InputVoltage{
    inputVoltage{
    currentP1
  currentP2
  currentP3
  motorCurrent
  motorSpeed
  motorVibration
  tempMotor
  tempVfd
  voltageInput
  voltageP1
  voltageP2
  voltageP3
    }
}
`


export function useSensorsData(){

const {data,loading,error} = useSubscription<Subscription>(sensorSubscription);
console.log("inside useSensorData hook:",data,loading,error);

 if(error){
        throw error;
    }
    
return {data,loading,error}
}