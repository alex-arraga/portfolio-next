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

export interface PreferenceMp {
    params: {
        id: string,
        title: string,
        picture_url?: string,
        description?: string,
        quantity: number,
        unit_price: number
    }
}

export interface ProductMp {
    title: string,
    currency_id: string,
    description: string,
    quantity: number,
    unit_price: number
}


export interface QuerysProps {
    query: {
        key: string
        value: string
    }
}

export interface UpdateApprobedOrderParams {
    orderId: string,
    status: string,
    statusDetail: string | null,
    payResource: string | null,
    installments: number | null,
    fee: number | null,
    netAmount: number | null
}

export interface UpdateRejectedOrderParams {
    orderId: string,
    status: string,
}