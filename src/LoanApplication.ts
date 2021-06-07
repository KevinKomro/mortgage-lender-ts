import { LoanStatus } from "./LoanStatus";
import MortgageLender from "./MortgageLender";

export default class LoanApplication {
    loanAmount: number;
    creditScore: number;
    isQualified: boolean;
    savings: number;
    dti: number;
    loanStatus: LoanStatus;

    constructor(loanAmount: number, dti: number, creditScore: number, savings: number) {
        this.loanAmount = loanAmount;
        this.dti = dti;
        this.creditScore = creditScore;
        this.savings = savings; 
    }


    isApproved(): boolean {

        if(this.loanStatus == LoanStatus.Approved) {
            return true;
        } else {
            return false;
        }
    }
}