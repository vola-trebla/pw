/**
 * Собирает селектор (заметил, что часто встречается аттрибут data-qa)
 * @param qaId - значение аттрибута data-qa
 * @returns {`[data-qa="${string}"]`}
 */
const makeSelector = (qaId) => `[data-qa="${qaId}"]`;

exports.makeSelector = makeSelector;
