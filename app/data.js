const name = "Abhishek Jaiswal Y";
const amountSend = "1,200 ";
const ConvertAmount = "101,262.34"; // 10 * 85.3340
const wiseFees = "12.64";
const rateOFDollars = "85.2836";
const bankType = "Private";
const ifscCode = "CNRB0018973";
const accountNumber = "110060010380";
const bankName = "CANARA BANK";
const transactionNumberAdd = "#1483008337";
const dayTake = "9";
const paymentDataTime = "Thursday, 3 April at 22:36";
const bankReceivePaymentDataTime = "Today";
const bankPaidToCoustomerBank = "9 April at 11:56";
const coustomerReceiveMoney = "Friday, 11 April at 23:30";
// const branchCode = "030";

const bankCode = "125";
const idNumber = "5006255205";
const receipentPhoneNumber = "57 3134202931";
const accountType = "Saving";
const idType = "Passport (Pasaporte)";

// Currency types
//         npm run dev --  --host
const shareYes = "n";
const currencyTypeReceive = "INR";
const currencyTypeSender = "USD";

// Using the currency types and other constants
const customerName = name;
const convertAmount = `${ConvertAmount} ${currencyTypeReceive}`;
const sendingAmount = `${amountSend} ${currencyTypeSender}`;
const Wisefees = `${wiseFees} ${currencyTypeSender}`;
const exchangeRate = `1 ${currencyTypeSender} = ${rateOFDollars} ${currencyTypeReceive}`;

// Customer details
const ps = "Payment Successful";

export const customer = {
  name: customerName,
  convertAmount: convertAmount,
  paymentStatus: ps,
};

const p = "pending";
const c = "completed";
const i = "in-progress";
// Updates array
export const updates = [
  {
    date: paymentDataTime,
    message: "Your transfer Completed",
    status: c,
  },
  {
    date: "Your money converted by bank",
    message: `Recipient bank might take up to ${dayTake} days to convert currency. We'll let you know when it arrives.`,
    status: c,
  },
  {
    date: bankReceivePaymentDataTime, // Updated date
    message: `Bank received your ${currencyTypeSender}`,
    status: c,
  },
  {
    date: bankPaidToCoustomerBank, // Updated date
    message: `Bank paid out your ${currencyTypeReceive}`,
    status: i,
  },
  {
    date: coustomerReceiveMoney, // Updated date
    message: `${customerName} receives your ${currencyTypeReceive}`, // Using constant for name
    status: p,
  },
];

// Transaction details
export const transactionDetails = {
  sending: sendingAmount,
  fees: Wisefees,
  discount: Wisefees,
  amountConvert: convertAmount,
  exchangeRate: exchangeRate,
  receiveAmount: convertAmount,
  recipientType: bankType,
  ifscCode: ifscCode,
  accountNumber: accountNumber,
  accountHolderName: customerName,
  bankName: bankName,
  transactionNumber: transactionNumberAdd,
  accountType: accountType,
  receipentPhoneNumber: receipentPhoneNumber,
  idType: idType,
  idNumber: idNumber,
  currency: currencyTypeReceive,
  bankcode: bankCode,
  shareYes: shareYes,
};

// Sender details
export const senderDetails = {
  transactionNumber: transactionNumberAdd,
  amount: sendingAmount,
};
