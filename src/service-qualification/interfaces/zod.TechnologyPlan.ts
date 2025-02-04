import { ETechonologyPlanStatusEnum, ZAccessTechnology } from "../../structures";
import z from "zod";
import { IReasonCode } from "../../@common/interfaces/interface.ReasonCode";

const ITechnologyPlanAccepted = z.strictObject({
    currentAccessTechnology: ZAccessTechnology(),
    alternativeTechnology: ZAccessTechnology(),
    changeDate: z.string(),
    status: z.literal(ETechonologyPlanStatusEnum.Accepted),
    reasonCode: IReasonCode,
});

const ITechnologyPlanOnDemandPlanned = z.strictObject({
    currentAccessTechnology: ZAccessTechnology(),
    alternativeTechnology: ZAccessTechnology(),
    forecastRTCDate: z.string().date(),
    status: z.literal(ETechonologyPlanStatusEnum.OnDemandPlanned),
    reasonCode: IReasonCode,
});

const ITechnologyPlanOnDemandReady = z.strictObject({
    currentAccessTechnology: ZAccessTechnology(),
    alternativeTechnology: ZAccessTechnology(),
    changeDate: z.string().date(),
    status: z.literal(ETechonologyPlanStatusEnum.OnDemandReady),
    reasonCode: IReasonCode,
});

const ITechnologyPlanInitiated = z.strictObject({
    currentAccessTechnology: ZAccessTechnology(),
    forecastRTCDate: z.string().date(),
    forecastAccessTechnology: ZAccessTechnology(),
    status: z.literal(ETechonologyPlanStatusEnum.TechnologyChangeInitiated),
    reasonCode: IReasonCode,
    technologyFlipDescriptor: z.string().optional(),
});

const ITechnologyPlanCompleted = z.strictObject({
    currentAccessTechnology: ZAccessTechnology(),
    changeDate: z.string().date(),
    changeoverEndDate: z.string().date(),
    status: z.literal(ETechonologyPlanStatusEnum.TechnologyChangeCompleted),
    technologyFlipDescriptor: z.string().optional(),
});

const ITechnologyPlanRejected = z.strictObject({
    status: z.literal(ETechonologyPlanStatusEnum.Rejected),
    reasonCode: IReasonCode,
    technologyFlipDescriptor: z.string().optional(),
});

export const ITechnologyPlan = z.discriminatedUnion("status", [
    ITechnologyPlanAccepted,
    ITechnologyPlanOnDemandPlanned,
    ITechnologyPlanOnDemandReady,
    ITechnologyPlanInitiated,
    ITechnologyPlanCompleted,
    ITechnologyPlanRejected,
]);