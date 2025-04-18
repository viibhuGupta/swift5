const name = "kamlesh kumar meena";
const amountSend = "1,500 ";
const ConvertAmount = "127,712.55";
const wiseFees = "14.02 ";
const rateOFDollars = "85.9450 ";
const bankType = "Private";
const ifscCode = "SBIN0031828";
const accountNumber = "34283136004";
const bankName = "STATE BANK OF INDIA";
const transactionNumberAdd = "#1496390924";
const dayTake = "9";
const paymentDataTime = "Sunday, 13 April at 18:41";
const bankReceivePaymentDataTime = "13 April  ";
const bankPaidToCoustomerBank = "19 April at 11:56";
const coustomerReceiveMoney = "Monday, 21 April at 21:00";
// const branchCode = "030";
export const category = "e";

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
