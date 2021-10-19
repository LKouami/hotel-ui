export class CommonFunctions {
    static get entity() {
      return "commonFunctions";
    }

    static makeToast(variant = null, messageBody, title, toastGenerator) {
        toastGenerator.toast(`${messageBody}`, {
          title: `${title}`,
          variant: variant,
          solid: true,
          autoHideDelay: 1000,
        });
      }
}