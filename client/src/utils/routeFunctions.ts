import { router } from "@/router";
import { commonPaths } from "@/settings/commonPaths";

export function goToPartyCreatePage() {
  return router.push({ path: commonPaths.CREATE_PARTY });
}

export function goToMainPage() {
  return router.push({ path: commonPaths.MAIN });
}

export function goToProfilePage() {
  return router.push({ path: commonPaths.PROFILE });
}

export function goToRegisterPage() {
  return router.push({ path: commonPaths.REGISTER })
}
export function goToLoginPage() {
  return router.push({ path: commonPaths.LOGIN })
}
