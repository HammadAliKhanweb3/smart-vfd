import * as z from 'zod';
import { DEFAULT_RANGE } from '@/features/dashboard/constants';


const searchParams = ()=> z.string().catch(DEFAULT_RANGE);

export const analyticSearchSchema = z.object({
  
  currentP1: searchParams(),
  currentP2: searchParams(),
  currentP3: searchParams(),
  motorCurrent: searchParams(),
  motorSpeed: searchParams(),
  motorVibration: searchParams(),
  tempMotor:searchParams(),
  tempVfd: searchParams(),
  voltageInput: searchParams(),
  voltageP1: searchParams(),
  voltageP2: searchParams(),
  voltageP3: searchParams(),
});