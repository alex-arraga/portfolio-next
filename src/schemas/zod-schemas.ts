import { z } from 'zod'

// Info Cars API
const Car = z.object({
    city_mpg: z.number(),
    class: z.string(),
    combination_mpg: z.number(),
    cylinders: z.number(),
    displacement: z.number(),
    drive: z.string(),
    fuel_type: z.string(),
    highway_mpg: z.number(),
    make: z.string(),
    model: z.string(),
    transmission: z.string(),
    year: z.number()
})

export const CarsResponseSchema = z.array(Car)
export type CarsResponse = z.infer<typeof CarsResponseSchema>;


// Car Imagin API
const ImageApiParamsSchema = {
    customer: z.string(),
    make: z.string(),
    modelFamily: z.string(),
    zoomType: z.string(),
    modelYear: z.string(),
    angle: z.string().optional(),
    color: z.string().optional(),
};

export const CarImagesSchema = z.object(ImageApiParamsSchema)
export type CarsImagesResponse = z.infer<typeof CarImagesSchema>


// MP Preference
const ExcludedPaymentMethods = z.enum(["atx", "amex", "master", "visa", "cash", "debit_card", "bank_transfer", "ticket"])
const ExcludedPaymentTypes = z.enum(["credit_card", "debit_card", "atm", "all", "bank_transfer"])


export const PreferenceMercadoPagoSchema = z.object({
    additional_info: z.string(),
    auto_return: z.string(),
    back_urls: z.object({
        failure: z.string(),
        pending: z.string(),
        success: z.string()
    }),
    binary_mode: z.boolean(),
    client_id: z.string(),
    collector_id: z.number(),
    coupon_code: z.null(),
    coupon_labels: z.null(),
    date_created: z.string(),
    date_of_expiration: z.null(),
    expiration_date_from: z.null(),
    expiration_date_to: z.null(),
    expires: z.boolean(),
    external_reference: z.string(),
    id: z.string(),
    init_point: z.string(),
    internal_metadata: z.null(),
    items: z.array(
        z.object({
            id: z.string(),
            category_id: z.string(),
            currency_id: z.string(),
            description: z.string(),
            title: z.string(),
            quantity: z.number(),
            unit_price: z.number()
        })
    ),
    marketplace: z.string(),
    marketplace_fee: z.number(),
    metadata: z.object({}),
    notification_url: z.string(),
    operation_type: z.string(),
    payer: z.object({
        phone: z.object({ area_code: z.string(), number: z.string() }),
        address: z.object({
            zip_code: z.string(),
            street_name: z.string(),
            street_number: z.null()
        }),
        email: z.string(),
        identification: z.object({ number: z.string(), type: z.string() }),
        name: z.string(),
        surname: z.string(),
        date_created: z.null(),
        last_purchase: z.null()
    }),
    payment_methods: z.object({
        default_card_id: z.null(),
        default_payment_method_id: z.null(),
        excluded_payment_methods: z.array(z.object({ id: ExcludedPaymentMethods })),
        excluded_payment_types: z.array(z.object({ id: ExcludedPaymentTypes })),
        installments: z.number().min(1).max(6),
        default_installments: z.null()
    }),
    processing_modes: z.null(),
    product_id: z.null(),
    redirect_urls: z.object({
        failure: z.string(),
        pending: z.string(),
        success: z.string()
    }),
    sandbox_init_point: z.string(),
    site_id: z.string(),
    shipments: z.object({
        default_shipping_method: z.null(),
        receiver_address: z.object({
            zip_code: z.string(),
            street_name: z.string(),
            street_number: z.null(),
            floor: z.string(),
            apartment: z.string(),
            city_name: z.null(),
            state_name: z.null(),
            country_name: z.null()
        })
    }),
    statement_descriptor: z.string(),
    total_amount: z.null(),
    last_updated: z.null(),
    api_response: z.object({
        status: z.number(),
        headers: z.object({
            date: z.array(z.unknown()),
            "content-type": z.array(z.unknown()),
            "content-length": z.array(z.unknown()),
            connection: z.array(z.unknown()),
            "content-encoding": z.array(z.unknown()),
            vary: z.array(z.unknown()),
            "x-content-type-options": z.array(z.unknown()),
            "x-request-id": z.array(z.unknown()),
            "x-xss-protection": z.array(z.unknown()),
            "strict-transport-security": z.array(z.unknown()),
            "access-control-allow-origin": z.array(z.unknown()),
            "access-control-allow-headers": z.array(z.unknown()),
            "access-control-allow-methods": z.array(z.unknown()),
            "access-control-max-age": z.array(z.unknown()),
            "timing-allow-origin": z.array(z.unknown())
        })
    })
})

export type PreferenceMercadoPagoResponse = z.infer<typeof PreferenceMercadoPagoSchema>


// MP Payment
export const MercadoPagoPaymentSchema = z.object({
    accounts_info: z.null(),
    acquirer_reconciliation: z.array(z.unknown()),
    additional_info: z.object({
        authentication_code: z.null(),
        available_balance: z.null(),
        ip_address: z.string(),
        items: z.array(z.object({})),
        nsu_processadora: z.null(),
        payer: z.object({ phone: z.object({}) })
    }),
    authorization_code: z.null(),
    binary_mode: z.boolean(),
    brand_id: z.null(),
    build_version: z.string(),
    call_for_authorize_id: z.null(),
    captured: z.boolean(),
    card: z.object({}),
    charges_details: z.array(
        z.object({
            accounts: z.object({}),
            amounts: z.object({}),
            client_id: z.number(),
            date_created: z.string(),
            id: z.string(),
            last_updated: z.string(),
            metadata: z.object({}),
            name: z.string(),
            refund_charges: z.array(z.unknown()),
            reserve_id: z.null(),
            type: z.string()
        })
    ),
    collector_id: z.number(),
    corporation_id: z.null(),
    counter_currency: z.null(),
    coupon_amount: z.number(),
    currency_id: z.string(),
    date_approved: z.string(),
    date_created: z.string(),
    date_last_updated: z.string(),
    date_of_expiration: z.null(),
    deduction_schema: z.null(),
    description: z.string(),
    differential_pricing_id: z.null(),
    external_reference: z.string(),
    fee_details: z.array(
        z.object({ amount: z.number().nonnegative(), fee_payer: z.string(), type: z.string() })
    ),
    financing_group: z.null(),
    id: z.number(),
    installments: z.number(),
    integrator_id: z.null(),
    issuer_id: z.string(),
    live_mode: z.boolean(),
    marketplace_owner: z.null(),
    merchant_account_id: z.null(),
    merchant_number: z.null(),
    metadata: z.object({}),
    money_release_date: z.string(),
    money_release_schema: z.null(),
    money_release_status: z.string(),
    notification_url: z.string(),
    operation_type: z.string(),
    order: z.object({ id: z.string(), type: z.string() }),
    payer: z.object({
        identification: z.object({ number: z.string(), type: z.string() }),
        entity_type: z.null(),
        phone: z.object({
            number: z.null(),
            extension: z.null(),
            area_code: z.null()
        }),
        last_name: z.null(),
        id: z.string(),
        type: z.null(),
        first_name: z.null(),
        email: z.string()
    }),
    payment_method: z.object({
        id: z.string(),
        issuer_id: z.string(),
        type: z.string()
    }),
    payment_method_id: z.string(),
    payment_type_id: z.string(),
    platform_id: z.null(),
    point_of_interaction: z.object({
        business_info: z.object({
            branch: z.null(),
            sub_unit: z.string(),
            unit: z.string()
        }),
        transaction_data: z.object({ e2e_id: z.null() }),
        type: z.string()
    }),
    pos_id: z.null(),
    processing_mode: z.string(),
    refunds: z.array(z.unknown()),
    shipping_amount: z.number(),
    sponsor_id: z.null(),
    statement_descriptor: z.null(),
    status: z.string(),
    status_detail: z.string(),
    store_id: z.null(),
    tags: z.null(),
    taxes_amount: z.number(),
    transaction_amount: z.number(),
    transaction_amount_refunded: z.number(),
    transaction_details: z.object({
        acquirer_reference: z.null(),
        external_resource_url: z.null(),
        financial_institution: z.null(),
        installment_amount: z.number(),
        net_received_amount: z.number(),
        overpaid_amount: z.number(),
        payable_deferral_period: z.null(),
        payment_method_reference_id: z.null(),
        total_paid_amount: z.number()
    }),
    api_response: z.object({
        status: z.number(),
        headers: z.object({
            date: z.array(z.unknown()),
            "content-type": z.array(z.unknown()),
            "content-length": z.array(z.unknown()).optional(),
            connection: z.array(z.unknown()),
            "content-encoding": z.array(z.unknown()),
            vary: z.array(z.unknown()),
            "x-content-type-options": z.array(z.unknown()),
            "x-request-id": z.array(z.unknown()),
            "x-xss-protection": z.array(z.unknown()),
            "strict-transport-security": z.array(z.unknown()),
            "access-control-allow-origin": z.array(z.unknown()),
            "access-control-allow-headers": z.array(z.unknown()),
            "access-control-allow-methods": z.array(z.unknown()),
            "access-control-max-age": z.array(z.unknown()),
            "timing-allow-origin": z.array(z.unknown())
        })
    })
})

export type MercadoPagoPaymentResponse = z.infer<typeof MercadoPagoPaymentSchema>


// Stripe session
export const StripeSessionSchema = z.object({
    id: z.string(),
    object: z.string(),
    after_expiration: z.null(),
    allow_promotion_codes: z.null(),
    amount_subtotal: z.number(),
    amount_total: z.number(),
    automatic_tax: z.object({ enabled: z.boolean(), status: z.null() }),
    billing_address_collection: z.null(),
    cancel_url: z.string(),
    client_reference_id: z.null(),
    client_secret: z.null(),
    consent: z.null(),
    consent_collection: z.null(),
    created: z.number(),
    currency: z.string(),
    currency_conversion: z.null(),
    custom_fields: z.array(z.unknown()),
    custom_text: z.object({
        after_submit: z.null(),
        shipping_address: z.null(),
        submit: z.null(),
        terms_of_service_acceptance: z.null()
    }),
    customer: z.null(),
    customer_creation: z.string(),
    customer_details: z.null(),
    customer_email: z.null(),
    expires_at: z.number(),
    invoice: z.null(),
    invoice_creation: z.null(),
    livemode: z.boolean(),
    locale: z.null(),
    metadata: z.object({}),
    mode: z.string(),
    payment_intent: z.null(),
    payment_link: z.null(),
    payment_method_collection: z.string(),
    payment_method_configuration_details: z.null(),
    payment_method_options: z.null(),
    payment_method_types: z.array(z.string()),
    payment_status: z.string(),
    phone_number_collection: z.object({ enabled: z.boolean() }),
    recovered_from: z.null(),
    setup_intent: z.null(),
    shipping_address_collection: z.null(),
    shipping_cost: z.null(),
    shipping_details: z.null(),
    shipping_options: z.array(z.unknown()),
    status: z.string(),
    submit_type: z.null(),
    subscription: z.null(),
    success_url: z.string(),
    total_details: z.object({
        amount_discount: z.number(),
        amount_shipping: z.number(),
        amount_tax: z.number()
    }),
    ui_mode: z.string(),
    url: z.string()
})

export type StripeSessionResponse = z.infer<typeof StripeSessionSchema>


// Stripe payment succeeded
export const StripeInvoicePaymentSchema = z.object({
    id: z.string(),
    object: z.string(),
    api_version: z.string(),
    created: z.number(),
    data: z.object({
        object: z.object({
            id: z.string(),
            object: z.string(),
            account_country: z.string(),
            account_name: z.null(),
            account_tax_ids: z.null(),
            amount_due: z.number(),
            amount_paid: z.number(),
            amount_remaining: z.number(),
            amount_shipping: z.number(),
            application: z.null(),
            application_fee_amount: z.null(),
            attempt_count: z.number(),
            attempted: z.boolean(),
            auto_advance: z.boolean(),
            automatic_tax: z.object({}),
            billing_reason: z.string(),
            charge: z.string(),
            collection_method: z.string(),
            created: z.number(),
            currency: z.string(),
            custom_fields: z.null(),
            customer: z.string(),
            customer_address: z.nullable(z.object({})),
            customer_email: z.nullable(z.string()),
            customer_name: z.nullable(z.string()),
            customer_phone: z.null(),
            customer_shipping: z.null(),
            customer_tax_exempt: z.string(),
            customer_tax_ids: z.array(z.unknown()),
            default_payment_method: z.null(),
            default_source: z.null(),
            default_tax_rates: z.array(z.unknown()),
            description: z.nullable(z.string()),
            discount: z.null(),
            discounts: z.array(z.unknown()),
            due_date: z.null(),
            effective_at: z.number(),
            ending_balance: z.number(),
            footer: z.null(),
            from_invoice: z.null(),
            hosted_invoice_url: z.string(),
            invoice_pdf: z.string(),
            issuer: z.object({}),
            last_finalization_error: z.null(),
            latest_revision: z.null(),
            lines: z.object({}),
            livemode: z.boolean(),
            metadata: z.object({}),
            next_payment_attempt: z.null(),
            number: z.string(),
            on_behalf_of: z.null(),
            paid: z.boolean(),
            paid_out_of_band: z.boolean(),
            payment_intent: z.string(),
            payment_settings: z.object({}),
            period_end: z.number(),
            period_start: z.number(),
            post_payment_credit_notes_amount: z.number(),
            pre_payment_credit_notes_amount: z.number(),
            quote: z.null(),
            receipt_number: z.null(),
            rendering: z.nullable(z.object({})),
            rendering_options: z.null(),
            shipping_cost: z.null(),
            shipping_details: z.null(),
            starting_balance: z.number(),
            statement_descriptor: z.null(),
            status: z.string(),
            status_transitions: z.object({}),
            subscription: z.nullable(z.string()),
            subscription_details: z.object({}),
            subtotal: z.number(),
            subtotal_excluding_tax: z.number(),
            tax: z.null(),
            test_clock: z.null(),
            total: z.number(),
            total_discount_amounts: z.array(z.unknown()),
            total_excluding_tax: z.number(),
            total_tax_amounts: z.array(z.unknown()),
            transfer_data: z.null(),
            webhooks_delivered_at: z.nullable(z.number())
        })
    }),
    livemode: z.boolean(),
    pending_webhooks: z.number(),
    request: z.object({ id: z.string(), idempotency_key: z.string() }),
    type: z.string()
})

export type StripeInvoiceResponse = z.infer<typeof StripeInvoicePaymentSchema>
