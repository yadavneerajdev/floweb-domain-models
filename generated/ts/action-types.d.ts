/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Every automation action-type identifier (29 web + 18 desktop + 3 api + 4 integrations + 6 core = 60).
 */
export type ActionType =
  | "click"
  | "input"
  | "sendKeys"
  | "wait"
  | "navigate"
  | "scroll"
  | "screenshot"
  | "assertion"
  | "assertVisible"
  | "fillForm"
  | "clearInput"
  | "openNewTab"
  | "switchTab"
  | "goForward"
  | "goBack"
  | "refresh"
  | "getPageInfo"
  | "setViewport"
  | "apiCall"
  | "networkControl"
  | "accessibilityAudit"
  | "captureWebVitals"
  | "visualRegression"
  | "loadDataset"
  | "conditional"
  | "loop"
  | "dbQuery"
  | "dbInsert"
  | "custom"
  | "dragAndDrop"
  | "callToFlow"
  | "switchToFrame"
  | "exitFrame"
  | "getElementProperties"
  | "handlePopup"
  | "fileUpload"
  | "fileDownload"
  | "junction"
  | "desktopWaitForImage"
  | "desktopVerifyImage"
  | "desktopFindImage"
  | "desktopClickImage"
  | "desktopClickPoint"
  | "desktopTypeText"
  | "desktopFillForm"
  | "desktopMoveMouse"
  | "desktopDragAndDrop"
  | "desktopHotkey"
  | "desktopRunCommand"
  | "desktopRunScript"
  | "desktopCaptureScreen"
  | "desktopFocusWindow"
  | "desktopOpenApplication"
  | "desktopSwitchDesktop"
  | "desktopListProcesses"
  | "desktopOpenPath"
  | "gmail"
  | "slack"
  | "discord"
  | "jira";
/**
 * The 18 desktop automation action types (subset of ActionType).
 */
export type DesktopActionType =
  | "desktopWaitForImage"
  | "desktopVerifyImage"
  | "desktopFindImage"
  | "desktopClickImage"
  | "desktopClickPoint"
  | "desktopTypeText"
  | "desktopFillForm"
  | "desktopMoveMouse"
  | "desktopDragAndDrop"
  | "desktopHotkey"
  | "desktopRunCommand"
  | "desktopRunScript"
  | "desktopCaptureScreen"
  | "desktopFocusWindow"
  | "desktopOpenApplication"
  | "desktopSwitchDesktop"
  | "desktopListProcesses"
  | "desktopOpenPath";
/**
 * Actions that call an external application's API.
 */
export type IntegrationActionType = "gmail" | "slack" | "discord" | "jira";
/**
 * The 29 browser/DOM action types that require a live page context (subset of ActionType).
 */
export type WebActionType =
  | "click"
  | "input"
  | "sendKeys"
  | "scroll"
  | "dragAndDrop"
  | "fillForm"
  | "clearInput"
  | "assertion"
  | "assertVisible"
  | "getElementProperties"
  | "switchToFrame"
  | "exitFrame"
  | "handlePopup"
  | "fileUpload"
  | "fileDownload"
  | "navigate"
  | "goForward"
  | "goBack"
  | "refresh"
  | "openNewTab"
  | "switchTab"
  | "getPageInfo"
  | "setViewport"
  | "screenshot"
  | "custom"
  | "networkControl"
  | "accessibilityAudit"
  | "captureWebVitals"
  | "visualRegression";
/**
 * The 3 direct service-call action types: generic HTTP calls and database queries (subset of ActionType).
 */
export type ApiActionType = "apiCall" | "dbQuery" | "dbInsert";
/**
 * The 6 platform-agnostic control-flow and generic utility action types that need neither a browser nor OS automation (subset of ActionType).
 */
export type CoreActionType = "conditional" | "loop" | "junction" | "callToFlow" | "wait" | "loadDataset";

export interface ActionTypesSchema {
  actionType?: ActionType;
  ActionType?: ActionType;
  DesktopActionType?: DesktopActionType;
  IntegrationActionType?: IntegrationActionType;
  WebActionType?: WebActionType;
  ApiActionType?: ApiActionType;
  CoreActionType?: CoreActionType;
}
