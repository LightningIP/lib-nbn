import { nativeEnum } from "zod";

export enum EBandwidthType {
    "UpstreamMeasuredRate" = "UpstreamMeasuredRate",
    "DownstreamMeasuredRate" = "DownstreamMeasuredRate",
    "RemainingBandwidth" = "RemainingBandwidth",
    "UpstreamEstimatedRate" = "UpstreamEstimatedRate",
    "DownstreamEstimatedRate" = "DownstreamEstimatedRate",
}

export const ZBandwidthType = () => nativeEnum(EBandwidthType);