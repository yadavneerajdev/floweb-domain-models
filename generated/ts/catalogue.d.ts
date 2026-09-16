/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * How a catalogue plan meters. fixed_budget pre-buys units and counts down; payg accrues cost per unit consumed.
 */
export type PlanType = "fixed_budget" | "payg";
/**
 * Lifecycle of a negotiated catalogue request. 'superseded' marks a request replaced by a newer one, typically a bump-up of the plan it produced.
 */
export type CatalogueRequestStatus =
  | "draft"
  | "pending_review"
  | "priced"
  | "sent"
  | "negotiating"
  | "approved"
  | "awaiting_payment"
  | "active"
  | "rejected"
  | "expired"
  | "superseded";
/**
 * Which side of the negotiation authored a revision
 */
export type RevisionAuthor = "client" | "admin";
/**
 * Lifecycle of an activated plan. Only 'active' meters usage; 'scheduled' is queued behind the running plan and 'exhausted' means every fixed budget reached zero.
 */
export type AccountPlanStatus = "scheduled" | "active" | "exhausted" | "expired" | "cancelled";
/**
 * How a coupon's value is applied: a percentage of the order or an absolute amount in minor units
 */
export type CouponDiscountType = "percent" | "fixed";
/**
 * How a reserved unit of usage ended. Only 'completed' is charged; the other two release the hold.
 */
export type UsageOutcome = "completed" | "failed" | "cancelled";
export type InvoiceStatus = "draft" | "issued" | "paid" | "void";
export type PricingUpdateStatus = "scheduled" | "applied" | "cancelled";

export interface CatalogueSchema {
  service?: CatalogueService;
  request?: CatalogueRequest;
  plan?: AccountPlan;
  coupon?: Coupon;
  PlanType?: PlanType;
  CatalogueRequestStatus?: CatalogueRequestStatus;
  AccountPlanStatus?: AccountPlanStatus;
  RevisionAuthor?: RevisionAuthor;
  CouponDiscountType?: CouponDiscountType;
  UsageOutcome?: UsageOutcome;
  CatalogueService?: CatalogueService;
  CatalogueLine?: CatalogueLine;
  CatalogueRevision?: CatalogueRevision;
  CatalogueRequest?: CatalogueRequest;
  PlanServiceState?: PlanServiceState;
  UsageCap?: UsageCap;
  AccountPlan?: AccountPlan;
  InvoiceStatus?: InvoiceStatus;
  InvoiceLine?: InvoiceLine;
  Invoice?: Invoice;
  PricingUpdateStatus?: PricingUpdateStatus;
  PricingUpdateLine?: PricingUpdateLine;
  PricingUpdate?: PricingUpdate;
  Coupon?: Coupon;
  CouponValidation?: CouponValidation;
  PlanUsageSnapshot?: PlanUsageSnapshot;
}
/**
 * A service Floweb sells, seeded from the standard catalogue and editable by an administrator. serviceId is the stable slug every plan, cap and usage reservation keys off.
 */
export interface CatalogueService {
  serviceId: string;
  name: string;
  description: string;
  /**
   * What one unit is: 'execution', 'seat', 'GB'
   */
  unit: string;
  /**
   * Floweb's list price per unit in minor currency units
   */
  listPriceMinor: number;
  currency: string;
  active: boolean;
}
/**
 * A custom plan being negotiated. The revision array is the full immutable thread from both sides; activatedAt is set once payment confirms and becomes the plan's billing anniversary.
 */
export interface CatalogueRequest {
  id: string;
  accountId: string;
  /**
   * Support ticket the negotiation is conducted in
   */
  ticketId?: string | null;
  planType: PlanType;
  status: CatalogueRequestStatus;
  /**
   * Append-only
   */
  revisions: CatalogueRevision[];
  currentRevisionId: string;
  approvedByClientAt?: string | null;
  approvedByAdminAt?: string | null;
  /**
   * Set when this request increases the limits of an existing plan
   */
  bumpsPlanId?: string | null;
  createdAt: string;
  /**
   * Billing anchor once paid
   */
  activatedAt?: string | null;
}
/**
 * One immutable proposal in the negotiation thread. Revisions are appended, never edited; the highest revision number is the live offer.
 */
export interface CatalogueRevision {
  id: string;
  /**
   * 1-based, monotonic, never reused
   */
  revision: number;
  authoredBy: RevisionAuthor;
  authorId: string;
  authorName: string;
  lines: CatalogueLine[];
  couponCode?: string | null;
  /**
   * Absolute discount resolved for this revision
   */
  discountMinor: number;
  subtotalMinor: number;
  /**
   * subtotalMinor - discountMinor
   */
  totalMinor: number;
  currency: string;
  /**
   * Free-text rationale shown on the negotiation card
   */
  note?: string | null;
  createdAt: string;
}
/**
 * One service on a revision. name is snapshotted so a later rename of the service does not rewrite an agreed quote.
 */
export interface CatalogueLine {
  serviceId: string;
  name: string;
  /**
   * fixed_budget: units pre-bought. payg: expected volume, used as a cap hint only.
   */
  quantity: number;
  /**
   * Negotiated price, may differ from the service's list price
   */
  unitPriceMinor: number;
  /**
   * quantity * unitPriceMinor
   */
  subtotalMinor: number;
}
/**
 * The activated plan that meters usage. activatedAt is the billing anniversary and the anchor every period rolls forward from — deliberately not createdAt, which is when the plan was queued.
 */
export interface AccountPlan {
  id: string;
  accountId: string;
  /**
   * Null for standard catalog plans
   */
  catalogueRequestId?: string | null;
  planType: PlanType;
  status: AccountPlanStatus;
  services: PlanServiceState[];
  caps: UsageCap[];
  activatedAt?: string | null;
  exhaustedAt?: string | null;
  /**
   * Promo terms snapshotted at activation. Scoped to this plan for its lifetime and never inherited by a later plan; snapshotted so editing or expiring the code cannot retroactively change what an active plan is billed.
   */
  appliedDiscount?: {
    code: string;
    discountType: CouponDiscountType;
    value: number;
    /**
     * Services the discount is limited to; empty means the whole order
     */
    appliesToServiceIds: string[];
  } | null;
  /**
   * ISO-4217 code every minor-unit amount on this plan is denominated in
   */
  currency: string;
  /**
   * Day of month taken from activatedAt; clamped to the last day in shorter months
   */
  billingAnchorDay?: number | null;
  currentPeriodStart?: string | null;
  currentPeriodEnd?: string | null;
  /**
   * Scheduled plan starts by itself when the running plan exhausts
   */
  autoStart: boolean;
  queuedAfterPlanId?: string | null;
  createdAt: string;
}
/**
 * Per-service budget and consumption on an activated plan. budgetTotal and budgetRemaining are null on a payg plan, which is unbounded by design and constrained by caps instead.
 */
export interface PlanServiceState {
  serviceId: string;
  unitPriceMinor: number;
  /**
   * fixed_budget: units bought
   */
  budgetTotal: number | null;
  /**
   * fixed_budget: units left
   */
  budgetRemaining: number | null;
  /**
   * Units consumed this period
   */
  usageCount: number;
  /**
   * payg: cost accrued this period
   */
  usageCostMinor: number;
}
/**
 * A ceiling on units consumed within one billing period. A null serviceId caps every service together; scope 'user' caps one member, scope 'account' caps the whole account.
 */
export interface UsageCap {
  scope: "account" | "user";
  /**
   * Null when scope is 'account'
   */
  userId: string | null;
  /**
   * Null applies the cap across all services
   */
  serviceId: string | null;
  limit: number;
}
/**
 * A discount applicable to a standard plan purchase or a negotiated catalogue. An empty appliesToServiceIds discounts the whole order.
 */
export interface Coupon {
  /**
   * Uppercase, unique
   */
  code: string;
  discountType: CouponDiscountType;
  /**
   * percent: 1-100. fixed: minor units
   */
  value: number;
  /**
   * Set for a fixed discount only
   */
  currency?: string | null;
  appliesToServiceIds: string[];
  maxRedemptions?: number | null;
  redemptions: number;
  expiresAt?: string | null;
  active: boolean;
}
/**
 * One service's consumption over the invoiced period.
 */
export interface InvoiceLine {
  serviceId: string;
  name: string;
  unit: string;
  quantity: number;
  unitPriceMinor: number;
  subtotalMinor: number;
}
/**
 * A closed billing period rendered as a bill. Generated from an archived plan_usage_periods record, never from live counters, so it stays stable once issued.
 */
export interface Invoice {
  id: string;
  /**
   * Human-facing reference, unique across the system
   */
  number: string;
  accountId: string;
  planId: string;
  periodKey: string;
  periodStart: string;
  periodEnd: string;
  lines: InvoiceLine[];
  subtotalMinor: number;
  discountMinor: number;
  totalMinor: number;
  currency: string;
  status: InvoiceStatus;
  issuedAt?: string | null;
  dueAt?: string | null;
  paidAt?: string | null;
  createdAt: string;
}
/**
 * One service's price move. deltaMinor is what the admin entered; the absolute prices are recorded so the change stays auditable after the catalogue moves again.
 */
export interface PricingUpdateLine {
  serviceId: string;
  name: string;
  previousUnitPriceMinor: number;
  newUnitPriceMinor: number;
  deltaMinor: number;
}
/**
 * An admin-announced change to per-service catalogue pricing. Active PAYG plans adopt it at their first period roll on or after effectiveFrom, so usage already incurred is never repriced. Fixed-budget plans are pre-paid and never adopt it.
 */
export interface PricingUpdate {
  id: string;
  status: PricingUpdateStatus;
  lines: PricingUpdateLine[];
  currency: string;
  /**
   * Announcement shown to affected clients
   */
  note?: string | null;
  /**
   * Accounts this applies to; null means every account. Each target adopts it at its own next billing cycle, so adoption dates differ per account.
   */
  targetAccountIds?: string[] | null;
  effectiveFrom: string;
  announcedAt?: string | null;
  createdByEmail?: string | null;
  createdAt: string;
}
/**
 * Result of checking a coupon against an order. reason explains a refusal so the UI can say why rather than just greying the field.
 */
export interface CouponValidation {
  valid: boolean;
  code: string;
  discountMinor: number;
  reason?: "unknown_code" | "inactive" | "expired" | "fully_redeemed" | "not_applicable" | "currency_mismatch" | null;
}
/**
 * Consumption of one service on one plan after a usage reservation settled. Distinct from billing.json's UsageSnapshot, which reports the standard plan's daily execution counter.
 */
export interface PlanUsageSnapshot {
  planId: string;
  planType: PlanType;
  status: AccountPlanStatus;
  serviceId: string;
  outcome: UsageOutcome;
  /**
   * False when the hold was released instead of committed
   */
  charged: boolean;
  budgetRemaining: number | null;
  usageCount: number;
  usageCostMinor: number;
}
