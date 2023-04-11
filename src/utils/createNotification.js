export const createNotification = ( text ) => {
  document.dispatchEvent(new CustomEvent('add-notification', {
    detail: {
      text: text,
      createdDate: new Date(),
      checked: false
    },
    // bubbles: true,
    // composed: true
  }));
}