import { z } from "zod";

export enum ETechonologyPlanStatusEnum {
  'Accepted' = 'Accepted',
  'OnDemandPlanned' = 'OnDemandPlanned',
  'OnDemandReady' = 'OnDemandReady',
  'TechnologyChangeInitiated' = 'TechnologyChangeInitiated',
  'TechnologyChangeCompleted' = 'TechnologyChangeCompleted',
  'Rejected' = 'Rejected',
}

export const ZTechnologyPlanStatus = () => z.nativeEnum(ETechonologyPlanStatusEnum);
