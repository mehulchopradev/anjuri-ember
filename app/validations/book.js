import { validatePresence, validateLength, validateNumber } from 'ember-changeset-validations/validators'

export default {
    title: [
        validatePresence(true),
        validateLength({ min: 5, max: 10}),
    ],
    pages: [
        validatePresence(true),
        validateNumber({ positive: true, gt: 0 })
    ],
    price: [
        validateNumber({ positive: true, gt: 0 })
    ]
}