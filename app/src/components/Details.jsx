import React from "react";

const Details = ({ transactionDetails }) => {
  const currencyTypeReceive = transactionDetails.currency; // You can also pass this as a prop or import from data.js

  // Helper function to render receipt details based on the currency type
  const renderReceiptDetails = () => {
    if (currencyTypeReceive === "Other") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type yes</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank code (BIC/SWIFT)</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Card Number</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between ">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    } 
    
    else if (currencyTypeReceive === "RUB") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type yes</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            {/* <p className="text-sm text-gray-500 mb-2">Bank code (BIC/SWIFT)</p> */}
            <p className="text-sm text-gray-500 mb-2">Routing Number</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">IBAN</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between ">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    }  
    
    else if (currencyTypeReceive === "PLN") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type yes</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank code (BIC/SWIFT)</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">IBAN</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between ">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    } 
    
    
    else if (currencyTypeReceive === "USD") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type yes</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank code (BIC/SWIFT)</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">IBAN</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    }  
    

    else if (currencyTypeReceive === "UAH") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type yes</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank code (BIC/SWIFT)</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">IBAN</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    } 

    else if (currencyTypeReceive === "VND") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type yes</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank code (BIC/SWIFT)</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">IBAN</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    } 
    
    else if (currencyTypeReceive === "INR") {
      return (
        <>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Recipient type</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">IFSC code</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Account number</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    }
    
    else if (currencyTypeReceive === "COP") {
      return (
        <>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Recipient type</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Bank code</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Account number</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Account type</p>
            <p className="text-gray-700">{transactionDetails.accountType}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">
              Recipient's phone number
            </p>
            <p className="text-gray-700">
              {transactionDetails.receipentPhoneNumber}
            </p>
          </div>

          <div className="flex  gap-[12rem] mb-1">
            <p className="text-sm text-gray-500 mb-2">ID type</p>
            <p className="text-gray-700 ">{transactionDetails.idType}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">ID number</p>
            <p className="text-gray-700">{transactionDetails.idNumber}</p>
          </div>

          <div className="flex gap-[7.8rem] mb-1  ">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    } 
    
    else if (currencyTypeReceive === "BDT") {
      return (
        <>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Recipient type</p>
            <p className="text-gray-700">{transactionDetails.recipientType}</p>
          </div>

          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Bank code</p>
            <p className="text-gray-700">{transactionDetails.bankcode}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Branch code</p>
            <p className="text-gray-700">{transactionDetails.ifscCode}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-500 mb-2">Account number</p>
            <p className="text-gray-700">{transactionDetails.accountNumber}</p>
          </div>

          <div className="flex gap-[7.8rem] mb-1 justify-between  ">
            <p className="text-sm text-gray-500 mb-2">Account holder name</p>
            <p className="text-gray-700">
              {transactionDetails.accountHolderName}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500 mb-2">Bank name</p>
            <p className="text-gray-700">{transactionDetails.bankName}</p>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="pl-5 pr-5 mt-7 mb-10">
      <div>
        <h3 className="text-lg font-semibold mb-4">Transaction details</h3>
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">You send</p>
            <p className="text-gray-700">{transactionDetails.sending}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Wise's fees</p>
            <p className="text-gray-700">{transactionDetails.fees}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Discount</p>
            <p className="text-gray-700">{transactionDetails.discount}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Amount convert</p>
            <p className="text-gray-700">{transactionDetails.amountConvert}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500 mb-2">Exchange rate</p>
            <p className="text-gray-700">{transactionDetails.exchangeRate}</p>
          </div>
          <div>
          <hr className="border-t-[1.4px] border-dashed border-gray-300 my-4" />
            <div className="flex justify-between items-center  ">
              <div className=" max-w-[15rem]">
                <p className="text-sm  text-gray-500 ">
                  {transactionDetails.accountHolderName} going to receive
                </p>
              </div>

              <p className="text-gray-700">
                {transactionDetails.receiveAmount}
              </p>
            </div>
            <hr className="border-t-[1.4px] border-dashed border-gray-300 my-4" />
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500 mb-2">Transaction number</p>
            <p className="text-gray-700">
              {transactionDetails.transactionNumber}
            </p>
          </div>

          {/* Move the bank details heading here */}
          <h3 className="text-lg font-semibold mb-2">
            {transactionDetails.accountHolderName}'s bank details
          </h3>
          {/* Corrected the function call */}
          {renderReceiptDetails()}
        </div>
      </div>
    </div>
  );
};

export default Details;
