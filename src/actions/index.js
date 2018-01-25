export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property (purpose of the action)
  // Action always contains a type and a payload.
  console.log('clicked');
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}