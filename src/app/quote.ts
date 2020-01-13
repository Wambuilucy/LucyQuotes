export class Quote {
    isDescriptionShown: boolean;
  downVotes: any;
  upVotes: any;
    // upVotes: number;
    // downVotes: number;
    constructor(
      public authorName: string, 
      public quoteText: string, 
      public createdBy: string, 
      public dateCreated: Date) {
        this.isDescriptionShown = false;
        // this.upVotes = 0;
        // this.downVotes = 0;
    }
}
