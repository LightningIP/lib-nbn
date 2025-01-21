import { enums } from "superstruct";

export enum BandwidthTypeEnum {
    "UpstreamMeasuredRate" = "UpstreamMeasuredRate",
    "DownstreamMeasuredRate" = "DownstreamMeasuredRate",
    "RemainingBandwidth" = "RemainingBandwidth",
    "UpstreamEstimatedRate" = "UpstreamEstimatedRate",
    "DownstreamEstimatedRate" = "DownstreamEstimatedRate",
}

export const BandwidthTypeArray = Object.values(BandwidthTypeEnum)

export const BandwidthType = () => enums(BandwidthTypeArray);