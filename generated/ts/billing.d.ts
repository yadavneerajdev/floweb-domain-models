/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Billing plan identifier. 'custom' is assigned manually by a Floweb administrator.
 */
export type PlanId = "basic" | "premium" | "max" | "custom";
/**
 * Lifecycle state of an account subscription. Only 'active' and 'trialing' grant entitlements.
 */
export type SubscriptionStatus = "active" | "trialing" | "past_due" | "cancelled";
/**
 * Billing cadence for a plan price
 */
export type BillingInterval = "monthly" | "yearly";
/**
 * A gateable product capability. Every enforcement point in the server, engine and UI keys off one of these.
 */
export type FeatureId =
  | "test_creation"
  | "test_execution"
  | "reporting"
  | "advanced_analytics"
  | "recorder"
  | "self_healing_basic"
  | "self_healing_ai"
  | "ai_assistant"
  | "ai_test_generation"
  | "ai_vibe_testing"
  | "parallel_execution"
  | "performance_testing";
/**
 * Outcome of a simulated payment attempt
 */
export type PaymentStatus = "succeeded" | "failed" | "refunded";
/**
 * How an account is charged. 'fixed' bills a recurring amount and caps each metric with an allowance; 'pay_as_you_go' bills per unit consumed plus an optional per-seat charge.
 */
export type BillingModel = "fixed" | "pay_as_you_go";
/**
 * A countable unit of consumption. Distinct from FeatureId: a feature is gateable, a metric is billable. Every metric that maps to a gated capability is enforced through that feature as well.
 */
export type MeteredMetric =
  | "test_execution"
  | "suite_execution"
  | "api_test_execution"
  | "performance_test_run"
  | "test_creation"
  | "crawl_generation"
  | "recorder_session"
  | "ai_test_generation"
  | "ai_assistant_message"
  | "ai_vibe_testing"
  | "self_healing_ai"
  | "seat";
/**
 * Whether a cap applies to the whole account or to each individual member.
 */
export type SpendCapScope = "account" | "user";
/**
 * Lifecycle of an administrator-authored pricing proposal. Only an 'accepted' catalogue grants entitlements.
 */
export type CatalogueStatus = "draft" | "sent" | "accepted" | "declined" | "superseded" | "expired";
/**
 * What an invoice line represents.
 */
export type InvoiceLineKind = "base" | "seat" | "metric" | "credit_grant" | "adjustment";
/**
 * Lifecycle of a generated invoice. 'open' is billed and awaiting payment; 'void' was cancelled by an administrator.
 */
export type InvoiceStatus = "draft" | "open" | "paid" | "past_due" | "void";
/**
 * Lifecycle of an account's request for additional credits.
 */
export type CreditRequestStatus = "requested" | "quoted" | "accepted" | "granted" | "declined";
/**
 * Why an entitlement check failed, so callers can render the right call to action
 */
export type FeatureDeniedReason =
  | "not_in_plan"
  | "quota_exceeded"
  | "subscription_inactive"
  | "disabled_by_user"
  | "spend_cap_reached"
  | "allowance_exhausted"
  | "invoice_unpaid";

export interface BillingSchema {
  subscription?: AccountSubscription;
  entitlements?: AccountEntitlements;
  catalog?: PlanCatalogEntry;
  catalogue?: PricingCatalogue;
  invoice?: Invoice;
  creditRequest?: CreditRequest;
  PlanId?: PlanId;
  FeatureId?: FeatureId;
  SubscriptionStatus?: SubscriptionStatus;
  PaymentStatus?: PaymentStatus;
  BillingInterval?: BillingInterval;
  PlanQuotas?: PlanQuotas;
  PlanCatalogEntry?: PlanCatalogEntry;
  PaymentRecord?: PaymentRecord;
  AccountSubscription?: AccountSubscription;
  FeatureOverride?: FeatureOverride;
  UsageSnapshot?: UsageSnapshot;
  AccountEntitlements?: AccountEntitlements;
  FeatureDeniedReason?: FeatureDeniedReason;
  FeatureDenied?: FeatureDenied;
  MeteredMetric?: MeteredMetric;
  BillingModel?: BillingModel;
  MetricAllowance?: MetricAllowance;
  MetricPrice?: MetricPrice;
  SpendCapScope?: SpendCapScope;
  SpendCap?: SpendCap;
  CatalogueStatus?: CatalogueStatus;
  PricingCatalogue?: PricingCatalogue;
  MetricUsage?: MetricUsage;
  SpendState?: SpendState;
  InvoiceStatus?: InvoiceStatus;
  InvoiceLineKind?: InvoiceLineKind;
  InvoiceLine?: InvoiceLine;
  Invoice?: Invoice;
  CreditRequestStatus?: CreditRequestStatus;
  CreditRequest?: CreditRequest;
}
/**
 * The billing state of one account. featureOverrides lets an administrator grant or revoke individual capabilities independently of the plan, which is how the 'custom' plan is fulfilled.
 */
export interface AccountSubscription {
  id?: string;
  accountId: string;
  planId: PlanId;
  status: SubscriptionStatus;
  interval?: BillingInterval;
  /**
   * Resolved feature list persisted at purchase time so a catalog change never silently alters a paid account
   */
  features: FeatureId[];
  featureOverrides?: FeatureOverride[];
  quotas: PlanQuotas;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd?: boolean;
  payments?: PaymentRecord[];
  createdAt?: string;
  updatedAt?: string;
  billingModel?: BillingModel;
  /**
   * Accepted catalogue whose terms are in force
   */
  catalogueId?: string | null;
  /**
   * Per-metric ceilings copied from the accepted catalogue
   */
  allowances?: MetricAllowance[];
  /**
   * Per-metric unit prices copied from the accepted catalogue
   */
  prices?: MetricPrice[];
  /**
   * Caps set by the account owner or admin, not by Floweb
   */
  spendCaps?: SpendCap[];
  seatPriceMonthly?: number | null;
  baseMonthlyPrice?: number | null;
  /**
   * Day the billing period rolls over and an invoice is generated
   */
  anniversaryDayOfMonth?: number | null;
}
/**
 * An administrator-set grant or revocation of a single feature, applied on top of the plan's feature list
 */
export interface FeatureOverride {
  feature: FeatureId;
  enabled: boolean;
  note?: string;
}
/**
 * Numeric limits attached to a plan. A null value means unlimited.
 */
export interface PlanQuotas {
  executionsPerDay: number | null;
  maxTests?: number | null;
  maxMembers?: number | null;
}
/**
 * A simulated payment attempt retained for the billing history table. No real gateway is involved and no card data is stored.
 */
export interface PaymentRecord {
  id: string;
  planId: PlanId;
  amount: number;
  currency?: string;
  interval?: BillingInterval;
  status: PaymentStatus;
  cardLast4?: string;
  /**
   * Simulated gateway reference
   */
  reference?: string;
  createdAt: string;
}
/**
 * A fixed plan's ceiling for one metric. A null limit means unlimited. Daily limits reset at 00:00 UTC; monthly limits reset on the account's anniversary.
 */
export interface MetricAllowance {
  metric: MeteredMetric;
  limitPerDay?: number | null;
  limitPerMonth?: number | null;
}
/**
 * Pay-as-you-go unit price for one metric, set by a Floweb administrator and agreed by the account before it takes effect.
 */
export interface MetricPrice {
  metric: MeteredMetric;
  unitPrice: number;
  /**
   * Human label for one billable unit, e.g. 'per execution'
   */
  unit?: string;
}
/**
 * A ceiling set by the account owner or admin on pay-as-you-go spend. Enforcement triggers when the cap is reached, not exceeded, so the final chargeable action is the one that meets the limit. Account and user caps are both enforced and the stricter one wins.
 */
export interface SpendCap {
  scope: SpendCapScope;
  limitDaily?: number | null;
  limitMonthly?: number | null;
  /**
   * Set only for a per-member override of the account's user-scope default
   */
  userId?: string | null;
}
/**
 * The resolved answer to 'what may this account do right now'. Sent to the UI on load and to the engine in its runtime context; both treat it as read-only.
 */
export interface AccountEntitlements {
  accountId: string;
  planId: PlanId;
  planName?: string;
  status: SubscriptionStatus;
  features: FeatureId[];
  quotas: PlanQuotas;
  usage?: UsageSnapshot;
  /**
   * Admin-granted credits available once the daily plan allowance is spent
   */
  credits?: number;
  /**
   * Account preference gating AI at runtime; AI runs only when this is true AND the matching feature is entitled
   */
  aiEnabledByUser?: boolean;
  currentPeriodEnd?: string;
  billingModel?: BillingModel;
  /**
   * Per-metric consumption and remaining headroom for the caller
   */
  metrics?: MetricUsage[];
  /**
   * Cap state for the account and for the calling member
   */
  spend?: SpendState[];
  /**
   * True when a reached cap or an unpaid invoice suspends chargeable activity account-wide
   */
  blocked?: boolean;
  blockedReason?: string | null;
}
/**
 * Consumption for the current UTC day, used to enforce executionsPerDay
 */
export interface UsageSnapshot {
  /**
   * UTC day key, YYYY-MM-DD
   */
  date: string;
  executions: number;
  executionsLimit?: number | null;
  executionsRemaining?: number | null;
  /**
   * Admin-granted credits left after this execution; spent only once the plan allowance is exhausted
   */
  creditsRemaining?: number | null;
}
/**
 * Consumption of one metric over a window, with the money it accrued. Cost is zero on a fixed catalogue, where allowances rather than prices apply.
 */
export interface MetricUsage {
  metric: MeteredMetric;
  count: number;
  cost: number;
  limitPerDay?: number | null;
  limitPerMonth?: number | null;
  remainingToday?: number | null;
  remainingThisMonth?: number | null;
}
/**
 * Where an account or member stands against its spend caps right now. blocked is true once a cap is reached, which refuses further chargeable actions until the cap is raised.
 */
export interface SpendState {
  scope: SpendCapScope;
  userId?: string | null;
  spentToday: number;
  spentThisMonth: number;
  limitDaily?: number | null;
  limitMonthly?: number | null;
  blocked: boolean;
  blockedReason?: string | null;
}
/**
 * A purchasable plan as advertised on the billing page
 */
export interface PlanCatalogEntry {
  id: PlanId;
  name: string;
  description: string;
  priceMonthly?: number | null;
  priceYearly?: number | null;
  currency?: string;
  features: FeatureId[];
  quotas: PlanQuotas;
  highlights?: string[];
  contactOnly?: boolean;
}
/**
 * A per-account pricing proposal authored by a Floweb administrator. Immutable once sent: a revision creates a new catalogue pointing at the previous one via revisionOf, so the negotiation history stays auditable. Terms are copied onto the subscription when accepted, so later catalogue edits never retroactively change what an account agreed to.
 */
export interface PricingCatalogue {
  id?: string;
  accountId: string;
  billingModel: BillingModel;
  name: string;
  summary?: string;
  currency?: string;
  /**
   * Recurring charge for a fixed catalogue; null for pure pay-as-you-go
   */
  baseMonthlyPrice?: number | null;
  /**
   * Per-member monthly charge, counted from active account members at invoice time
   */
  seatPriceMonthly?: number | null;
  /**
   * Populated for a fixed catalogue
   */
  allowances: MetricAllowance[];
  /**
   * Populated for a pay-as-you-go catalogue
   */
  prices: MetricPrice[];
  /**
   * Capabilities the catalogue unlocks
   */
  features: FeatureId[];
  status: CatalogueStatus;
  /**
   * Support thread the catalogue was negotiated in
   */
  ticketId?: string | null;
  /**
   * Catalogue this one supersedes
   */
  revisionOf?: string | null;
  validUntil?: string | null;
  createdByAdminId?: string | null;
  createdByAdminEmail?: string | null;
  sentAt?: string | null;
  respondedAt?: string | null;
  acceptedByUserId?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
/**
 * A billing statement for one period, generated on the account's anniversary. Lines are frozen at issue time.
 */
export interface Invoice {
  id?: string;
  /**
   * Human-facing invoice number
   */
  number?: string;
  accountId: string;
  accountName?: string | null;
  billingModel: BillingModel;
  currency?: string;
  periodStart: string;
  periodEnd: string;
  lines: InvoiceLine[];
  subtotal: number;
  creditsApplied?: number;
  total: number;
  status: InvoiceStatus;
  issuedAt: string;
  dueAt?: string | null;
  paidAt?: string | null;
  paymentReference?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
/**
 * One charge on an invoice. amount is quantity times unitPrice, stored rather than derived so a later price change cannot alter an issued invoice.
 */
export interface InvoiceLine {
  kind: InvoiceLineKind;
  metric?: MeteredMetric | null;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}
/**
 * A structured request for additional credits, raised from the billing page and negotiated in a support thread. Once granted, the quoted amount is added to the account's next invoice.
 */
export interface CreditRequest {
  id?: string;
  accountId: string;
  requestedByUserId: string;
  requestedByEmail?: string | null;
  /**
   * Metric the credits are for; null means general-purpose credits
   */
  metric?: MeteredMetric | null;
  quantity: number;
  reason: string;
  status: CreditRequestStatus;
  quotedUnitPrice?: number | null;
  quotedTotal?: number | null;
  currency?: string;
  ticketId?: string | null;
  grantedAt?: string | null;
  /**
   * Invoice the granted credits were charged on
   */
  invoiceId?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
/**
 * Error payload returned with HTTP 402 when a gated feature is refused
 */
export interface FeatureDenied {
  code: string;
  feature: FeatureId;
  reason: FeatureDeniedReason;
  message: string;
  requiredPlan?: PlanId;
  currentPlan?: PlanId;
  metric?: MeteredMetric | null;
}
