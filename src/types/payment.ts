import { CarCardProps, RentedCarCardProps } from "./cars-store";

export type Price = {
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


export type PlansCardProps = {
    costDayRent: number,
    car: CarCardProps
    stripePrices: Price[]
}

export type PreferenceMp = {
    params: {
        id: string,
        title: string,
        picture_url?: string,
        description?: string,
        quantity: number,
        unit_price: number
    }
}

export type ProductMp = {
    title: string,
    currency_id: string,
    description: string,
    quantity: number,
    unit_price: number
}


export type QuerysProps = {
    query: {
        key: string
        value: string
    }
}

export type SettingOrderParams = {
    typeService: "mercado_pago" | "stripe",
    paymentId: string,
    orderId: string,
    status?: string,
    statusDetail?: string,
    payResource?: string,
    installments?: number,
    fee?: number,
    netAmount?: number
}

export type UpdateRejectedOrderParams = {
    orderId: string,
    status: string,
}

export type NewOrderProps = {
    id: number
    duration_rented: number
    fee: number | null
    installments: number | null
    net_received_amount: number | null
    order_id: string
    pay_method: string | null
    pay_resource: string | null
    pay_status: string
    pay_status_detail: string | null
    payment_id: string | null
    price: number,
    suscription?: number
    user_clerk: string
    user_id: number
}


export type PaymentButtonProps = {
    title: string
    containerStyle: string
    textStyle?: string
    rightIcon?: string
    leftIcon?: string
    priceId?: string
    mercadoPago?: boolean
    stripe?: boolean
    car: CarCardProps | RentedCarCardProps
    costRent?: number
    suscription?: number
    durationRent: number
    urlPayAPI: string
}


export type PaymentComprobantProps = {
    priceSuscription: number,
    payment: NewOrderProps | null
    car: RentedCarCardProps
    isOpen: boolean,
    closeModal: () => void
}


export type GetOrderProps = {
    message: string,
    infoOrder: {
        id: number
        duration_rented: number
        fee: number | null
        installments: number | null
        net_received_amount: number | null
        order_id: string
        pay_method: string | null
        pay_resource: string | null
        pay_status: string
        pay_status_detail: string | null
        payment_id: string | null
        price: number,
        user_clerk: string
        user_id: number
    }
}