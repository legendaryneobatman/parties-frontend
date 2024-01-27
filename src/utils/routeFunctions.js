import { router } from "@/router";
import { commonPaths } from "@/router/commonPaths";
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
    return router.push({ path: commonPaths.SIGN_UP });
}
export function goToLoginPage() {
    return router.push({ path: commonPaths.SIGN_IN });
}
//# sourceMappingURL=routeFunctions.js.map