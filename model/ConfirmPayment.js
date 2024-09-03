const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
    {
        event:  {type: String}, //the notification is only sent for successful charge,
        data: {
            reference: {type: String},
            currency: {type: String},
            amount: {type: String}, //amount paid by the customer
            amount_expected: {type: String}, //amount that the customer is expected to pay
            fee: {type: String},
            status: {type: String},
            payment_reference: {type: String}, //unique reference sent by the merchant
            transaction_status: {type: String}, //the status of the charge base on the amount paid by the customer. This can either be `success`, `underpaid` or `overpaid`,
        metadata: {
            internalRef: {type: String},
            age:{type: Number},
            fixed: {type: Boolean},
        }
        }
     }
)

const paymentModel = mongoose.model("paymentProof", paymentSchema)

module.exports = paymentModel