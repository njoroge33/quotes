export class Quote {
    showRemove:boolean = false;
    isShown:boolean = true;
    constructor (public quote: string, public author: string,  public date: Date, public createdBy: string, public upVotes: number, public downVotes:number) {
    }

    handleRemove() {
        this.showRemove = !this.showRemove
    }

    hide() {
        this.isShown = false;
    }
}

