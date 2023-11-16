export interface Price {
    id: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    custom_unit_amount: null;
    livemode: boolean;
    lookup_key: string;
    metadata: Record<string, unknown>;
    nickname: string;
    product: string;
    recurring: {
        aggregate_usage: null;
        interval: string;
        interval_count: number;
        trial_period_days: null;
        usage_type: string;
    };
    tax_behavior: string;
    tiers_mode: null;
    transform_quantity: null;
    type: string;
    unit_amount: number;
    unit_amount_decimal: string;
}


export interface PlansCardProps {
    stripePrices: Price[]
}