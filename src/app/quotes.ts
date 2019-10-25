export class Quote {
    showRemove:boolean = false;
    isShown:boolean = true;
    constructor (public quote: string, public author: string, public date: string, public createdBy: string) {
    }

    handleRemove() {
        this.showRemove = !this.showRemove
    }

    hide() {
        this.isShown = false;
    }
}

