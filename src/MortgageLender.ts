import { NumericLiteral } from "typescript";
import LoanApplication from "./LoanApplication";
import { LoanStatus } from "./LoanStatus";

export default class MortgageLender {
    availableFunds: number = 0;
    pendingFunds: number = 0;


    addFunds(fundAmt: number): void {
        this.availableFunds += fundAmt;
    }

    subtractFunds(loanAmt: number): void {
        this.availableFunds -= loanAmt;
    }

    reviewApplication(loanApp): void {

        let savingsThreshold = loanApp.savings / loanApp.loanAmount;

        if(loanApp.creditScore > 620 && savingsThreshold >= .25 && loanApp.dti < 36)
        {
            loanApp.isQualified = true;
        } else {
            loanApp.isQualified = false;
       }
       
    }

    sendOffer(loanApp): void {
        loanApp.loanStatus = LoanStatus.Pending;
        this.pendingFunds = loanApp.loanAmount;
        this.subtractFunds(loanApp.loanAmount);
    }

    releaseOffer(loanApp): void {
        if(loanApp.loanStatus == LoanStatus.Approved)
        {
            this.pendingFunds = 0;
        } else {
            this.pendingFunds = 0;
            this.addFunds(loanApp.loanAmount);
        }
    }

    approve(loanApp): void {
        if(loanApp.loanAmount <= this.availableFunds)
        {
            loanApp.loanStatus = LoanStatus.Approved;
        } else {
            loanApp.loanStatus = LoanStatus.Denied;
        }
        
    }
}