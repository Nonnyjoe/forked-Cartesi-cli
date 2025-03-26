import anvil from "./anvil";
import graphql from "./graphql";
import rpc from "./rpc";

export type Service = {
    name: string;
    logo: string;
    endpoint: string;
    error?: string;
    actionComponent?: React.ReactNode;
    href?: string;
    isHealthy: () => Promise<boolean>;
};

export const services: Service[] = [anvil, rpc, graphql];
