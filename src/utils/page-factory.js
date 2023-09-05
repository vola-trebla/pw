/**
 * Собирает селектор (заметил, что часто встречается аттрибут data-qa)
 * @param qaId - значение аттрибута data-qa
 * @returns {`[data-qa="${string}"]`}
 */
export const makeSelector = (qaId) => `[data-qa="${qaId}"]`;
