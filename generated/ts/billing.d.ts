/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Billing plan identifier. 'none' is an account that has not bought a plan yet and is entitled to nothing; 'custom' is assigned manually by a Floweb administrator.
 */
export type PlanId = "none" | "basic" | "premium" | "max" | "custom";
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
 * Why an entitlement check failed, so callers can render the right call to action
 */
export type FeatureDeniedReason = "not_in_plan" | "quota_exceeded" | "subscription_inactive" | "disabled_by_user";

export interface BillingSchema {
  subscription?: AccountSubscription;
  entitlements?: AccountEntitlements;
  catalog?: PlanCatalogEntry;
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
  CreditPurchase?: CreditPurchase;
  CreditLedgerEntry?: CreditLedgerEntry;
  CreditTopUpTarget?: CreditTopUpTarget;
  ServiceCreditBalance?: ServiceCreditBalance;
  UsageReset?: UsageReset;
  CreditTopUpRate?: CreditTopUpRate;
  CreditTopUpLine?: CreditTopUpLine;
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
 * Error payload returned with HTTP 402 when a gated feature is refused
 */
export interface FeatureDenied {
  code: string;
  feature: FeatureId;
  reason: FeatureDeniedReason;
  message: string;
  requiredPlan?: PlanId;
  currentPlan?: PlanId;
}
/**
 * Outcome of a credit top-up covering one or more services.
 */
export interface CreditPurchase {
  lines: CreditTopUpLine[];
  totalMinor: number;
  currency: string;
  reference: string;
  createdAt: string;
  /**
   * Plan the credits were bought for. Null means the running plan, which takes them straight away.
   */
  targetPlanId: string | null;
  /**
   * False when the credits are held for a plan that has not started yet.
   */
  appliedNow: boolean;
}
export interface CreditTopUpLine {
  serviceId: string;
  quantity: number;
  unitPriceMinor: number;
  subtotalMinor: number;
}
/**
 * One movement on an account's credit balance, positive for a grant or purchase and negative for a consumed run.
 */
export interface CreditLedgerEntry {
  id: string;
  kind: string;
  amount: number;
  reason: string;
  createdAt: string;
  serviceId?: string | null;
}
/**
 * A plan a credit top-up can be bought for: the one running now, or one queued behind it.
 */
export interface CreditTopUpTarget {
  /**
   * Null identifies the account's standard subscription rather than a catalogue plan.
   */
  planId: string | null;
  label: string;
  when: "now" | "upcoming";
}
/**
 * Credits an account holds for one service.
 */
export interface ServiceCreditBalance {
  serviceId: string;
  serviceName: string;
  unit: string;
  balance: number;
}
/**
 * Outcome of an administrator clearing today's usage counters as a goodwill gesture.
 */
export interface UsageReset {
  accountsReset: number;
  /**
   * Accounts left alone because their plan meters every request and has no daily allowance to restore.
   */
  accountsSkipped: number;
  resetAt: string;
}
/**
 * What one extra unit of a service costs on top of a running plan, at the rate an administrator has set.
 */
export interface CreditTopUpRate {
  serviceId: string;
  serviceName: string;
  unit: string;
  unitPriceMinor: number;
  currency: string;
  /**
   * Credits the account already holds for this service.
   */
  balance: number;
}
