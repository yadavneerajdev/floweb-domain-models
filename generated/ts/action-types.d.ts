/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Every automation action-type identifier (33 web + 17 desktop = 50).
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
 * The 17 desktop automation action types (subset of ActionType).
 */
export type DesktopActionType =
  | "desktopWaitForImage"
  | "desktopVerifyImage"
  | "desktopFindImage"
  | "desktopClickImage"
  | "desktopClickPoint"
  | "desktopTypeText"
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

export interface ActionTypesSchema {
  actionType?: ActionType;
  ActionType?: ActionType;
  DesktopActionType?: DesktopActionType;
}
