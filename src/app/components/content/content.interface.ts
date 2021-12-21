export interface IProduct{
    sku: Number;
    name: String;
    saleTag: String;
    prodImage: String;
    price: Number;
    disPrice: Number;
}
export interface showRunner{
    sku: Number;
    name: String;
    saleTag: String;
    prodImage: String;
    price: Number;
    disPrice: Number;
    revives: Number;
    summary: String;
    availability: String;
    categori: String;
    tag: String;
    share: {
        facebook: String;
        twitter: String;
        instagram: String;
        linkedin: String;
    };
    description: {
        desSummary: String;
        desList: {
            lineOne: String;
            lineTwo: String;
            lineTree: String;
            lineFour: String;
            lineFive: String;
            lineSix: String;
        };
    };
}

export interface CommentRev {
    img: String;
    stars: {
        starOne: Boolean;
        starTwo: Boolean;
        starTree: Boolean;
        starFour: Boolean;
        starFive: Boolean;
    };
    name: String;
    revive: String;

}
